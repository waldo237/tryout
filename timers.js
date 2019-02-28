const waitTime = 3000;
let currentTime = 0;
const waitInterval = 500;
let percentWaited =0;


const writeWaitingPercent = (p)=>{

    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting...${p} `);
}
    //trying intervals
const interval = setInterval(()=>{
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime/waitTime)*100);
    writeWaitingPercent(percentWaited);
    // console.log(`waiting${currentTime/1000} seconds..`)
}, waitInterval);

//trying timeout 
setTimeout(()=>{
    clearInterval(interval);
    writeWaitingPercent(100);
    console.log("finished");
},waitTime);
process.stdout.write('\n');
writeWaitingPercent(percentWaited);