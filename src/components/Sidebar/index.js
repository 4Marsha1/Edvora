import React from 'react';
import styles from './Sidebar.module.css';
import FilterComponent from '../FilterComponent';

const index = ({ toggleSidebar, products, stateFilter, cityFilter, productFilter, handleFilter }) => {
    return (
        <div className={styles['sidebar']}>
            <button className={styles['close']} onClick={toggleSidebar}>&#10006;</button>
            <FilterComponent
                products={products}
                productFilter={productFilter}
                stateFilter={stateFilter}
                cityFilter={cityFilter}
                handleFilter={handleFilter}
            />
        </div>
    );
};

export default index;
