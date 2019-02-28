const exec = require('child_process').exec;
const path = require('path');

exec(`git add ${path.basename(__filename)}`,(error, stdout)=>{
    if(error){
        throw error;
    }
    console.log('listing finished.');
    console.log(stdout);
});

exec(`git log`,(error, stdout)=>{
    if(error){
        throw error;
    }
    console.log(stdout);
});
