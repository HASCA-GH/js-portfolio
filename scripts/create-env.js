const fs = require('fs');

// Writes this file into the server
fs.writeFileSync('./.env', `API=${process.env.API}\n`)