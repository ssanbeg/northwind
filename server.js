const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('northwind.json')

const options = {
  static: __dirname + '/public'
}

const middlewares = jsonServer.defaults(options)
const port = process.env.PORT || 3000

server.use(middlewares)
server.use('/api', router)

server.listen(port, () => {
  console.log('JSON Server is running on ' + port)
})
