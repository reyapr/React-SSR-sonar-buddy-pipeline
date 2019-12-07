import express from 'express'
import renderer from './server/renderer'
import generateStore from './client/common/store'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'

const app = express()

app.use(express.static('public'))     
app.get('*', (req,  res) => {
  const store = generateStore()
  
  const promises = matchRoutes(Routes, req.path).map(({ route }: any) => {
    return route.loadData && route.loadData(store)
  })
  
  Promise.all(promises).then(() => {
    res.send(renderer(req, store))
  })
})

app.listen(3000, () => {
  console.log('running on port 3000')
})