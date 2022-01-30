import React from 'react';
import styles from './ProductCard.module.css';

const index = ({ productName, brandName, price, image, location, date, description }) => {
    const add0 = (value) => (value < 10 ? '0' : '') + value;
    let timeStamp = new Date(date).getTime();
    let day = new Date(timeStamp).getDate();
    day = add0(day);
    let month = new Date(timeStamp).getMonth();
    month = month + 1;
    month = add0(month);
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
                    <span className={styles['date']}>Date: {`${day}-${month}-${year}`}</span>
                </div>
                <span className={styles['desc']}>{description}</span>
            </div>
        </div>
    );
};

export default index;
