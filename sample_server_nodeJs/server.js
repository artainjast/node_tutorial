const http = require('http')
const hostName = '127.0.0.1';
const port = 3000 ; 

const server = http.createServer((req , res) => {
    res.statusCode = 200 ; 
    res.setHeader('Content-type' , 'text/plain');
    res.end('hello world');
})

server.listen(port , hostName , () => {
    console.log(`server Running on ${hostName} in port of ${port}`)
})