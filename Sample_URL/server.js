const http = require('http');
const url = require('url')
const getHTML = require('./readHTML')
const port = 3000 ; 
const host = '127.0.0.1';


const server =  http.createServer((req , res) => {
    const urlParsed = url.parse(req.url)
    res.statusCode = 200 ;
    res.setHeader('Conten-Type' , 'text/plain');
    let html ; 
    if(urlParsed.pathname === "/about"){
        html = getHTML('./AboutPage.html')
    }
    else{
        html = getHTML('./MainIndex.html');
         
    }
    res.end(html)

})


server.listen(port , host , () => {
    console.log("i am listening")
})