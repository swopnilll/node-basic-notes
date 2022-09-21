// in the package.json file, main field points to index.js file.
// This essentially means that root of our project will be javascript file called index.js
 
// code to create a web server.
// HTTP module is required
 
// Modules: Modules in node represent package of code that allow to add certain features to
//          javascript node application.
 
// HTTP: HTTP is the core module to node. We dont have to install it, we can use it right away.
//       HTTP is included in node js source code.
 
/**
* Grab the HTTP module and store it in a constant object called "http".
* We can point to the module by mentioning the name of the module in string.
* require: Global require function provided by node js.
* http: Standard for transferring data and communicating across the web.
*       It essentially alows us to transfer data through hyper link
*       accross webpages full of text.
*
* Here, we are making a server in this HTTP format
*/
const http = require('http');
 
// Defining Hostname and Port.
// In networking, a hostname is a label assigned to the server to indentify it to other application on the web.
// For Example: Facebook and Youtube are officially established hostname in the domain system of the internet.
// For our purposes, In Development, we can attach to the "localhost" hostname, which is the hostname which hooks up
                                //   to the local computer.
const hostname = "localhost";
// Port Number: A port number is a way to identify our particular server program on the local network as running process.
//              Typical Development port number is 3000.
const port = 3000;
// Creating a server
// TO create a server, we use a function from http,
//                     called createServer given to us through the http module stored in the http object.
// createServer takes one argument, which is callback function that allows us to specify different options for the server.
// Callback function has two arguments itself, req and res (Incoming Request and Response of our Server)
// res.end() -> For the server, immediately respond with  a message
const server = http.createServer((req, res) => {
   res.end("Welcome to Node");
});
// We have to start up the server to allow it to begin accepting connections on a specified port and hostname.
// To startup the server, we want to start listening to the request.
// As sucn, we have the server.listen() function.
server.listen(port, hostname, () => console.log(`Server is listening at port ${port}`));

