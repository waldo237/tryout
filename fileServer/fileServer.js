const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    console.log(`${req.method} request for ${req.url}`);
    if (req.method === "GET" && req.url === '/') {
        fs.readFile("./public/index.html", "UTF-8", (err, html) => {
            res.writeHead(200, {
                "Content-type": "text/html"
            });
            res.end(html);
        });
    }else if(req.method === "POST"){
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
    }else if(req.url.match(/.css$/)){
        const cssPath = path.join(__dirname, 'public', req.url);
        const fileStream = fs.createReadStream(cssPath,'UTF-8');
        res.writeHead(200, {"Content-type":"text/css"});
        fileStream.pipe(res);
        
    }else if(req.url.match(/.jpg$/)){
        const jpgPath = path.join(__dirname, 'public', req.url);
        const fileStream = fs.createReadStream(jpgPath);
        res.writeHead(200, {"Content-type":"image/jpg"});
        fileStream.pipe(res);
        
    } else {
        res.writeHead(404, {"Content-type": "text/plain"});
        res.end("404 File not found");
    }
}).listen(3000);
console.log("We are running on port 3000");
