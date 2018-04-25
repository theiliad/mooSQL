// Imports
const { lstatSync, readdirSync } = require('fs')
    , fs = require('fs')
    , { join } = require('path')
    , rimraf = require('rimraf')



// Functions
const isDirectory = source => lstatSync(source).isDirectory()
    , getDirectories = source => (
        readdirSync(source).map(name => join(source, name)).filter(isDirectory)
      )
    , getFilesAndDirectories = source => (
        readdirSync(source).map(name => join(source, name))
      )

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const demoDirectories = getDirectories('./artifacts').map(dir => dir.replace('artifacts/', ''))
demoDirectories.map(dir => {
    const trimmedDirName = dir.split('-').map(item => item == '-' ? undefined : item.capitalize()).join('')
    console.log(`import ${trimmedDirName}Demo from '../_pages/components/${dir}/index.js'`)
})