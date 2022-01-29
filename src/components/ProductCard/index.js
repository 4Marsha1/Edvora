import React from 'react';
import styles from './ProductCard.module.css';

const index = () => {
    return (
        <div className={styles['card']}>
            <div className={styles['details']}>
                <img className={styles['product-img']} src="https://picsum.photos/200" alt="" />
                <div className={styles['info']}>
                    <span className={styles['product-name']}>Product Name</span>
                    <span className={styles['product-brand']}>Brand Name</span>
                    <span className={styles['product-price']}>$ 29.99</span>
                </div>
            </div>
            <div className={styles['more-info']}>
                <div className={styles['loc-date']}>
                    <span className={styles['location']}>Location</span>
                    <span className={styles['date']}>Date: 10-12-2021</span>
                </div>
                <span className={styles['desc']}>Description of the product/item</span>
            </div>
        </div>
    );
};

export default index;
