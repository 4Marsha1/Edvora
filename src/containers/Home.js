import React, { Component } from 'react';
import HomeScreen from '../components/HomeScreen';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSidebarOpen: false,
        }
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
                />
            </>
        );
    }
}

export default Home;