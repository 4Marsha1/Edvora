import React from 'react';
import styles from './Filter.module.css';

const Index = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['filter-card']}>
                <span className={styles['title']}>Filters</span>
                <div className={styles['hr']}></div>
                <form className={styles['filter']}>
                    <select className={styles['dropdown']} name="product">
                        <option value="0" disabled selected>Products</option>
                        <option value="1">Apple</option>
                        <option value="2">Microsoft</option>
                    </select>
                    <select className={styles['dropdown']} name="state">
                        <option value="0" disabled selected>State</option>
                        <option value="1">Assam</option>
                        <option value="2">Bihar</option>
                    </select>
                    <select className={styles['dropdown']} name="city">
                        <option value="0" disabled selected>City</option>
                        <option value="1">Guwahati</option>
                        <option value="2">Dibrugarh</option>
                    </select>
                </form>
            </div>
        </div>
    );
};

export default Index;
