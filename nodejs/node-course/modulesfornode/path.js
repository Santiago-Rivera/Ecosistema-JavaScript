const path = require('path');

// Get the directory name of the current module
const dirName = path.dirname(__filename);
console.log(`Directory Name: ${dirName}`);

// Get the base name of the current module
const baseName = path.basename(__filename);
console.log(`Base Name: ${baseName}`);

// Get the file extension of the current module
const fileExt = path.extname(__filename);
console.log(`File Extension: ${fileExt}`);

// Join multiple path segments
const joinedPath = path.join(dirName, 'subfolder', 'file.txt');
console.log(`Joined Path: ${joinedPath}`);

// Resolve an absolute path
const absolutePath = path.resolve('subfolder', 'file.txt');
console.log(`Absolute Path: ${absolutePath}`);

// Parse a path into its components
const parsedPath = path.parse(__filename);
console.log('Parsed Path:', parsedPath);

// Format a path from its components
const formattedPath = path.format(parsedPath);
console.log(`Formatted Path: ${formattedPath}`);

// Normalize a path
const normalizedPath = path.normalize('/folder//subfolder/../file.txt');
console.log(`Normalized Path: ${normalizedPath}`);

// Get the relative path from one location to another
const relativePath = path.relative(dirName, absolutePath);
console.log(`Relative Path: ${relativePath}`);

// Check if a path is absolute
const isAbsolute = path.isAbsolute(absolutePath);
console.log(`Is Absolute Path: ${isAbsolute}`);

console.table({
  dirName,
  baseName,
  fileExt,
  joinedPath,
  absolutePath,
  normalizedPath,
  relativePath,
  isAbsolute
});