import React, { useEffect } from 'react';
import styles from './Homescreen.module.css';
import DisplayComponent from '../DisplayComponent';
import FilterComponent from '../FilterComponent';
import Sidebar from '../Sidebar';
import { ReactComponent as FilterIcon } from '../../icons/filter.svg';

const Index = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <>
            <div className={styles['filter']}>
                <FilterComponent />
            </div>
            {
                isSidebarOpen ? <div className={styles['sidebar']}>
                    <Sidebar toggleSidebar={toggleSidebar} />
                </div> : <></>
            }
            <div className={styles['filter-icon']} onClick={toggleSidebar}>
                <FilterIcon className={styles['icon']} />
            </div>
            <DisplayComponent />
        </>
    );
};

export default Index;
