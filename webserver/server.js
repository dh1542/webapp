// configuring address
const http = require('http')
const host = 'localhost'
const port = 8000

// request listener, simply responds with hello, world
const requestListener = function (req, res) {
    res.writeHead(200)
    res.end("Hello, world!")
}

// create server instance
const server = http.createServer(requestListener)

// bind to network address
server.listen(port, host, () => {
    console.log("Server is running on http://${host}:${port}")
})