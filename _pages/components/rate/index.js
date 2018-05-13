import React from 'react'

    import BasicDemo from './BasicDemo.js'
import ClearStarDemo from './ClearStarDemo.js'
import OtherCharacterDemo from './OtherCharacterDemo.js'
import ReadOnlyDemo from './ReadOnlyDemo.js'
import HalfStarDemo from './HalfStarDemo.js'
import ShowCopywritingDemo from './ShowCopywritingDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Rate component.

## When To Use

- Show evaluation.
- A quick rating operation on something.

## API

| Property | Description | type | Default |
| -------- | ----------- | ---- | ------- |
| allowClear | whether to allow clear when click again | boolean | true |
| allowHalf | whether to allow semi selection | boolean | false |
| autoFocus | get focus when component mounted | boolean | false |
| character | custom character of rate | ReactNode | \`<Icon type="star" />\` |
| className | custom class name of rate | string | - |
| count | star count | number | 5 |
| defaultValue | default value | number | 0 |
| disabled | read only, unable to interact | boolean | false |
| style | custom style object of rate | object | - |
| value | current value | number | - |
| onBlur | callback when component lose focus | Function() | - |
| onChange | callback when select value | Function(value: number) | - |
| onFocus | callback when component get focus | Function() | - |
| onHoverChange | callback when hover item | Function(value: number) | - |
| onKeyDown | callback when keydown on component | Function(event) | - |

## Methods

| Name | Description |
| ---- | ----------- |
| blur() | remove focus |
| focus() | get focus |
`
const expComponent = () => (
        <div id="component-demos-rate">
            <div className="title-bar">
                <h4>Rate</h4>
                <p>

Rate component.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo basic">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo clear-star">
        <h4>Clear Star</h4>
        <ClearStarDemo />
        </div>
<div className="component-demo other-character">
        <h4>Other Character</h4>
        <OtherCharacterDemo />
        </div>
<div className="component-demo read-only">
        <h4>Read Only</h4>
        <ReadOnlyDemo />
        </div>
<div className="component-demo half-star">
        <h4>Half Star</h4>
        <HalfStarDemo />
        </div>
<div className="component-demo show-copywriting">
        <h4>Show Copywriting</h4>
        <ShowCopywritingDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        