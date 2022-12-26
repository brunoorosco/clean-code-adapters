import http from 'http'
import express from 'express'
import { adaptRoute } from 'main/adapters/adapterExpress'
import { LoginController } from 'presentation/controllers/login-controller'

const server = http.createServer()

const app = express()
const login = new LoginController()

app.get('/login', adaptRoute(login))

server.listen(3000, () => {
  console.log('server running')
})
