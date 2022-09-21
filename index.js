// Allow the new endpoint to the server that allow the user to get more specific information.
// In Our case, it will be a page of data in JSON format. 

// We can make the translation data available through the url. 

const http = require('http');
const hostName = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
    const { url } = req;

    console.log(url);

    if(url === "/translations"){
        
        const translations = {1: "One", 2: "Two", 3: "Three"};
        
        res.setHeader('Content-Type', 'application/json');

        res.write(JSON.stringify(translations));
        res.end();
    }

    res.end("welcome to Node server")
})

server.listen(port, hostName, () => console.log("server is running"));
