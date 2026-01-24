const fs = require('fs');

console.log('Appending to file synchronously...');

const appendContentSync = "\nAppended this line synchronously using fs.writeFileSync().";

// fs.writeFileSync("../output/app.log", appendContentSync )
// console.log("Synchronous append completed.");

const logEntry1 = `\n${new Date().toISOString()} user logged in`;
fs.appendFileSync("../output/app.log", logEntry1);

const logEntry2 = `\n${new Date().toISOString()} data fetched`;
fs.appendFileSync("../output/app.log", logEntry2);
console.log("Synchronous log entry appended.");