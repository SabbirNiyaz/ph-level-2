const fs = require('fs');

console.log('Starting to read file asynchronously...');

fs.readFile("../data/diary.txt", "utf-8", (error, data) => {
    if (error) {
        console.error(error.message);
    }
    console.log("File content:");
    console.log(data);
});


console.log('This runs immediately - no blocking.');