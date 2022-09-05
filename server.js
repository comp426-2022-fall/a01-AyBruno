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


fs.readFile('./public/index.html', 'Utf8', (err, data) =>{
    if(err){
        console.error(err);
        return;
    }
    //console.log(data);
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    })

    server.listen(port, () => {
        console.log(`Server running at port ${port}`);
    })
})

