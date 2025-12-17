const fs = require('fs');

// Read the contents of the current directory
const first = fs.readFileSync ("./data/first.txt", "utf8", (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File Contents:', data);
});

console.log(first);

const second = fs.readFileSync("./data/second.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File Contents:", data);
});

console.log(second);

// Write to a new file
fs.writeFileSync(
  "./data/result.txt",
  `Here is the result: ${first}, ${second}`,
  (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("File written successfully");
  }
);

// Append to the existing file
fs.appendFileSync(
  "./data/result.txt",
  "\nAppended some new text.",
  (err) => {
    if (err) {
      console.error("Error appending to file:", err);
      return;
    }
    console.log("File appended successfully");
  }
);

// Rename the file
fs.renameSync("./data/result.txt", "./data/finalResult.txt", (err) => {
  if (err) {
    console.error("Error renaming file:", err);
    return;
  }
  console.log("File renamed successfully");
});

// Delete the file
fs.unlinkSync("./data/finalResult.txt", (err) => {
  if (err) {
    console.error("Error deleting file:", err);
    return;
  }
  console.log("File deleted successfully");
});

// Read the contents of the directory
const files = fs.readdirSync("./data", (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }
  console.log("Directory Contents:", files);
});

console.log("Directory Contents:", files);

const JavaScriptFiles = fs.readdirSync(
  "/home/santiago/Workspace/fullstack-journey-2026/JavaScript",
  (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }
    console.log("Directory Contents:", files);
  }
);

console.log("Directory Contents:", JavaScriptFiles);

const BlogFiles = fs.readdirSync(
  "/home/santiago/Workspace/blog",
  (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }
    console.log("Directory Contents:", files);
  }
);

console.log("Directory Contents:", BlogFiles);


const PortafolioFiles = fs.readdirSync(
  "/home/santiago/Workspace/portafolio",
  (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }
    console.log("Directory Contents:", files);
  }
);

console.log("Directory Contents:", PortafolioFiles);