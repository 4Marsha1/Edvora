import React from 'react';
import styles from './Display.module.css';
import ProductList from '../ProductList';

const Index = ({ productsListForFilter, brandNames, isLoading }) => {
    const list = brandNames.map((brandName, index) => {
        const productList = productsListForFilter.filter(product => product.brand_name === brandName)
        return productList.length > 0 ?
            (<ProductList
                key={index}
                productList={productList}
                brandName={brandName}
            />) : <></>
    })
    return (
        <div className={styles['container']}>
            <span className={styles['header']}>Edvora</span>
            <span className={styles['title']}>Products</span>
            {
                isLoading ?
                    <div className={styles['loading']}>
                        <span className={styles['msg']}>Loading ...</span>
                    </div> : list
            }
        </div>
    );
};

export default Index;
