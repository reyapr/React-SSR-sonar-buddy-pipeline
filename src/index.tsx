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
    const context: any = {}
    const content = renderer(req, store, context) 
    
    if(context.notFound){
      res.status(404)
    }
    
    res.send(content)
  })
})

app.listen(3000, () => {
  console.log('running on port 3000')
})