// Imports
const { lstatSync, readdirSync } = require('fs')
    , fs = require('fs')
    , { join } = require('path')
    , rimraf = require('rimraf')
    , showdown  = require('showdown')
    , converter = new showdown.Converter()
    , convert = require('htmr')
    , md = require('markdown-it')({
        html:         true,        // Enable HTML tags in source
        linkify:      true,        // Autoconvert URL-like text to links
        quotes: '“”‘’'
      })



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

String.prototype.unCapitalize = function() {
    return this.charAt(0).toLowerCase() + this.slice(1);
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
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
    if (!fs.existsSync('../../_pages/components')){
        fs.mkdirAsync('../../_pages/components').then(() => {
            resolve(true)
        })
    } else {
        rimraf('../../_pages/components', function () {
            console.log('Existing Artifacts Deleted!');

            fs.mkdirAsync('../../_pages/components').then(() => {
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

        if (!fs.existsSync(`../../_pages/components/${antdComponentName}`)) {
            const dirPromise = fs.mkdirAsync(`../../_pages/components/${antdComponentName}`);
            dirPromises.push(dirPromise)
        }
    })

    Promise.all(dirPromises).then(() => {
        filteredDirectories.map((directory, index) => {
            if (true) {
                // Demo Logic
                const antdComponentName = directory.replace('components/', '')
                    , subDirectories = getFilesAndDirectories(directory + '/demo')
                    , subDirectoriesToIgnore = "components/breadcrumb/demo/router.md"
                    , demoComponentPromises = []
                    , demoComponents = []
                    , demoComponentNames = []
                    , styles = []

                let indexFileString = `import React from 'react'\n`
                , importFileNames = []
                , varietyIndex = 1
                , componentFileNames = []

                subDirectories
                .filter(subDirectory => subDirectoriesToIgnore.indexOf(subDirectory) === -1)
                .map(subDirectory => {
                    const newPromise = fs.readFileAsync(subDirectory, (err, data, resolve, reject) => {
                        if (err) {
                            reject()
                            throw err;
                        }

                        const classComponent = data.indexOf('extends React.Component') > -1
                            , title = data.substring(data.indexOf('en-US: ') + 'en-US: '.length).split("\n")[0]
                            , description = data.substring(data.indexOf('## en-US') + '## en-US'.length, data.indexOf('````jsx')).trim()
                        
                        let componentName = title.replace(/[^a-zA-Z ]/g, "").split(' ').map(item => item == ' ' ? undefined : item.capitalize()).join("") + "Demo"
                        if (componentFileNames.indexOf(componentName) > -1) componentName += `${index++}`

                        let finalString = ''
                        if (title) finalString += `<h3>${title}<h3>\n`
                        if (description) finalString += `<p>${description}</p>\n`
                        finalString += `<${componentName} />`

                        let finalComponent = ''
                        const reacDomMountSubstring = data.substring(data.indexOf('ReactDOM.render('))
                            , JSXStartPos = data.indexOf('````jsx') === -1 ? data.indexOf('```jsx') : data.indexOf('````jsx')
                            , JSXEndPos = reacDomMountSubstring.indexOf('````') === -1 ? reacDomMountSubstring.indexOf('```') : reacDomMountSubstring.indexOf('````')
                            , insideDomMountBracket = reacDomMountSubstring.substring('ReactDOM.render('.length, JSXEndPos)
                                                                        .replace(', mountNode);', '')
                                                                        .replace(', mountNode', '')
                                                                        .replace(',\n  mountNode\n);', '')
                                                                        .replace(',\n  mountNode', '')
                                                                        // .replace(');', '')

                        finalComponent += `
const expComponent = () => (
    <div>
        ${insideDomMountBracket}
    </div>
)
export default expComponent
`.replace(/^\s*$(?:\r\n?|\n)/gm, '')

                        let fileString = `import React from 'react'\n`
                        const jsxCode = data.substring(JSXStartPos, data.indexOf('ReactDOM.render'))

                        if (componentName == 'ConfirmationModalDialogDemo') {
                            console.log("FINAL COMPONENT", finalComponent)
                            console.log("SUB", subDirectory)
                            console.log("insideDomMountBracket", insideDomMountBracket)
                            console.log("JSXCODE", jsxCode)
                        }

                        fileString += jsxCode.substring(jsxCode.indexOf("\n") + 1) + "\n" + finalComponent
                        fs.writeFile(`../../_pages/components/${antdComponentName}/${componentName}.js`, fileString, function (err) {
                            if (err) throw err;
                            
                            // console.log(`./artifacts/${antdComponentName}/${componentName}.js Saved!`);
                        })

                        if (data.indexOf('<style>') > -1) {
                            styles.push(data.substring(data.indexOf('<style>') + '<style>'.length, data.indexOf('</style>')))
                        }

                        componentFileNames.push(componentName)
                        importFileNames.push(componentName)
                        resolve(true)
                    })

                    demoComponentPromises.push(newPromise)
                })

                Promise.all(demoComponentPromises).then(() => {
                    fs.readFileAsync(`${directory}/index.en-US.md`, (err, data, resolve, reject) => {
                        const markDownData = data.substring(locations('---', data)[1]).replaceAll('\`', '\\`')
                            , componentDescription = markDownData.substring(3, markDownData.indexOf('##'))
                        // readmeHTML = md.renderInline(markDownData)
                        
                        importFileNames = removeArrayDuplicates(importFileNames)

                        indexFileString += `
    ${importFileNames.map(filename => `import ${filename} from './${filename}.js'`).join('\n')}
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    ${styles.length > 0 ? "require('./styles.scss')\n" : ''}` +
    // .replaceAll('`', '\\`').replaceAll('<code>', '\\`\\`\\`').replaceAll('</code>', '\\`\\`\\`')
    "const markDownInput = `" + unescape(markDownData) + "`" +
    `\nconst expComponent = () => (
        <div id="component-demos-${antdComponentName}">
            <div className="title-bar">
                <h4>${antdComponentName.split('-').map(item => item == '-' ? undefined : item.capitalize()).join(' ')}</h4>
                <p>${componentDescription}</p>
            </div>

            <Card bordered={false}>
                ${
                    importFileNames.map((filename, index) => {
                        const JSXTag = `<div className="component-demo ${filename.replace('Demo', '').split(/(?=[A-Z])/).map(word => word.unCapitalize()).join('-')}">\n        <h4>${filename.replace('Demo', '').split(/(?=[A-Z])/).join(' ')}</h4>\n        <${filename} />\n        </div>`
                        
                        return JSXTag
                    }).join('\n')
                }

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        `
                        fs.writeFile(`../../_pages/components/${antdComponentName}/index.js`, indexFileString, function (err) {
                            if (err) throw err;
                            
                            console.log(`../../_pages/components/${antdComponentName}/index.js Saved!`);
                        })

                        if (styles.length > 0) {
                            fs.writeFile(`../../_pages/components/${antdComponentName}/styles.scss`, styles.join('\n'), function (err) {
                                if (err) throw err;
                                
                                console.log(`../../_pages/components/${antdComponentName}/styles.scss Saved!`);
                            })
                        }
                    })
                })
            }
        })
    })
})