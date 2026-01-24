const os = require('os');

console.log("-".repeat(50) + "\n");
console.log("Operating System Information:\n");

console.log("Platform:", os.platform());
console.log("OS Type:", os.type());
console.log("Release:", os.release());
console.log("Hostname:", os.hostname());
console.log("Home Directory:", os.homedir());
console.log("Uptime (seconds):", os.uptime());

console.log("-".repeat(50) + "\n");
console.log("CPU Information:\n");
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log("Total Memory (GB):", (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2));
console.log("Free Memory (GB):", (os.freemem() / (1024 * 1024 * 1024)).toFixed(2));
console.log("CPU Details:", os.cpus());
console.log("CPU Speed (MHz):", os.cpus().map(cpu => cpu.speed).join(", "));

console.log("\n" + "-".repeat(50) + "\n");
console.log("Network Interfaces:\n");
console.log(os.networkInterfaces());

console.log("\n" + "-".repeat(50) + "\n");
console.log("End of OS Information");

const uptime = os.uptime();
const hours = Math.floor(uptime / 3600);
const minutes = Math.floor((uptime % 3600) / 60);
const seconds = uptime % 60;

console.log(`System Uptime: ${hours} hours, ${minutes} minutes, ${seconds} seconds`);