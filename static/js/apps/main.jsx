import React from 'react';
import ReactDOM from 'react-dom';
import Products from './components/Products'
import Display from './components/Display'
import data from '../../../data/mock.json'



const App = () =>
  <div>
    <Display data={data}/>
    <Products data={data} />
  </div>;

ReactDOM.render(<App />, document.getElementById('app'));
