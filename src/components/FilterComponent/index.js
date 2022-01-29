import React from 'react';
import styles from './Filter.module.css';

const Index = ({ products, stateFilter, cityFilter, productFilter, handleFilter }) => {
    const productNames = [...new Set(products.map(product => product.product_name))];
    const productOptions = productNames.map((name, index) => {
        return <option key={index} value={name}>{name}</option>
    });

    let states;
    {
        states = productFilter === '' ?
            [...new Set(products.map(product => product.address.state))] :
            [...new Set(products.filter(product => product.product_name === productFilter).map(product => product.address.state))]
    }
    const stateOptions = states.map((state, index) => {
        return <option key={index} value={state}>{state}</option>
    });

    let cities;
    {
        cities = stateFilter === '' ?
            [...new Set(products.map(product => product.address.city))] :
            [...new Set(products.filter(product => product.address.state === stateFilter).map(product => product.address.city))]
    }
    const cityOptions = cities.map((city, index) => {
        return <option key={index} value={city}>{city}</option>
    });

    return (
        <div className={styles['container']}>
            <div className={styles['filter-card']}>
                <span className={styles['title']}>Filters</span>
                <div className={styles['hr']}></div>
                <form className={styles['filter']}>
                    <select className={styles['dropdown']}
                        name="productFilter" value={productFilter} onChange={handleFilter}>
                        <option value="0" selected>Products</option>
                        {productOptions}
                    </select>
                    <select className={styles['dropdown']}
                        name="stateFilter" value={stateFilter} onChange={handleFilter} >
                        <option value="0" selected>State</option>
                        {stateOptions}
                    </select>
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
