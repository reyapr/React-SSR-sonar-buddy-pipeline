import { createStore, applyMiddleware } from'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers/index'
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"

export default (initialState: any = {}) => {
  const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
  
  return store
}