import express from 'express'
import renderer from './server/renderer'
import generateStore from './client/common/store'

const store = generateStore()
const app = express()


app.use(express.static('public'))     
app.get('*', (req,  res) => {

  res.send(renderer(req, store))
})

app.listen(3000, () => {
  console.log('running on port 3000')
})