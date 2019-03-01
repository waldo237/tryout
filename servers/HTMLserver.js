const http = require('http');
const fs = require('fs');

let delpatio = ""; 
fs.readFile('./index.html','UTF-8',(err, data)=>{
    if(err){
        console.log(err);

    }
    delpatio = data;
});

const server =  http.createServer(async (req, res)=>{
    
    res.writeHead(200, {"Content-type": "text/html"});
    res.end( await delpatio);
});

server.listen(3000);
console.log("we're on port 3000");
