import React from 'react';
import styles from './Display.module.css';
import ProductList from '../ProductList';

const Index = ({ productsListForFilter, brandNames, isLoading }) => {

    // segregating products as per brand names and making seperate lists
    const lists = brandNames.map((brandName, index) => {
        const productList = productsListForFilter.filter(product => product.brand_name === brandName)
        return productList.length > 0 ?
            (<ProductList
                key={index}
                productList={productList}
                brandName={brandName}
            />) : <></>
    })

    // This is the main display screen, where product listed by categories are displayed
    return (
        <div className={styles['container']}>
            <span className={styles['header']}>Edvora</span>
            <span className={styles['title']}>Products</span>
            {
                // if data is not yet fetched, display a loading message, else display the product Lists  
                isLoading ?
                    <div className={styles['loading']}>
                        <span className={styles['msg']}>Loading ...</span>
                    </div> : lists
            }
        </div>
    );
};

export default Index;
