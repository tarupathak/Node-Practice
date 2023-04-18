// const colors= require('colors');
// console.log('package.json'.red);
// console.warn('Try taru');
// node js is async and single threaded

const http = require('http');
const data= require('./data');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);
