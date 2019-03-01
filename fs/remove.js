const fs = require('fs');
// fs.renameSync('../lib/Person.js', '../lib/Human.js');
// console.log("Person.js renamed");

// fs.rename('../lib/Rubin and Thompson.txt', '../lib/rubin.txt',(err)=>{
//     if(err){
//         console.log(err);

//     }
// });

// fs.unlinkSync('../lib/human.js');
fs.unlink('../lib/9783319593326-c2.txt',(err)=>{
    if(err){
        console.log(err);

    }else{
        console.log('files removed!');

    }
});
