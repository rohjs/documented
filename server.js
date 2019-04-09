const express = require('express')
const next = require('next')
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000

const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()
const routes = require('./routes')()

app.prepare().then(() => {
  const server = express()

  server.get('/work/:id', (req, res, next) => {
    const route = '/work'
    const queryParams = { id: req.params.id }
    app.render(req, res, route, queryParams)
  })

  server.get('*', (req, res, next) => {
    return handle(req, res)
  })

  server.listen(PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
