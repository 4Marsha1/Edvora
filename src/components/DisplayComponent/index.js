import React from 'react';
import styles from './Display.module.css';
import ProductList from '../ProductList';

const Index = ({ products, brandNames }) => {
    const list = brandNames.map((brandName, index) => {
        return (
            <ProductList
                key={index}
                productList={products.filter(product => product.brand_name === brandName)}
                brandName={brandName}
            />
        )
    })
    return (
        <div className={styles['container']}>
            <span className={styles['header']}>Edvora</span>
            <span className={styles['title']}>Products</span>
            {list}
        </div>
    );
};

export default Index;
