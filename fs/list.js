const fs = require('fs');
const path = require('path');
const files = fs.readdir('../lib', (err, files)=>{
    if(err){
        throw err;
    }
    console.log(files);
});

// console.log('Reading files');
