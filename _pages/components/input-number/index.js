import React from 'react'

    import BasicDemo from './BasicDemo.js'
import DecimalsDemo from './DecimalsDemo.js'
import DisabledDemo from './DisabledDemo.js'
import SizesDemo from './SizesDemo.js'
import FormatterDemo from './FormatterDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Enter a number within certain range with the mouse or keyboard.

## When To Use

When a numeric value needs to be provided.

## API

| property | description | type | default |
| -------- | ----------- | ---- | ------- |
| autoFocus | get focus when component mounted | boolean | false |
| defaultValue | initial value | number |  |
| disabled | disable the input | boolean | false |
| formatter | Specifies the format of the value presented | function(value: number \| string): string | - |
| max | max vale | number | Infinity |
| min | min value | number | -Infinity |
| parser | Specifies the value extracted from formatter | function( string): number | - |
| precision | precision of input value | number | - |
| size | width of input box | string | - |
| step | The number to which the current value is increased or decreased. It can be an integer or decimal. | number\|string | 1 |
| value | current value | number |  |
| onChange | The callback triggered when the value is changed. | function(value: number \| string) |  |

## Methods

| Name | Description |
| ---- | ----------- |
| blur() | remove focus |
| focus() | get focus |
`
const expComponent = () => (
        <div id="component-demos-input-number">
            <div className="title-bar">
                <h4>Input Number</h4>
                <p>

Enter a number within certain range with the mouse or keyboard.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo basic">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo decimals">
        <h4>Decimals</h4>
        <DecimalsDemo />
        </div>
<div className="component-demo disabled">
        <h4>Disabled</h4>
        <DisabledDemo />
        </div>
<div className="component-demo sizes">
        <h4>Sizes</h4>
        <SizesDemo />
        </div>
<div className="component-demo formatter">
        <h4>Formatter</h4>
        <FormatterDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        