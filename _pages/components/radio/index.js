import React from 'react'

    import BasicDemo from './BasicDemo.js'
import DisabledDemo from './DisabledDemo.js'
import RadioStyleDemo from './RadioStyleDemo.js'
import VerticalRadioGroupDemo from './VerticalRadioGroupDemo.js'
import RadioGroupGroupOptionalDemo from './RadioGroupGroupOptionalDemo.js'
import RadioGroupWithNameDemo from './RadioGroupWithNameDemo.js'
import RadioGroupDemo from './RadioGroupDemo.js'
import SizeDemo from './SizeDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Radio.

## When To Use

- Used to select a single state in multiple options.
- The difference between Select is that Radio is visible to user and can facilitate the comparison of choice. So, when you want to use Radio, option should not be too much.

## API

### Radio

| Property | Description | Type | optional | Default |
| -------- | ----------- | ---- | -------- | ------- |
| autoFocus | get focus when component mounted | boolean | false |  |
| checked | Specifies whether the radio is selected. | boolean |  | false |
| defaultChecked | Specifies the initial state: whether or not the radio is selected. | boolean |  | false |
| disabled | Disable radio | boolean |  | false |
| value | According to value for comparison, to determine whether the selected | any |  | none |

### RadioGroup

radio group，wrap a group of \`Radio\`。

| Property | Description | Type | optional | Default |
| -------- | ----------- | ---- | -------- | ------- |
| defaultValue | Default selected value | any | none | none |
| disabled | Disable all radio buttons | boolean |  | false |
| name | The \`name\` property of all \`input[type="radio"]\` children | string |  | none |
| options | set children optional | string\[] \| Array&lt;{ label: string value: string disabled?: boolean }> | 无 | 无 |
| size | Size, only on radio style | string | \`large\` \`default\` \`small\` | \`default\` |
| value | Used for setting the currently selected value. | any | none | none |
| onChange | The callback function that is triggered when the state changes. | Function(e:Event) | none | none |

## Methods

### Radio

| Name | Description |
| ---- | ----------- |
| blur() | remove focus |
| focus() | get focus |
`
const expComponent = () => (
        <div id="component-demos-radio">
            <div className="title-bar">
                <h4>Radio</h4>
                <p>

Radio.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo basic">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo disabled">
        <h4>Disabled</h4>
        <DisabledDemo />
        </div>
<div className="component-demo radio-style">
        <h4>Radio Style</h4>
        <RadioStyleDemo />
        </div>
<div className="component-demo vertical-radio-group">
        <h4>Vertical Radio Group</h4>
        <VerticalRadioGroupDemo />
        </div>
<div className="component-demo radio-group-group-optional">
        <h4>Radio Group Group Optional</h4>
        <RadioGroupGroupOptionalDemo />
        </div>
<div className="component-demo radio-group-with-name">
        <h4>Radio Group With Name</h4>
        <RadioGroupWithNameDemo />
        </div>
<div className="component-demo radio-group">
        <h4>Radio Group</h4>
        <RadioGroupDemo />
        </div>
<div className="component-demo size">
        <h4>Size</h4>
        <SizeDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        