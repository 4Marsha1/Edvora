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
            brandNames: []
        }
    }

    async componentDidMount() {
        await this.props.fetchProducts();
        this.setState({ ...this.state, products: this.props.products })
        const brandNames = [...new Set(this.state.products.map(product => product.brand_name))]
        this.setState({ ...this.state, brandNames: brandNames })
        console.log(this.state.products);
    }

    toggleSidebar = () => {
        this.setState({ ...this.state, isSidebarOpen: !this.state.isSidebarOpen })
    }

    render() {
        return (
            <>
                <HomeScreen
                    isSidebarOpen={this.state.isSidebarOpen}
                    toggleSidebar={this.toggleSidebar}
                    products={this.state.products}
                    brandNames={this.state.brandNames}
                />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);