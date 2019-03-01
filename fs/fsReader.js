const fs = require('fs');
const path = require('path');

fs.readdir('../lib',(err, files)=>{
    console.log(files);
    files.forEach((file)=>{
        const fullPath = path.join(__dirname,'../lib',file);
        const stats = fs.statSync(fullPath);
        if(stats.isFile() && file !== '.DS_Store' ){
            fs.readFile( fullPath,'UTF-8',(err, data)=>{
                if(err){
                    console.log(err);
                }
                console.log(data);
            });

        }
    });
});
