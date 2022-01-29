import React from 'react';
import styles from './Display.module.css';
import ProductList from '../ProductList';

const Index = () => {
    return (
        <div className={styles['container']}>
            <span className={styles['header']}>Edvora</span>
            <span className={styles['title']}>Products</span>
            <ProductList />
            <ProductList />
        </div>
    );
};

export default Index;
