import express from 'express'
import React from 'react'
import App from './client/components/App' 
import { renderToString } from 'react-dom/server'

const app = express()
     
app.get('/', (req,  res) => {
  const content = renderToString(<App/>)

  res.send(content)
})

app.listen(3000, () => {
  console.log('running on port 3000')
})