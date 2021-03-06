import express from 'express'
import bodyParser from 'body-parser'
import jwt from 'express-jwt'
import config from '../config.json'
import api from './api'
import connectToDB from './repo/mongo-repo'
import serviceFactory from './services'

const port = process.env.port || 8000

async function main() {
  const app = express()
  app.set('supersecret', config.secret)
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(jwt({ secret: app.get('supersecret') }).unless({ path: ['/register', '/login'] }))

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Expose-Headers', 'X-Total-Count')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    next()
  })

  const db = await connectToDB()
  const services = serviceFactory(app, db)
  api(app, db, services)
  app.listen(port, () => {
    console.log(`We are live on ${port}`)
  })
}

main()
