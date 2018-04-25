import React from 'react'

    import BasicDemo from './BasicDemo.js'
import DecimalsDemo from './DecimalsDemo.js'
import DisabledDemo from './DisabledDemo.js'
import FormatterDemo from './FormatterDemo.js'
import SizesDemo from './SizesDemo.js'
    import { Card } from 'antd';
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
| formatter | Specifies the format of the value presented | function(value: number | string): string | - |
| max | max vale | number | Infinity |
| min | min value | number | -Infinity |
| parser | Specifies the value extracted from formatter | function( string): number | - |
| precision | precision of input value | number | - |
| size | width of input box | string | - |
| step | The number to which the current value is increased or decreased. It can be an integer or decimal. | number|string | 1 |
| value | current value | number |  |
| onChange | The callback triggered when the value is changed. | function(value: number | string) |  |

## Methods

| Name | Description |
| ---- | ----------- |
| blur() | remove focus |
| focus() | get focus |
`
const expComponent = () => (
        <div>
            <h4>Input Number</h4>

            <Card bordered={false}>
                        <BasicDemo />
        <DecimalsDemo />
        <DisabledDemo />
        <FormatterDemo />
        <SizesDemo />

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        