var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.get("/css/main.css", function(req, res) {
  res.sendFile(__dirname + '/css/main.css')
})
app.get("/favicon.ico", function(req, res) {
  res.sendFile(__dirname + '/assets/favicon.ico')
})
app.get("/img/logo.png", function(req, res) {
  res.sendFile(__dirname + '/assets/logo.png')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("Listening on port %s.", port)
  }
})
