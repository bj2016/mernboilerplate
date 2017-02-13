const app = require('express')()
const port = 3000

app.get('/js/app.bundle.js', (req, res) => {
  console.log(req.originalUrl)
  console.log('got a app')
  res.sendFile('./client/public/js/app.bundle.js', { root: './'} )
})

app.get('/js/commons.bundle.js', (req, res) => {
  console.log(req.originalUrl)
  console.log('got a commons')
  res.sendFile('./client/public/js/commons.bundle.js', { root: './'} )
})

app.get('*', (req, res) => {
  console.log('got a request')
  console.log(req.originalUrl)
  res.sendFile('./client/public/index.html', { root: './'} )
})

app.listen(port, () => {
  console.log(`localhost:${port}`)
})
