const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Welcome to the server")
        return res.end();
    }

    if (req.url === '/about') {

        //blocking code
        // for (let i = 0; i < 100000; i++) {
        //     console.log(Math.random() * i);
        // }

        return res.end("About page")
    }

    res.end("Error page not found")
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});