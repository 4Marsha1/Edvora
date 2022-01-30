import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeScreen from '../components/HomeScreen';
import { fetchProducts } from '../redux/actions/products';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSidebarOpen: false,               // maintaining the state of sidebar
            products: [],                       // all the products obtained from API
            productsListForFilter: [],          // storing the filtered products as per filter chosen
            brandNames: [],                     // storing all brandNames for catergorizing purpose
            productFilter: '',                  // Product chosen in filter
            stateFilter: '',                    // State chosen in filter
            cityFilter: ''                      // City chosen in filter
        }
    }

    // when the component mounts, fetch the data from API and store it in state
    async componentDidMount() {
        await this.props.fetchProducts();
        if (!this.props.loading) {
            // storing the products
            this.setState({ ...this.state, products: this.props.products, productsListForFilter: this.props.products })
            // storing the brandNames of all different products obtained
            const brandNames = [...new Set(this.state.products.map(product => product.brand_name))]
            this.setState({ ...this.state, brandNames: brandNames })
        }
    }

    // to open / close the sidebar in mobile view
    toggleSidebar = () => {
        this.setState({ ...this.state, isSidebarOpen: !this.state.isSidebarOpen })
    }

    // filtering the lists of products
    handleFilter = (e) => {
        e.preventDefault();
        // getting the type of filter and filter value chosen 
        if (e.target.name === 'productFilter')
            this.setState({ ...this.state, productFilter: e.target.value })
        if (e.target.name === 'stateFilter')
            this.setState({ ...this.state, stateFilter: e.target.value })
        if (e.target.name === 'cityFilter')
            this.setState({ ...this.state, cityFilter: e.target.value })

        setTimeout(() => {
            let products;
            // filter by product only
            if (e.target.name === 'productFilter' && (this.state.productFilter !== '' || this.state.productFilter !== 0))
                products = this.state.products.filter(product => product.product_name === this.state.productFilter);
            // filter by state only
            if (e.target.name === 'stateFilter' && (this.state.stateFilter !== '' || this.state.stateFilter !== 0))
                products = this.state.products.filter(product => product.address.state === this.state.stateFilter);
            // filter by city only
            if (e.target.name === 'cityFilter' && (this.state.cityFilter !== '' || this.state.cityFilter !== 0))
                products = this.state.products.filter(product => product.address.city === this.state.cityFilter);
            // filter by product and state
            if ((e.target.name === 'productFilter' && (this.state.productFilter !== '' || this.state.productFilter !== 0))
                && (e.target.name === 'stateFilter' && (this.state.stateFilter !== '' || this.state.stateFilter !== 0)))
                products = this.state.products
                    .filter(product => product.product_name === this.state.productFilter)
                    .filter(product => product.address.state === this.state.stateFilter)
            // filter by state and city
            if ((e.target.name === 'stateFilter' && (this.state.stateFilter !== '' || this.state.stateFilter !== 0))
                && (e.target.name === 'cityFilter' && (this.state.cityFilter !== '' || this.state.cityFilter !== 0)))
                products = this.state.products
                    .filter(product => product.address.state === this.state.stateFilter)
                    .filter(product => product.address.city === this.state.cityFilter)
            // updating the filtered list
            this.setState({ ...this.state, productsListForFilter: products });
        }, 1000);
    }

    render() {
        return (
            <>
                {/* basically contains everything to be displayed  */}
                <HomeScreen
                    isLoading={this.props.loading}
                    isSidebarOpen={this.state.isSidebarOpen}
                    toggleSidebar={this.toggleSidebar}
                    products={this.state.products}
                    brandNames={this.state.brandNames}
                    productsListForFilter={this.state.productsListForFilter}
                    productFilter={this.state.productFilter}
                    stateFilter={this.state.stateFilter}
                    cityFilter={this.state.cityFilter}
                    handleFilter={this.handleFilter}
                />
            </>
        );
    }
}

// getting redux state into the react component 
const mapStateToProps = state => {
    return {
        products: state.products,
        loading: state.loading
    }
}
// getting the methods from actions into the react component
const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

// connecting react and redux with connect function from react-redux library 
export default connect(mapStateToProps, mapDispatchToProps)(Home);