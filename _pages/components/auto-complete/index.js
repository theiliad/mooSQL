import React from 'react'

    import BasicUsageDemo from './BasicUsageDemo.js'
import LookupPatternsCertainCategoryDemo from './LookupPatternsCertainCategoryDemo.js'
import CustomizeInputComponentDemo from './CustomizeInputComponentDemo.js'
import CustomizedDemo from './CustomizedDemo.js'
import LookupPatternsUncertainCategoryDemo from './LookupPatternsUncertainCategoryDemo.js'
import NoncasesensitiveAutoCompleteDemo from './NoncasesensitiveAutoCompleteDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Autocomplete function of input field.

## When To Use

When there is a need for autocomplete functionality.

## API

\`\`\`jsx
const dataSource = ['12345', '23456', '34567'];
<AutoComplete dataSource={dataSource} />
\`\`\`

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| allowClear | Show clear button, effective in multiple mode only. | boolean | false |
| autoFocus | get focus when component mounted | boolean | false |
| backfill | backfill selected item the input when using keyboard | boolean | false |
| children (for customize input element) | customize input element | HTMLInputElement / HTMLTextAreaElement / React.ReactElement<InputProps> | \`<Input />\` |
| children (for dataSource) | Data source for autocomplet | React.ReactElement<OptionProps> /  Array&lt;React.ReactElement<OptionProps>> | - |
| dataSource | Data source for autocomplete | [DataSourceItemType](https://git.io/vMMKF)\[] |  |
| defaultActiveFirstOption | Whether active first option by default | boolean | true |
| defaultValue | Initial selected option. | string\|string\[]\|{ key: string, label: string\|ReactNode }\|Array&lt;{ key: string, label: string\|ReactNode }> | - |
| disabled | Whether disabled select | boolean | false |
| filterOption | If true, filter options by input, if function, filter options against it. The function will receive two arguments, \`inputValue\` and \`option\`, if the function returns \`true\`, the option will be included in the filtered set; Otherwise, it will be excluded. | boolean or function(inputValue, option) | true |
| optionLabelProp | Which prop value of option will render as content of select. | string | \`children\` |
| placeholder | placeholder of input | string | - |
| value | selected option | string\|string\[]\|{ key: string, label: string\|ReactNode }\|Array&lt;{ key: string, label: string\|ReactNode }> | - |
| onChange | Called when select an option or input value change, or value of input is changed | function(value) | - |
| onSearch | Called when searching items. | function(value) | - |
| onSelect | Called when a option is selected. param is option's value and option instance. | function(value, option) | - |

## Methods

| Name | Description |
| ---- | ----------- |
| blur() | remove focus |
| focus() | get focus |
`
const expComponent = () => (
        <div id="component-demos-auto-complete">
            <div className="title-bar">
                <h4>Auto Complete</h4>
                <p>

Autocomplete function of input field.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo basic-usage">
        <h4>Basic Usage</h4>
        <BasicUsageDemo />
        </div>
<div className="component-demo lookup-patterns-certain-category">
        <h4>Lookup Patterns Certain Category</h4>
        <LookupPatternsCertainCategoryDemo />
        </div>
<div className="component-demo customize-input-component">
        <h4>Customize Input Component</h4>
        <CustomizeInputComponentDemo />
        </div>
<div className="component-demo customized">
        <h4>Customized</h4>
        <CustomizedDemo />
        </div>
<div className="component-demo lookup-patterns-uncertain-category">
        <h4>Lookup Patterns Uncertain Category</h4>
        <LookupPatternsUncertainCategoryDemo />
        </div>
<div className="component-demo noncasesensitive-auto-complete">
        <h4>Noncasesensitive Auto Complete</h4>
        <NoncasesensitiveAutoCompleteDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        