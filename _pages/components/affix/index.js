import React from 'react'

    import CallbackDemo from './CallbackDemo.js'
import BasicDemo from './BasicDemo.js'
import ContainerToScrollDemo from './ContainerToScrollDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Make an element stick to viewport.

## When To Use

When user browses a long web page, some content need to stick to the viewport. This is common for menus and actions.

Please note that Affix should not cover other content on the page, especially when the size of the viewport is small.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| offsetBottom | Pixels to offset from bottom when calculating position of scroll | number | - |
| offsetTop | Pixels to offset from top when calculating position of scroll | number | 0 |
| target | specifies the scrollable area dom node | () => HTMLElement | () => window |
| onChange | Callback for when affix state is changed | Function(affixed) | - |

**Note:** Children of \`Affix\` can not be \`position: absolute\`, but you can set \`Affix\` as \`position: absolute\`:

\`\`\`jsx
<Affix style={{ position: 'absolute', top: y, left: x}}>
  ...
</Affix>
\`\`\`
`
const expComponent = () => (
        <div id="component-demos-affix">
            <div className="title-bar">
                <h4>Affix</h4>
                <p>

Make an element stick to viewport.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo callback">
        <h4>Callback</h4>
        <CallbackDemo />
        </div>
<div className="component-demo basic">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo container-to-scroll">
        <h4>Container To Scroll</h4>
        <ContainerToScrollDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        