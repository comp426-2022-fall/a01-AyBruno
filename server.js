// Require http module
var http = require('http');
// Require fs module
var fs = require('fs');
// Require minimist module (make sure you install this one via npm).
var minimist = require('minimist');
// Use minimist to process one argument `--port=` on the command line after `node server.js`.
var argv = minimist(process.argv.slice(2));
console.log(argv);
// Define a const `port` using the argument from the command line. 
// Make this const default to port 3000 if there is no argument given for `--port`.
const port = argv['port'] || 3000;

const server = http.createServer((req, res) => {

    fs.readFile('./public/index.html', 'Utf8', (err, data) =>{
        if(err){
            console.error(err);
            return;
        }
        res.statusCode = 200;   //Since file was found return a status code of 200                                  
        res.setHeader('Content-Type', 'text/html'); //metadata
        res.end(data); //response body containing requested document
    })
})

//tell server object to listen on port 80, The server to route network
//traffic to this application.
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
})
