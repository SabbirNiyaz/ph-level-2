const crypto = require('crypto');

const password = 'hello12345';

console.log("\n------- MD5 Hashing Examples -------\n");

//! Not recommended for secure applications
const md5Hash = crypto.createHash('md5')
.update(password).digest('hex');
console.log("Input Password: ", password);
console.log("MD5 Hash: ", md5Hash);

console.log("\n------- SHA-256 Hashing Examples -------\n");

const sha256Hash = crypto.createHash('sha256')
.update(password).digest('hex');
console.log("Input Password: ", password);
console.log("SHA-256 Hash: ", sha256Hash);

console.log("\n------- SHA-512 Hashing Examples -------\n");

const sha512Hash = crypto.createHash('sha512')
.update(password).digest('hex');
console.log("Input Password: ", password);
console.log("SHA-512 Hash: ", sha512Hash);
