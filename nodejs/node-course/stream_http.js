const http = require('http');
const { createReadStream } = require('fs');

const server = http.createServer((req, res) => {
    const fileStream = createReadStream("./data./newbigfile.txt", {
        encoding: 'utf8'
    })

    fileStream.on("data", (chunk) => {
        fileStream.pipe(res)
    })

    fileStream.on("error", (err) => {
        console.log(err);
    })

})

server.listen(3000);
console.log("Server listening on port 3000");