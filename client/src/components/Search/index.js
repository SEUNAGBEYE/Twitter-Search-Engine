import React from 'react';

import { APIConsumer } from '../../provider/api'
import './index.css'


function Search({ handleSearch, handleChangeSearch, q, isLoading }) {
    return (
        <div className="search-container">
            <input type='text' placeholder='Search' onKeyDown={e => e.key === 'Enter'? handleSearch({}) : null } onChange={e => handleChangeSearch(e.target.value)} value={q} disabled={isLoading}/>
            <span className="box">
                <select onChange={e => handleSearch({result_type: e.target.value})} disabled={isLoading}>
                    <option value="recent">Latest Tweets</option>
                    <option value="popular">Popular Tweets</option>
                    <option value="mixed">All Tweets</option>
                </select>
            </span>
        </div>
    );
  }
  
const SearchContainer = () => (
    <APIConsumer>
        { value => <Search {...value}/>}
    </APIConsumer>
)

export default SearchContainer;