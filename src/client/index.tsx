import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

ReactDOM.hydrate(
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>
  , document.querySelector('#app'))