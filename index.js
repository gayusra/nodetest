const http = require('http');
const fs = require('fs');
const path = require('path');

/*const server = http.createServer((req,res)=>{
    res.write('Hi guyss');
    res.end()
})

server.listen(3500,()=>{
    console.log('server is running on the port')
})*/


//-----------------------------------

/*const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('index.html',(error,data)=>{
        if(error){
            res.writeHead(404)
            res.write('page not found')
        }
        else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(3500,()=>{
    console.log('server is running on the port')
})*/

const server = http.createServer((req,res)=>{
    let filePath='';

      // Determine the file to serve based on the request URL
  if (req.url === '/') {
    filePath = path.join(__dirname, 'home.html');
  } else if (req.url === '/about') {
    filePath = path.join(__dirname, 'about.html');
  } else if (req.url === '/contact') {
    filePath = path.join(__dirname, 'contact.html');
  } else {
    filePath = path.join(__dirname, '404.html');
  }

    // Read and serve the file content
    fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end('Error occurred while reading the file.');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      });
})

server.listen(3500,()=>{
    console.log('server is running on the port')
})


