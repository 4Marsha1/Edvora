import React, { useEffect } from 'react';
import styles from './Homescreen.module.css';
import DisplayComponent from '../DisplayComponent';
import FilterComponent from '../FilterComponent';
import Sidebar from '../Sidebar';
import { ReactComponent as FilterIcon } from '../../icons/filter.svg';

const Index = ({ isSidebarOpen, toggleSidebar, products, brandNames, productFilter,
    stateFilter, cityFilter, handleFilter, productsListForFilter, isLoading }) => {
    return (
        <>
            <div className={styles['filter']}>
                <FilterComponent
                    products={products}
                    productFilter={productFilter}
                    stateFilter={stateFilter}
                    cityFilter={cityFilter}
                    handleFilter={handleFilter}
                />
            </div>
            {
                isSidebarOpen ? <div className={styles['sidebar']}>
                    <Sidebar
                        toggleSidebar={toggleSidebar}
                        products={products}
                        productFilter={productFilter}
                        stateFilter={stateFilter}
                        cityFilter={cityFilter}
                        handleFilter={handleFilter}
                    />
                </div> : <></>
            }
            <div className={styles['filter-icon']} onClick={toggleSidebar}>
                <FilterIcon className={styles['icon']} />
            </div>
            <DisplayComponent
                isLoading={isLoading}
                productsListForFilter={productsListForFilter}
                brandNames={brandNames}
            />
        </>
    );
};

export default Index;
