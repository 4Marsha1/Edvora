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
            {/* if the screen width is more than 540px, display the filter card in body  */}
            <div className={styles['filter']}>
                <FilterComponent
                    products={products}
                    productFilter={productFilter}
                    stateFilter={stateFilter}
                    cityFilter={cityFilter}
                    handleFilter={handleFilter}
                />
            </div>

            {/* if the screen width is less than 541px, display the filter card as sidebar  */}
            {
                // conditionally open / close sidebar 
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

            {/* if the screen width is less than 541px, display the filter icon on screen  */}
            <div className={styles['filter-icon']} onClick={toggleSidebar}>
                <FilterIcon className={styles['icon']} />
            </div>

            {/* the main display component where products are listed by category  */}
            <DisplayComponent
                isLoading={isLoading}
                productsListForFilter={productsListForFilter}
                brandNames={brandNames}
            />
        </>
    );
};

export default Index;
