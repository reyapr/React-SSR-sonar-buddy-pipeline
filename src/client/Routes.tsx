import React from 'react'
import App from './components/App'
import User, { loadData } from './components/User'
import NotFoundPage from './components/NotFoundPage'

export default [
  {
    path: '/',
    component: App,
    exact: true
  },
  {
    path: '/users',
    component: User,
    exact: true,
    loadData
  },
  {
    component: NotFoundPage
  }
] 