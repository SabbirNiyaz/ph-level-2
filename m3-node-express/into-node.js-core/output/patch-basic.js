const path = require('path');

console.log("Current file info: \n");
console.log("Path-name:", __filename);
console.log("Directory:", __dirname);
console.log("Base-name:", path.basename(__filename));
console.log("Extension-name:", path.extname(__filename));
console.log("Filename-without-extension:", path.basename(__filename, path.extname(__filename)));

console.log("\n" + "-".repeat(50) + "\n");

const parsed = path.parse(__filename);
console.log("Parsed path object:", parsed);