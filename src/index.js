const webp = require('webp-converter');

webp.grant_permission();


const toWebp = webp.cwebp("img.png","img.webp","-q 80",logging="-v")

module.exports = {toWebp}