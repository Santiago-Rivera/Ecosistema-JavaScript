const os = require('os');

// Get the operating system platform
const platform = os.platform();
console.log(`Operating System Platform: ${platform}`);

// Get the CPU architecture
const architecture = os.arch();
console.log(`CPU Architecture: ${architecture}`);

// Get the total memory in bytes
const totalMemory = os.totalmem();
console.log(`Total Memory: ${totalMemory} bytes`);

// Get the free memory in bytes
const freeMemory = os.freemem();
console.log(`Free Memory: ${freeMemory} bytes`);

// Get the system uptime in seconds
const uptime = os.uptime();
console.log(`System Uptime: ${uptime} seconds`);

// Get the hostname of the operating system
const hostname = os.hostname();
console.log(`Hostname: ${hostname}`);

// Get the network interfaces
const networkInterfaces = os.networkInterfaces();
console.log('Network Interfaces:', networkInterfaces);

// Get the CPU information
const cpuInfo = os.cpus();
console.log('CPU Information:', cpuInfo);

// Get the home directory of the current user
const homeDir = os.homedir();
console.log(`Home Directory: ${homeDir}`);

// Get the temporary directory
const tempDir = os.tmpdir();
console.log(`Temporary Directory: ${tempDir}`);

console.table({
  platform,
  architecture,
  totalMemory,
  freeMemory,
  uptime,
  hostname,
  homeDir,
  tempDir
});