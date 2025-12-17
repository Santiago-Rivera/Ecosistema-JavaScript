// const { writeFile } = require('fs/promises');

// const createBigFile = async () => {
//     await writeFile("./data/newbigfile.txt", "Hello World!".repeat(10000));
// }

// createBigFile();

const {createReadStream} = require('fs');

const stream = createReadStream('./data/bigfile.txt', {
    encoding: 'utf-8',
    highWaterMark: 1024 // 1kb
});

stream.on('data', (chunk) => {
    console.log(chunk);
});

stream.on('end', () => {
    console.log('No more data');
});

stream.on('error', (err) => {
    console.error('Error', err);
});