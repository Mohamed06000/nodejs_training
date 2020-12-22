const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send('Salut tu es à la racine')
})

app.get('/demo', (request, response) => {
    response.send('Salut tu es à la demo')
})

app.listen(3000)

/*let http = require('http')
const EventEmitter = require('events')

let _ = require('lodash')

let app = require('./App').start(3001)
app.on('root', (response) => {
    response.write('Je suis à laa racine')
})*/

/*

let fs = require('fs')
let url = require('url')

let server = http.createServer()
server.on('request', (request, response) => {
    response.writeHead(200)
    let query = url.parse(request.url, true).query

    let name = query.name === undefined ? 'anonyme' : query.name

    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) {
            response.writeHead(404)
            response.end('Fichier n\'existe pas !')
        } else {
            response.writeHead(200)
            data = data.replace('{{ name }}', name)
            response.end(data)
        }

    })

})

server.listen(3001)
*/
