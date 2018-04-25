import React from 'react'

    import BasicDemo from './BasicDemo.js'
import CheckAllDemo from './CheckAllDemo.js'
import ControlledCheckboxDemo from './ControlledCheckboxDemo.js'
import DisabledDemo from './DisabledDemo.js'
import CheckboxGroupDemo from './CheckboxGroupDemo.js'
import UseWithGridDemo from './UseWithGridDemo.js'
    import { Card } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Checkbox.

## When To Use

- Used for selecting multiple values from several options.
- If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.

## API

### Checkbox

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| autoFocus | get focus when component mounted | boolean | false |
| checked | Specifies whether the checkbox is selected. | boolean | false |
| defaultChecked | Specifies the initial state: whether or not the checkbox is selected. | boolean | false |
| disabled | Disable checkbox | boolean | false |
| onChange | The callback function that is triggered when the state changes. | Function(e:Event) | - |

### Checkbox Group

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| defaultValue | Default selected value | string[] | [] |
| disabled | Disable all checkboxes | boolean | false |
| options | Specifies options | string[] | [] |
| value | Used for setting the currently selected value. | string[] | [] |
| onChange | The callback function that is triggered when the state changes. | Function(checkedValue) | - |

## Methods

### Checkbox

| Name | Description |
| ---- | ----------- |
| blur() | remove focus |
| focus() | get focus |
`
const expComponent = () => (
        <div>
            <h4>Checkbox</h4>

            <Card bordered={false}>
                        <BasicDemo />
        <CheckAllDemo />
        <ControlledCheckboxDemo />
        <DisabledDemo />
        <CheckboxGroupDemo />
        <UseWithGridDemo />

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        