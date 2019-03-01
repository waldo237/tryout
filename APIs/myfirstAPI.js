const http = require("http");
const data = require('./data/inventory');

http.createServer((req, res) => {
    console.log(`${req.method} request for ${req.url}`);

    if(req.url === '/'){
        res.writeHead(200, {"Content-type": "text/json"});
        res.end(JSON.stringify(data));

   //  }else if(req.url === "/company/:id"){
   //      listInStock(res,"Google Inc.");
       
   //  }

}).listen(3000);
console.log("port 3000");


// const listInStock = (res, company) => {
//     const inStock = data.filter((item) => {
//         return item.developer.toLowerCase().includes(company);
//     });
//     res.end(JSON.stringify(inStock));

// };