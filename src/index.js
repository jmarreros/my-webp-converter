const path = require('path')
const images  = require('./files.js')
const webp = require('webp-converter');
let converter = [];

webp.grant_permission();

images.forEach( image => {

    const extension = path.extname(image)
    const newName = path.basename(image ,extension) + '.webp';

    const item = webp.cwebp(image, newName, '-q 80', logging='-v')
    converter.push(item)
});

const conversion = Promise.all(converter)

module.exports = conversion

