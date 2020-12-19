let http = require('http')
let fs = require('fs')

let server = http.createServer()
server.on('request', (request, response) => {
    fs.readFile('indeex.html', (err, data) => {
        if (err) {
            response.writeHead(404)
            response.end('Fichier n\'existe pas !')
        }
        response.writeHead(200)
        response.end(data)

    })

})

server.listen(3001)
