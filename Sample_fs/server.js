const http = require('http');
const getHTML = require('./readHTML')
const port = 3000 ; 
const host = '127.0.0.1';


const server =  http.createServer((req , res) => {
    res.statusCode = 200 ;
    res.setHeader('Conten-Type' , 'text/plain');
    const htmlFile = getHTML('./MainIndex.html');
    res.end(htmlFile)
})


server.listen(port , host , () => {
    console.log("i am listening")
})