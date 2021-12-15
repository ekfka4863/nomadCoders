import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Todolist from './Todolist';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Todolist />
    <CoinTracker />
  </React.StrictMode>,

  document.getElementById('root')
);
