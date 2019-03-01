const {spawn} = require('child_process');

const cp = spawn('node', ['alwaystalking']);

cp.stdout.on('data',(data)=>{
    console.log(`STDOUT: ${data.toString()}`);
});

setTimeout(()=>{
    cp.stdin.write('stop');
}, 4000);