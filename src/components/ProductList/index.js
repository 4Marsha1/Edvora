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
    return (
        <div className={styles['section']}>
            <span className={styles['brand-name']}>{brandName}</span>
            <div className={styles['hr']}></div>
            <div className={styles['cards']}>
                {productCards}
            </div>
        </div>
    );
};

export default index;
