const fs = require('fs');
const getHtml =  (address) => {
    return fs.readFileSync(address)
}

module.exports = getHtml