// generateSecret.js
const CryptoJS = require('crypto-js');

const generateSecret = () => {
    return CryptoJS.lib.WordArray.random(64).toString();
};

const jwtSecret = generateSecret();
console.log('Your JWT secret:', jwtSecret);
