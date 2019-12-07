import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { Provider } from 'react-redux'
import generateStore from './common/store'
import { renderRoutes } from 'react-router-config'

const store = generateStore()

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div> 
    </BrowserRouter>
  </Provider>
  , document.querySelector('#app'))