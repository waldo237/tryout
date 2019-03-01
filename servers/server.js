const http = require('http');

const server = http.createServer((req, res)=>{
    
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end("Hello World");
});

server.listen(3000);
console.log("we're on port 3000");
