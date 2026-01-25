//todo Steps:
//? 1. npm init -y
//? 2. npm install dotenv

require('dotenv').config();

const config = {
    app: {
        name: process.env.APP_NAME || 'DefaultApp',
        version: process.env.APP_VERSION || '1.0.1',
        port: process.env.PORT || 3000,
        environment: process.env.NODE_ENV || 'Web Development'
    }
};          
 
console.log("Application Configuration: ", config.app);

module.exports = config;