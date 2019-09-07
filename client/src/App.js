import React from 'react';

import Search from './components/Search'
import Result from './components/Result'
import { APIProvider, APIConsumer } from './provider/api';

import './App.css';

function App() {
  return (
      <div className="App">
        <header>
          <Search />
          <Result />
        </header>
      </div>
  );
}

const AppConsumer = () => (
  <APIProvider><App results={APIProvider.results}/> </APIProvider>
)
export default AppConsumer;
