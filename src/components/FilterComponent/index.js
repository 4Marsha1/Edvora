import React from 'react';
import styles from './Filter.module.css';

const Index = ({ products, stateFilter, cityFilter, productFilter, handleFilter }) => {

    // Getting product names in the filter dropdown 
    const productNames = [...new Set(products.map(product => product.product_name))];
    const productOptions = productNames.map((name, index) => {
        return <option key={index} value={name}>{name}</option>
    });

    let states;
    {
        // if any product is selected, only states for that product are displayed, else all states from API
        states = productFilter === '' ?
            [...new Set(products.map(product => product.address.state))] :
            [...new Set(products.filter(product => product.product_name === productFilter).map(product => product.address.state))]
    }
    const stateOptions = states.map((state, index) => {
        return <option key={index} value={state}>{state}</option>
    });

    let cities;
    {
        // if any state is selected, only cities of that state are displayed, else all cities from API
        cities = stateFilter === '' ?
            [...new Set(products.map(product => product.address.city))] :
            [...new Set(products.filter(product => product.address.state === stateFilter).map(product => product.address.city))]
    }
    const cityOptions = cities.map((city, index) => {
        return <option key={index} value={city}>{city}</option>
    });

    // the filter card 
    return (
        <div className={styles['container']}>
            <div className={styles['filter-card']}>
                {/* Just the title  */}
                <span className={styles['title']}>Filters</span>
                <div className={styles['hr']}></div>

                {/* all filter dropdowns  */}
                <form className={styles['filter']}>
                    {/* products dropdown  */}
                    <select className={styles['dropdown']}
                        name="productFilter" value={productFilter} onChange={handleFilter}>
                        <option value="0" selected>Products</option>
                        {productOptions}
                    </select>
                    {/* states dropdown  */}
                    <select className={styles['dropdown']}
                        name="stateFilter" value={stateFilter} onChange={handleFilter} >
                        <option value="0" selected>State</option>
                        {stateOptions}
                    </select>
                    {/* cities dropdown  */}
                    <select className={styles['dropdown']}
                        name="cityFilter" value={cityFilter} onChange={handleFilter}>
                        <option value="0" selected>City</option>
                        {cityOptions}
                    </select>
                </form>

            </div>
        </div>
    );
};

export default Index;
