import * as express from 'express'
import logger from './logger'

function runServer() {
  const app = express()
  app.listen(5000, () => {
    console.log('start server')
    console.log(process.env.NODE_ENV)
  })
}
runServer()
