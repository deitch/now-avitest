import express from 'express'
import { Server as http } from 'http'

export default function entry() {
  const app = express()
  const srv = http(app)

  app.get('/', (req, res) => {
    res.type('html')
    res.send("I AM HERE")
  })
  app.use(express.static(__dirname+'/assets'))
  return app
}
