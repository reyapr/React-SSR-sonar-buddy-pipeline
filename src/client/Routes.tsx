import React from 'react'
import { Route } from 'react-router-dom'
import App from './components/App'
import User from './components/User'

export default () => {
  return(
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/user" component={User} />
    </div>
  )
}