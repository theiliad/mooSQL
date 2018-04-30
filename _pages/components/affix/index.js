import React from 'react'

    import BasicDemo from './BasicDemo.js'
import CallbackDemo from './CallbackDemo.js'
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
| target | specifies the scrollable area dom node | () =&gt; HTMLElement | () =&gt; window |
| onChange | Callback for when affix state is changed | Function(affixed) | - |

<strong>Note:</strong> Children of \`\`\`Affix\`\`\` can not be \`\`\`position: absolute\`\`\`, but you can set \`\`\`Affix\`\`\` as \`\`\`position: absolute\`\`\`:

\`\`\`jsx &lt;Affix style={{ position: 'absolute', top: y, left: x}}&gt; ... &lt;/Affix&gt;\`\`\`
`
const expComponent = () => (
        <div>
            <h4>Affix</h4>
            <p>

Make an element stick to viewport.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Basic" bordered={true}><BasicDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Callback" bordered={true}><CallbackDemo /></Card>
        </Col>
</Row>
<Row gutter={30}>
        <Col span={12}>
        <Card title="Container To Scroll" bordered={true}><ContainerToScrollDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        