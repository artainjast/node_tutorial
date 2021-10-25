const http = require('http');
const newrespns = require('./response')
const Port = 3000 ; 
const hostName = "127.0.0.1" ;

const server = http.createServer((req , res) => {

    res.statusCode = 200 ; 
    res.setHeader('Content-Type' , 'text/plain');
    res.end(`New Generated Resonse is ${newrespns()}`)

})


server.listen(Port , hostName )