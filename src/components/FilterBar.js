import React from 'react';
import ListFilter from './ListFilter';
import { filters } from '../resources/defaulValues';

const FilterBar = ({ products, setCategoryFilter, setPriceFilter, jump }) => {
    let categories = [...products].map(e => e.category);
    const category = {...filters.category, options: categories.filter((element,pos) => categories.indexOf(element) === pos)};

    return (
        <div className='filterBar'>
            <p>Filter by: </p>
            <ListFilter {...category} handleFilterChange={setCategoryFilter} jump={jump}/>
            <ListFilter {...filters.price} handleFilterChange={setPriceFilter} jump={jump} />
        </div>
    );
}

export default FilterBar;