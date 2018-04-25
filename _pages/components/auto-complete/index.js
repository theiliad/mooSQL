import React from 'react'

    import BasicUsageDemo from './BasicUsageDemo.js'
import LookupPatternsCertainCategoryDemo from './LookupPatternsCertainCategoryDemo.js'
import CustomizeInputComponentDemo from './CustomizeInputComponentDemo.js'
import NoncasesensitiveAutoCompleteDemo from './NoncasesensitiveAutoCompleteDemo.js'
import CustomizedDemo from './CustomizedDemo.js'
import LookupPatternsUncertainCategoryDemo from './LookupPatternsUncertainCategoryDemo.js'
    import { Card } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Autocomplete function of input field.

## When To Use

When there is a need for autocomplete functionality.

## API

\`\`\`jsx const dataSource = ['12345', '23456', '34567']; &lt;AutoComplete dataSource={dataSource} /&gt;\`\`\`

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| allowClear | Show clear button, effective in multiple mode only. | boolean | false |
| autoFocus | get focus when component mounted | boolean | false |
| backfill | backfill selected item the input when using keyboard | boolean | false |
| children (for customize input element) | customize input element | HTMLInputElement / HTMLTextAreaElement / React.ReactElement&lt;InputProps&gt; | \`\`\`&lt;Input /&gt;\`\`\` |
| children (for dataSource) | Data source for autocomplet | React.ReactElement&lt;OptionProps&gt; /  Array&lt;React.ReactElement&lt;OptionProps&gt;&gt; | - |
| dataSource | Data source for autocomplete | <a href="https://git.io/vMMKF">DataSourceItemType</a>[] |  |
| defaultActiveFirstOption | Whether active first option by default | boolean | true |
| defaultValue | Initial selected option. | string|string[]|{ key: string, label: string|ReactNode }|Array&lt;{ key: string, label: string|ReactNode }&gt; | - |
| disabled | Whether disabled select | boolean | false |
| filterOption | If true, filter options by input, if function, filter options against it. The function will receive two arguments, \`\`\`inputValue\`\`\` and \`\`\`option\`\`\`, if the function returns \`\`\`true\`\`\`, the option will be included in the filtered set; Otherwise, it will be excluded. | boolean or function(inputValue, option) | true |
| optionLabelProp | Which prop value of option will render as content of select. | string | \`\`\`children\`\`\` |
| placeholder | placeholder of input | string | - |
| value | selected option | string|string[]|{ key: string, label: string|ReactNode }|Array&lt;{ key: string, label: string|ReactNode }&gt; | - |
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

            <Card bordered={false}>
                        <BasicUsageDemo />
        <LookupPatternsCertainCategoryDemo />
        <CustomizeInputComponentDemo />
        <NoncasesensitiveAutoCompleteDemo />
        <CustomizedDemo />
        <LookupPatternsUncertainCategoryDemo />

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        