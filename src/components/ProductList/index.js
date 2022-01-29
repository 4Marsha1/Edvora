import React from 'react';
import styles from './ProductList.module.css';
import ProductCard from '../ProductCard';

const index = () => {
    return (
        <div className={styles['section']}>
            <span className={styles['brand-name']}>Product Name</span>
            <div className={styles['hr']}></div>
            <div className={styles['cards']}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default index;
