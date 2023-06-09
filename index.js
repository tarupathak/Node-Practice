// const colors= require('colors');
// console.log('package.json'.red);
// console.warn('Try taru');
// node js is async and single threaded

// const http = require('http');
// const data= require('./data');
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5000);

// console.log(process.argv)

// const fs = require("fs");
// const input = process.argv;
// fs.writeFileSync(input[2], input[3]);

// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("Invalid input");
// }

// console.log(process.argv[2])

// const fs = require('fs');
// const path = require('path');
// const dirPath =path.join(__dirname,'files');
// console.warn(dirPath)

// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt", "a simple text file"); //or fs.writeFileSync("hello${i}.txt", "a simple text file")
// }

// fs.readdir(dirPath,(err,files)=>{
//     // console.warn(files)
//     files.forEach((item)=>{
//           console.log("file name is",item)
//     })
// })

//CRUD

// const fs=require('fs');
// const path= require('path');
// const dirPath= path.join(__dirname,'crud');
// const filePath= `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath,'this is a text file');
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })

// fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//     if(!err) console.log('file is updated')
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err) =>{
//     if(!err) console.log('file is updated')
// // })
// fs.unlinkSync(`${dirPath}/fruit.txt`)

// console.log("start exe...");

// let a =20;
// let b=0;

// console.log("logic exe...");

// let waitingData = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve(30)
// ;    },2000)
// })

// waitingData.then((data)=>{
//     b=data;
//     console.log(a+b);
// })
// console.log(a+b);

// console.log("starting up")

// setTimeout(()=>{
//     console.log("2 secong log")
// },2000)

// setTimeout(()=>{
//     console.log("0 secong log")
// },0)

// console.log("Finishing up")

//<-----------EXPRESS JS ------------>

// const express = require("express");
// const app = express();

// app.get("", (req, res) => {
//   //   console.log("data sent by browser = ", req.query.name);
//   res.send(`<h1>Welcome, to Home Page.</h1><a href="/about">About Page</a>`);
// });

// app.get("/about", (req, res) => {
//   res.send(
//     `<input type="text" placeholder="User name" value=${req.query.name}/>Hello, this is About Page`
//   );
// });

// app.get("/help", (req, res) => {
//   res.send({
//     name: "taru",
//     email: "taru@text.com",
//   });
// });

// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, 'public');

// app.set('view engine','ejs');
// // app.use(express.static(publicPath))
// app.get('/',(req,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)
// })

// app.get('/profile',(_,resp)=>{
//     const user ={
//         name: 'taru pathak',
//         email: 'taru@text.com',
//         city: 'noida',
//         skills: ['javascript','Java','Python','C++']
//     }
//     resp.render('profile',{user});
// })

// app.get('/about',(req,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// })

// app.get('/login',(_,resp)=>{
//     resp.render('login');
// })

// app.get('*',(req,resp)=>{
//     resp.sendFile(`${publicPath}/nopage.html`)
// })
// app.listen(5000);

const express = require("express");
const app = express();
const route = express.Router();
const reqFilter = require("./middleware");

// app.use(reqFilter);

route.use(reqfilter);

app.get("/", (req, resp) => {
  resp.send("Welcome to Home Page");
});

route.get("/users", (req, resp) => {
  resp.send("Welcome to Users Page");
});

app.get("/about", (req, resp) => {
  resp.send("Welcome to About Page");
});

route.get("/contact", (req, resp) => {
  resp.send("Welcome to About Page");
});

app.use('/',route);

app.listen(5000);
