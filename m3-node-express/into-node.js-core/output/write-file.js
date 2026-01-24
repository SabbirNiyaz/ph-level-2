const fs = require('fs');

//todo Synchronous write
const contentSync = "Today I learned how to write files in Node.js!\n It's pretty straightforward using the fs module.";

try{
    fs.writeFileSync("../output/write-file-sync.txt", contentSync, "utf-8");
    console.log("File written successfully.");

}catch (error) {
    console.error(error.message);
}

//todo Asynchronous write
const contextAsync = "This is an asynchronous file write operation in Node.js.";

fs.writeFile("../output/write-file-async.txt", contextAsync, "utf-8", (error) => {
    if (error) {
        console.error(error.message);
    }
    console.log("Asynchronous file written successfully.");
});   