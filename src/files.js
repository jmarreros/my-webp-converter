const fs = require('fs')
const path = require('path')
const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif']
const images = []

fs.readdirSync('./').forEach(file => {
    if ( imageExtensions.includes( path.extname(file) ) ){
        images.push(file)
    }
})

module.exports = images