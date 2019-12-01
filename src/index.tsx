import express from 'express'
import renderer from './server/renderer'
const app = express()


app.use(express.static('public'))     
app.get('*', (req,  res) => {
  res.send(renderer(req))
})

app.listen(3000, () => {
  console.log('running on port 3000')
})