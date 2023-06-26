const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((req, res) => {
  let path
  switch (url.parse(req.url, true).pathname) {
    case '/':
      path = 'index.html'
      break
    case '/about':
      path = 'about.html'
      break
    case '/contact-me':
      path = 'contact-me.html'
      break
    default:
      path = '404.html'
      break
  }

  fs.readFile(path, (_, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    return res.end()
  })

}).listen(8080)
