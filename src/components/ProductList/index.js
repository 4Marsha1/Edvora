import React from 'react';
import styles from './ProductList.module.css';
import ProductCard from '../ProductCard';

const index = ({ productList, brandName }) => {
    const productCards = productList.map((product, index) => {
        return (
            <ProductCard
                key={index}
                productName={product.product_name}
                brandName={product.brand_name}
                price={product.price}
                image={product.image}
                location={product.address}
                date={product.time}
                description={product.discription}
            />
        )
    })

    const scrollLeft = () => {
        document.getElementById('cards').scrollLeft -= 100;
    }
    const scrollRight = () => {
        document.getElementById('cards').scrollLeft += 100;
    }

    return (
        <div className={styles['section']}>
            <span className={styles['brand-name']}>{brandName}</span>
            <div className={styles['hr']}></div>
            <div className={styles['cards-container']}>
                <button className={styles['btn']} onClick={scrollLeft}>&#8249;</button>
                <div className={styles['cards']} id='cards'>
                    {productCards}
                </div>
                <button className={styles['btn']} onClick={scrollRight}>&#8250;</button>
            </div>
        </div>
    );
};

export default index;
