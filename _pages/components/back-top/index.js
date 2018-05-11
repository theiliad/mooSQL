import React from 'react'

    import BasicDemo from './BasicDemo.js'
import CustomStyleDemo from './CustomStyleDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

\`BackTop\` makes it easy to go back to the top of the page.

## When To Use

- When the page content is very long.
- When you need to go back to the top very frequently in order to view the contents.

## API

> The distance to the bottom is set to \`50px\` by default, which is overridable.
>
> If you decide to use custom styles, please note the size limit: no more than \`40px * 40px\`.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| target | specifies the scrollable area dom node | () => HTMLElement | () => window |
| visibilityHeight | the \`BackTop\` button will not show until the scroll height reaches this value | number | 400 |
| onClick | a callback function, which can be executed when you click the button | Function | - |
`
const expComponent = () => (
        <div id="component-demos-back-top">
            <div className="title-bar">
                <h4>Back Top</h4>
                <p>

\`BackTop\` makes it easy to go back to the top of the page.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo">
        <h4>Custom Style</h4>
        <CustomStyleDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        