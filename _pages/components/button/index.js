import React from 'react'

    import TypeDemo from './TypeDemo.js'
import ButtonGroupDemo from './ButtonGroupDemo.js'
import DisabledDemo from './DisabledDemo.js'
import GhostButtonDemo from './GhostButtonDemo.js'
import IconDemo from './IconDemo.js'
import LoadingDemo from './LoadingDemo.js'
import MultipleButtonsDemo from './MultipleButtonsDemo.js'
import SizeDemo from './SizeDemo.js'
    import { Card } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

To trigger an operation.

## When To Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

## API

To get a customized button, just set \`\`\`type\`\`\`/\`\`\`shape\`\`\`/\`\`\`size\`\`\`/\`\`\`loading\`\`\`/\`\`\`disabled\`\`\`.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| ghost | make background transparent and invert text and border colors, added in 2.7 | boolean | false |
| href | redirect url of link button | string | - |
| htmlType | set the original html \`\`\`type\`\`\` of \`\`\`button\`\`\`, see: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type">MDN</a> | string | \`\`\`button\`\`\` |
| icon | set the icon of button, see: Icon component | string | - |
| loading | set the loading status of button | boolean | { delay: number } | false |
| shape | can be set to \`\`\`circle\`\`\` or omitted | string | - |
| size | can be set to \`\`\`small\`\`\` \`\`\`large\`\`\` or omitted | string | \`\`\`default\`\`\` |
| target | same as target attribute of a, works when href is specified | string | - |
| type | can be set to \`\`\`primary\`\`\` \`\`\`ghost\`\`\` \`\`\`dashed\`\`\` \`\`\`danger\`\`\`(added in 2.7) or omitted (meaning \`\`\`default\`\`\`) | string | \`\`\`default\`\`\` |
| onClick | set the handler to handle \`\`\`click\`\`\` event | function | - |

\`\`\`&lt;Button&gt;Hello world!&lt;/Button&gt;\`\`\` will be rendered into \`\`\`&lt;button&gt;&lt;span&gt;Hello world!&lt;/span&gt;&lt;/button&gt;\`\`\`, and all the properties which are not listed above will be transferred to the \`\`\`&lt;button&gt;\`\`\` tag.

\`\`\`&lt;Button href=&quot;http://example.com&quot;&gt;Hello world!&lt;/Button&gt;\`\`\` will be rendered into \`\`\`&lt;a href=&quot;http://example.com&quot;&gt;&lt;span&gt;Hello world!&lt;/span&gt;&lt;/a&gt;\`\`\`.

&lt;style&gt;
[id^=components-button-demo-] .ant-btn {
margin-right: 8px;
margin-bottom: 12px;
}
[id^=components-button-demo-] .ant-btn-group &gt; .ant-btn,
[id^=components-button-demo-] .ant-btn-group &gt; span &gt; .ant-btn {
margin-right: 0;
}
&lt;/style&gt;
`
const expComponent = () => (
        <div>
            <h4>Button</h4>

            <Card bordered={false}>
                        <TypeDemo />
        <ButtonGroupDemo />
        <DisabledDemo />
        <GhostButtonDemo />
        <IconDemo />
        <LoadingDemo />
        <MultipleButtonsDemo />
        <SizeDemo />

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        