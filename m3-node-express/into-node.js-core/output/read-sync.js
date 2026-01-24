const fs = require('fs');

console.log('Starting to read file synchronously...');

try {
    // Synchronous read
    const data = fs.readFileSync("../data/diary.txt", "utf-8");
    console.log("File content:", data);
} catch (error) {
    console.error(error.message);
}

console.log('Finished reading file.');