import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../client/Routes'

export default (req: any) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  )
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>React SSR</title>
    </head>
    <body>
      <div id="app">${content}</div>
      <script src="bundle.js"></script>
    </html>
  `
}