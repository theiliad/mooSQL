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

const locations = (substring,string) => {
  var a=[],i=-1;
  while((i=string.indexOf(substring,i+1)) >= 0) a.push(i);

  return a;
}

const removeArrayDuplicates = (array) => {
    const result = []
    array.map(item => {
        if (result.indexOf(item) === -1) result.push(item)
    })

    return result
}

String.prototype.regexIndexOf = function(regex, startpos) {
    var indexOf = this.substring(startpos || 0).search(regex);
    return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// make promise version of fs.readFile()
fs.readFileAsync = function(filename, callback) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filename, "utf8", function(err, data){
            callback(err, data, resolve, reject)
        });
    });
};

fs.mkdirAsync = function(dirName) {
    return new Promise(function(resolve, reject) {
        fs.mkdir(dirName, function(err){
            if (err) reject()

            resolve(true)
        });
    });
};



// Vars
const componentDirectories = getDirectories('./components')
    , directoriesToExclude = ['__tests__', '_util', 'version', 'col', 'icon', 'row', 'style']
    , filteredDirectories = componentDirectories.filter(directory => directoriesToExclude.indexOf(directory.replace('components/', '')) === -1)

// console.log(filteredDirectories)

const initialPromise = new Promise((resolve, reject) => {
    if (!fs.existsSync('./artifacts')){
        fs.mkdirAsync('./artifacts').then(() => {
            resolve(true)
        })
    } else {
        rimraf('./artifacts', function () {
            console.log('Existing Artifacts Deleted!');

            fs.mkdirAsync('./artifacts').then(() => {
                resolve(true)
            })
        });
    }
})

initialPromise.then(() => {
    // Create directories
    const dirPromises = []
    filteredDirectories.map((directory, index) => {
        const antdComponentName = directory.replace('components/', '')

        if (!fs.existsSync(`./artifacts/${antdComponentName}`)) {
            const dirPromise = fs.mkdirAsync(`./artifacts/${antdComponentName}`);
            dirPromises.push(dirPromise)
        }
    })

    Promise.all(dirPromises).then(() => {
        filteredDirectories.map((directory, index) => {
            if (true) {
                // Demo Logic
                const antdComponentName = directory.replace('components/', '')
                    , subDirectories = getFilesAndDirectories(directory + '/demo')
                    , demoComponentPromises = []
                    , demoComponents = []
                    , demoComponentNames = []

                let indexFileString = `import React from 'react'\n`
                , importFileNames = []
                
                subDirectories.map(subDirectory => {
                    const newPromise = fs.readFileAsync(subDirectory, (err, data, resolve, reject) => {
                        if (err) {
                            reject()
                            throw err;
                        }

                        const classComponent = data.indexOf('extends React.Component') > -1
                            , title = data.substring(data.indexOf('en-US: ') + 'en-US: '.length).split("\n")[0]
                            , description = data.substring(data.indexOf('## en-US') + '## en-US'.length, data.indexOf('````jsx')).trim()
                            , componentName = title.replace(/[^a-zA-Z ]/g, "").split(' ').map(item => item == ' ' ? undefined : item.capitalize()).join("") + "Demo"

                        let finalString = ''
                        if (title) finalString += `<h3>${title}<h3>\n`
                        if (description) finalString += `<p>${description}</p>\n`
                        finalString += `<${componentName} />`

                        let finalComponent = ''
                        const reacDomMountSubstring = data.substring(data.indexOf('ReactDOM.render('))
                            , JSXStartPos = data.indexOf('````jsx') === -1 ? data.indexOf('```jsx') : data.indexOf('````jsx')
                            , JSXEndPos = reacDomMountSubstring.indexOf('````') === -1 ? reacDomMountSubstring.indexOf('```') : reacDomMountSubstring.indexOf('````')
                            , insideDomMountBracket = reacDomMountSubstring.substring('ReactDOM.render('.length, JSXEndPos)
                                                                        .replace(', mountNode', '').replace(');', '')
                                                                        .replace(',\n  mountNode', '')

                        finalComponent += `
const expComponent = () => (
${insideDomMountBracket}
)
export default expComponent
`.replace(/^\s*$(?:\r\n?|\n)/gm, '')

                        let fileString = `import React from 'react'\n`
                        const jsxCode = data.substring(JSXStartPos, data.indexOf('ReactDOM.render'))

                        fileString += jsxCode.substring(jsxCode.indexOf("\n") + 1) + "\n" + finalComponent
                        fs.writeFile(`./artifacts/${antdComponentName}/${componentName}.js`, fileString, function (err) {
                            if (err) throw err;
                            
                            // console.log(`./artifacts/${antdComponentName}/${componentName}.js Saved!`);
                        })

                        importFileNames.push(componentName)
                        resolve(true)
                    })

                    demoComponentPromises.push(newPromise)
                })

                Promise.all(demoComponentPromises).then(() => {
                    indexFileString += `
${importFileNames.map(filename => `import ${filename} from './${filename}.js'`).join('\n')}

const expComponent = () => (
    <div>
${importFileNames.map(filename => `        <${filename} />`).join('\n')}
    </div>
)
export default expComponent
                    `
                    fs.writeFile(`./artifacts/${antdComponentName}/index.js`, indexFileString, function (err) {
                        if (err) throw err;
                        
                        console.log(`./artifacts/${antdComponentName}/index.js Saved!`);
                    })
                })
            }
        })
    })
})