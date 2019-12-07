import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { Provider } from 'react-redux'
import generateStore from './common/store'
import { renderRoutes } from 'react-router-config'

declare global {
  interface Window { INITIAL_STATE: any; }
}
const store = generateStore(window.INITIAL_STATE)

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div> 
    </BrowserRouter>
  </Provider>
  , document.querySelector('#app'))