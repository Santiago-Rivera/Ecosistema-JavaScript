const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {

    console.log(req.url);

    if (req.url === '/') {
        res.write('Welcome to the server!\n');
        return res.end();
    }

    if (req.url === '/about') {
        res.write('This is the About Page!\n');
        return res.end();
    }

    res.write("Not found\n");
    res.end();
});

// Define the port and hostname
const PORT = 3000;
const HOSTNAME = 'localhost';

// Start the server and listen on the specified port and hostname
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});