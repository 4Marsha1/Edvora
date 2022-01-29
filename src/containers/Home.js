import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeScreen from '../components/HomeScreen';
import { fetchProducts } from '../redux/actions/products';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSidebarOpen: false,
            products: [],
            brandNames: [],
            productsListForFilter: [],
            productFilter: '',
            stateFilter: '',
            cityFilter: ''
        }
    }

    async componentDidMount() {
        await this.props.fetchProducts();
        if (!this.props.loading) {
            console.log(this.props.products);
            this.setState({ ...this.state, products: this.props.products, productsListForFilter: this.props.products })
            const brandNames = [...new Set(this.state.products.map(product => product.brand_name))]
            this.setState({ ...this.state, brandNames: brandNames })
        }
    }

    toggleSidebar = () => {
        this.setState({ ...this.state, isSidebarOpen: !this.state.isSidebarOpen })
    }

    handleFilter = async (e) => {
        e.preventDefault();
        if (e.target.name === 'productFilter')
            this.setState({ ...this.state, productFilter: e.target.value })
        if (e.target.name === 'stateFilter')
            this.setState({ ...this.state, stateFilter: e.target.value })
        if (e.target.name === 'cityFilter')
            this.setState({ ...this.state, cityFilter: e.target.value })

        setTimeout(() => {
            let products;
            // only product filter
            if (e.target.name === 'productFilter' && (this.state.productFilter !== '' || this.state.productFilter !== 0))
                products = this.state.products.filter(product => product.product_name === this.state.productFilter);
            // only state filter
            if (e.target.name === 'stateFilter' && (this.state.stateFilter !== '' || this.state.stateFilter !== 0))
                products = this.state.products.filter(product => product.address.state === this.state.stateFilter);
            // only city filter
            if (e.target.name === 'cityFilter' && (this.state.cityFilter !== '' || this.state.cityFilter !== 0))
                products = this.state.products.filter(product => product.address.city === this.state.cityFilter);
            // product - state filter
            if ((e.target.name === 'productFilter' && (this.state.productFilter !== '' || this.state.productFilter !== 0))
                && (e.target.name === 'stateFilter' && (this.state.stateFilter !== '' || this.state.stateFilter !== 0)))
                products = this.state.products
                    .filter(product => product.product_name === this.state.productFilter)
                    .filter(product => product.address.state === this.state.stateFilter)
            // state - city filter
            if ((e.target.name === 'stateFilter' && (this.state.stateFilter !== '' || this.state.stateFilter !== 0))
                && (e.target.name === 'cityFilter' && (this.state.cityFilter !== '' || this.state.cityFilter !== 0)))
                products = this.state.products
                    .filter(product => product.address.state === this.state.stateFilter)
                    .filter(product => product.address.city === this.state.cityFilter)
            // setState
            this.setState({ ...this.state, productsListForFilter: products });
        }, 1000);
    }

    render() {
        return (
            <>
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

const mapStateToProps = state => {
    return {
        products: state.products,
        loading: state.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);