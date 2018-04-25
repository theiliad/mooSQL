// Imports
const { lstatSync, readdirSync } = require('fs')
    , fs = require('fs')
    , { join } = require('path')

// Functions
const isDirectory = source => lstatSync(source).isDirectory()
    , getDirectories = source => (
        readdirSync(source).map(name => join(source, name)).filter(isDirectory)
      )
    , getFilesAndDirectories = source => (
        readdirSync(source).map(name => join(source, name))
      )

const locations = (substring,string) => {
  var a=[],i=-1;
  while((i=string.indexOf(substring,i+1)) >= 0) a.push(i);

  return a;
}

String.prototype.regexIndexOf = function(regex, startpos) {
    var indexOf = this.substring(startpos || 0).search(regex);
    return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// Vars
const componentDirectories = getDirectories('./components')
    , directoriesToExclude = ['__tests__', '_util', 'version']
    , filteredDirectories = componentDirectories.filter(directory => directoriesToExclude.indexOf(directory.replace('components/', '')) === -1)

// console.log(filteredDirectories)

filteredDirectories.map((directory, index) => {
    if (index === 0) {
        // Demo Logic
        const subDirectories = getFilesAndDirectories(directory + '/demo')
        // console.log(subDirectories)
        fs.readFile(subDirectories[2], "utf8", (err, data) => {
            if (err) throw err;

            const classComponent = data.indexOf('extends React.Component') > -1
                , title = data.substring(data.indexOf('en-US: ') + 'en-US: '.length).split("\n")[0]
                , description = data.substring(data.indexOf('## en-US') + '## en-US'.length, data.indexOf('````jsx')).trim()
                , componentName = title.replace(/[^a-zA-Z ]/g, "").split(' ').map(item => item == ' ' ? undefined : item.capitalize()).join("") + "Demo"

            let finalString = ''
            if (title) finalString += `<h3>${title}<h3>\n`
            if (description) finalString += `<p>${description}</p>\n`
            finalString += `<${componentName} />`

            let finalComponent = ''
            if (classComponent) {
                data = data.replace(/^ReactDOM.render.*$\n/m, '')
                
                const startPos = data.regexIndexOf(/(.*class\s+)(.*)(\s+extends React.Component.*)/, 0)
                    , subStringData = data.substring(startPos)
                    , componentCode = subStringData.substring(0, data.substring(startPos).indexOf('````'))

                finalComponent = componentCode.replace(componentCode.split(' ')[1], componentName)
            } else {
                data = data.replace(/^ReactDOM.render.*$\n/m, `// Cutoff\nconst ${componentName} = () => (\n`)
                           .replace(`,\n  mountNode`, '')

                finalComponent = data.substring(data.indexOf('// Cutoff') + '// Cutoff\n'.length, locations('````', data)[1])
            }

            console.log(finalComponent)
        });
    }
})