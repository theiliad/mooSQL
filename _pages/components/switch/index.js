import React from 'react'

    import BasicDemo from './BasicDemo.js'
import DisabledDemo from './DisabledDemo.js'
import TextIconDemo from './TextIconDemo.js'
import TwoSizesDemo from './TwoSizesDemo.js'
import LoadingDemo from './LoadingDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Switching Selector.

## When To Use

- If you need to represent the switching between two states or on-off state.
- The difference between \`Switch\` and \`Checkbox\` is that \`Switch\` will trigger a state change directly when you toggle it, while \`Checkbox\` is generally used for state marking, which should work in conjunction with submit operation.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| autoFocus | get focus when component mounted | boolean | false |
| checked | determine whether the \`Switch\` is checked | boolean | false |
| checkedChildren | content to be shown when the state is checked | string\|ReactNode |  |
| defaultChecked | to set the initial state | boolean | false |
| disabled | Disable switch | boolean | false |
| loading | loading state of switch | boolean | false |
| size | the size of the \`Switch\`, options: \`default\` \`small\` | string | default |
| unCheckedChildren | content to be shown when the state is unchecked | string\|ReactNode |  |
| onChange | a callback function, can be executed when the checked state is changing | Function(checked:Boolean) |  |

## Methods

| Name | Description |
| ---- | ----------- |
| blur() | remove focus |
| focus() | get focus |
`
const expComponent = () => (
        <div id="component-demos-switch">
            <div className="title-bar">
                <h4>Switch</h4>
                <p>

Switching Selector.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo">
        <h4>Disabled</h4>
        <DisabledDemo />
        </div>
<div className="component-demo">
        <h4>Text Icon</h4>
        <TextIconDemo />
        </div>
<div className="component-demo">
        <h4>Two Sizes</h4>
        <TwoSizesDemo />
        </div>
<div className="component-demo">
        <h4>Loading</h4>
        <LoadingDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        