const webp = require('webp-converter');

webp.grant_permission();


const result = webp.cwebp("img.png","img.webp","-q 80",logging="-v");
result.then((response) => {
  console.log(response);
});