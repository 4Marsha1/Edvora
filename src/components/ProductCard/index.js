import React from 'react';
import styles from './ProductCard.module.css';

const index = ({ productName, brandName, price, image, location, date, description }) => {
    let timeStamp = new Date(date).getTime();
    let day = new Date(timeStamp).getDate();
    let month = new Date(timeStamp).getMonth();
    let year = new Date(timeStamp).getFullYear();
    return (
        <div className={styles['card']}>
            <div className={styles['details']}>
                <img className={styles['product-img']} src={image} alt="" />
                <div className={styles['info']}>
                    <span className={styles['product-name']}>{productName}</span>
                    <span className={styles['product-brand']}>{brandName}</span>
                    <span className={styles['product-price']}>$ {price}</span>
                </div>
            </div>
            <div className={styles['more-info']}>
                <div className={styles['loc-date']}>
                    <span className={styles['location']}>{location.city}</span>
                    <span className={styles['date']}>Date: {`${day}-${month + 1}-${year}`}</span>
                </div>
                <span className={styles['desc']}>{description}</span>
            </div>
        </div>
    );
};

export default index;
