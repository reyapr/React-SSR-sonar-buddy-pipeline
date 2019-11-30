import express from 'express'
import React from 'react'
import App from './client/components/App' 
import { renderToString } from 'react-dom/server'
import html from './server/html'

const app = express()


// app.use(express.static('public'))     
app.get('/', (req,  res) => {
  const content = renderToString(<App/>)
  
  const client = html(content)

  res.send(client)
})

app.listen(3001, () => {
  console.log('running on port 3000')
})