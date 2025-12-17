const { readFile } = require("fs/promises");

async function read() {
  try {
    const result = await readFile("./data/first.txt", "utf8");
    console.log(result);
    const result2 = await readFile("./data/second.txt", "utf8");
    console.log(result2);
  } catch (err) {
    console.log(err);
  }
}

read();