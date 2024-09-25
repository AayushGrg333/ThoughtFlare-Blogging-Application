const { createHmac,randomBytes } = require('node:crypto');

const salt = randomBytes(16).toString();
console.log(salt)