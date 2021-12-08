#!/usr/bin/env node
let {toWebp} = require('../src/index.js')
toWebp.then( res => {
    console.log(res)
})