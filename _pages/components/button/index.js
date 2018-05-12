import React from 'react'

    import ButtonGroupDemo from './ButtonGroupDemo.js'
import TypeDemo from './TypeDemo.js'
import DisabledDemo from './DisabledDemo.js'
import GhostButtonDemo from './GhostButtonDemo.js'
import IconDemo from './IconDemo.js'
import LoadingDemo from './LoadingDemo.js'
import MultipleButtonsDemo from './MultipleButtonsDemo.js'
import SizeDemo from './SizeDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

To trigger an operation.

## When To Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

## API

To get a customized button, just set \`type\`/\`shape\`/\`size\`/\`loading\`/\`disabled\`.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| ghost | make background transparent and invert text and border colors, added in 2.7 | boolean | false |
| href | redirect url of link button | string | - |
| htmlType | set the original html \`type\` of \`button\`, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | \`button\` |
| icon | set the icon of button, see: Icon component | string | - |
| loading | set the loading status of button | boolean \| { delay: number } | false |
| shape | can be set to \`circle\` or omitted | string | - |
| size | can be set to \`small\` \`large\` or omitted | string | \`default\` |
| target | same as target attribute of a, works when href is specified | string | - |
| type | can be set to \`primary\` \`ghost\` \`dashed\` \`danger\`(added in 2.7) or omitted (meaning \`default\`) | string | \`default\` |
| onClick | set the handler to handle \`click\` event | function | - |

\`<Button>Hello world!</Button>\` will be rendered into \`<button><span>Hello world!</span></button>\`, and all the properties which are not listed above will be transferred to the \`<button>\` tag.

\`<Button href="http://example.com">Hello world!</Button>\` will be rendered into \`<a href="http://example.com"><span>Hello world!</span></a>\`.

<style>
[id^=components-button-demo-] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^=components-button-demo-] .ant-btn-group > .ant-btn,
[id^=components-button-demo-] .ant-btn-group > span > .ant-btn {
  margin-right: 0;
}
</style>
`
const expComponent = () => (
        <div id="component-demos-button">
            <div className="title-bar">
                <h4>Button</h4>
                <p>

To trigger an operation.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo button-group">
        <h4>Button Group</h4>
        <ButtonGroupDemo />
        </div>
<div className="component-demo type">
        <h4>Type</h4>
        <TypeDemo />
        </div>
<div className="component-demo disabled">
        <h4>Disabled</h4>
        <DisabledDemo />
        </div>
<div className="component-demo ghost-button">
        <h4>Ghost Button</h4>
        <GhostButtonDemo />
        </div>
<div className="component-demo icon">
        <h4>Icon</h4>
        <IconDemo />
        </div>
<div className="component-demo loading">
        <h4>Loading</h4>
        <LoadingDemo />
        </div>
<div className="component-demo multiple-buttons">
        <h4>Multiple Buttons</h4>
        <MultipleButtonsDemo />
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
                        