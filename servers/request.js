/* eslint-disable no-console */
const https = require('https');
const fs = require('fs');

const options = {
    hostname: 'en.wikipedia.org',
    port: 443,
    path: '/wiki/George_Washington',
    method: 'GET'
};
const req = https.request(options, (res) => {
    let responseBody = "";
    console.log('Response started');
    console.log(`Server Staturs${res.statusCode}`);
    console.log('Response headers: %j', res.headers);
    res.setEncoding("UTF-8");

    res.once('data', (chunk) => {
        console.log(chunk);
    });

    res.on('data', (chunk) => {
        console.log(`--chunk-- ${chunk.length}`);
        responseBody += chunk;
    });

    res.on('end', () => {
        console.log(responseBody);
        fs.writeFile('george-washington.html', responseBody, (err) => {
            if (err) {
                throw err;
            }
            console.log('File downloaded');
        });
    });

});
req.on('error', (err) => {
    console.log(`problem with request: ${err.message}`);
});
req.end();