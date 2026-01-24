const fs = require('fs');

//todo-> Synchronous example
fs.writeFileSync("../output/delete.log", "Delete", (err) => {
    if (err) {
        console.error("Error creating file before deletion:", err);
        return;
    }
    console.log("File1 created for deletion test.");
});

if (fs.existsSync("../output/delete.log")) {
    console.log("File1 exists. Proceeding to delete...");
    fs.unlink("../output/delete.log", (err) => {
        if (err) {
            console.error("Error deleting file1:", err);
        }
        console.log("File1 deleted successfully.");
        try {
            fs.unlinkSync("../output/delete1.log");
            console.log("File1 deleted successfully using synchronous method.");
        } catch (err) {
            console.error("Error:", err.message);
        }
    });
} else {
    console.log("File1 does not exist. No deletion performed.");
}


//todo-> Asynchronous example
fs.writeFile("../output/delete2.log", "Delete2", (err) => {
    if (err) {
        console.error("Error creating file before deletion:", err);
        return;
    }
    console.log("File2 created for deletion test.");
    if (fs.existsSync("../output/delete2.log")) {
        console.log("File2 exists. Proceeding to delete...");
        fs.unlink("../output/delete2.log", (err) => {
            if (err) {
                console.error("Error deleting file2:", err);
                return;
            }
            console.log("File2 deleted successfully.");
        });
    } else {
        console.log("File2 does not exist. No deletion performed.");
    }
});
