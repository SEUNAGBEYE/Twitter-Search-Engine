import React from 'react';

import { APIConsumer } from '../../provider/api'
import './index.css'


function Search({ handleSearch }) {
    return (
        <input type='text' placeholder='Search' onKeyDown={event => event.key === 'Enter'? handleSearch(event.target.value) : null }/>
    );
  }
  
const SearchContainer = () => (
    <APIConsumer>
        { ({ handleSearch }) => <Search handleSearch={handleSearch}/>}
    </APIConsumer>
)

export default SearchContainer;