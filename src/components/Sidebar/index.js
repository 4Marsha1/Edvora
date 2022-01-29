import React from 'react';
import styles from './Sidebar.module.css';
import FilterComponent from '../FilterComponent';

const index = ({ toggleSidebar }) => {
    return (
        <div className={styles['sidebar']}>
            <button className={styles['close']} onClick={toggleSidebar}>&#10006;</button>
            <FilterComponent />
        </div>
    );
};

export default index;
