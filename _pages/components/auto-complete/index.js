import React from 'react'

    import BasicUsageDemo from './BasicUsageDemo.js'
import LookupPatternsCertainCategoryDemo from './LookupPatternsCertainCategoryDemo.js'
import CustomizeInputComponentDemo from './CustomizeInputComponentDemo.js'
import NoncasesensitiveAutoCompleteDemo from './NoncasesensitiveAutoCompleteDemo.js'
import CustomizedDemo from './CustomizedDemo.js'
import LookupPatternsUncertainCategoryDemo from './LookupPatternsUncertainCategoryDemo.js'
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
        <div>
            <h4>Auto Complete</h4>
            <p>

Autocomplete function of input field.

</p>

            <Card bordered={false}>
                        <Card title="Basic Usage" bordered={true}><BasicUsageDemo /></Card>
        <Card title="Lookup Patterns Certain Category" bordered={true}><LookupPatternsCertainCategoryDemo /></Card>
        <Card title="Customize Input Component" bordered={true}><CustomizeInputComponentDemo /></Card>
        <Card title="Noncasesensitive Auto Complete" bordered={true}><NoncasesensitiveAutoCompleteDemo /></Card>
        <Card title="Customized" bordered={true}><CustomizedDemo /></Card>
        <Card title="Lookup Patterns Uncertain Category" bordered={true}><LookupPatternsUncertainCategoryDemo /></Card>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        