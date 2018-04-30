import React from 'react'

    import ArrowPointingDemo from './ArrowPointingDemo.js'
import BasicDemo from './BasicDemo.js'
import ControllingTheCloseOfTheDialogDemo from './ControllingTheCloseOfTheDialogDemo.js'
import PlacementDemo from './PlacementDemo.js'
import ThreeWaysToTriggerDemo from './ThreeWaysToTriggerDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

The floating card popped by clicking or hovering.

## When To Use

A simple popup menu to provide extra information or operations.

Comparing with \`\`\`Tooltip\`\`\`, besides information \`\`\`Popover\`\`\` card can also provide action elements like links and buttons.

## API

| Param | Description | Type | Default value |
| ----- | ----------- | ---- | ------------- |
| content | Content of the card | string|ReactNode | - |
| title | Title of the card | string|ReactNode | - |

Consult <a href="https://ant.design/components/tooltip/#API">Tooltip's documentation</a> to find more APIs.

## Note

Please ensure that the child node of \`\`\`Popover\`\`\` accepts \`\`\`onMouseEnter\`\`\`, \`\`\`onMouseLeave\`\`\`, \`\`\`onFocus\`\`\`, \`\`\`onClick\`\`\` events.
`
const expComponent = () => (
        <div>
            <h4>Popover</h4>
            <p>

The floating card popped by clicking or hovering.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Arrow Pointing" bordered={true}><ArrowPointingDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Basic" bordered={true}><BasicDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Controlling The Close Of The Dialog" bordered={true}><ControllingTheCloseOfTheDialogDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Placement" bordered={true}><PlacementDemo /></Card>
        </Col>
</Row>
<Row gutter={30}>
        <Col span={12}>
        <Card title="Three Ways To Trigger" bordered={true}><ThreeWaysToTriggerDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        