/* eslint-disable quotes */
const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req,res)=>{
    console.log(`method: ${req.method} url: ${req.url}`);
 
    if(req.method === "GET"){
        res.writeHead(200,{"Content-type": "text/html"});
        fs.createReadStream("./public/index.html", "UTF-8").pipe(res);

    } else if(req.method === "POST"){
        let body ="";
        
        req.on("data",(chuck)=>{
            body += chuck;
        });

        req.on("end",()=>{
            res.writeHead(200,{"Content-type": "text/html"});
            res.end(
                `<!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <title>Results</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link rel="stylesheet" type="text/css" media="screen" href="./public/main.css" />
                </head>
                <body>
                    <h1>Your form Results</h1>
                    <p>${body}</p>
                </body>
                </html>`
            );
        });

    }else if(req.method === 'GET' && req.url.match(/.css$/)){
        const cssPath = path.join(__dirname, 'public', req.url);
        res.writeHead(200, {"Content-type":"text/css"});
        fs.createReadStream(cssPath,'UTF-8').pipe(res);
    }else {
        res.writeHead(404, {"Content-type": "text/plain"});
        res.end("404 File not found");
    }
}).listen(3000);


