const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, '', 'zeron.sol');
const source = fs.readFileSync(inboxPath, 'utf8');


console.log(solc.compile(source,1));
