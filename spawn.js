const {spawn} = require('chiild_process');

const cp = spawn('node', ['alwaystalking']);

cp.stdout.on('data',(data)=>{
    console.log(`STDOUT: ${data.toString}`);
});