const fs = require('fs');
fs.rmdir('./codito', (err)=>{
    if(err){
        console.log(err);
        
    }
});

console.log('directories removed');
