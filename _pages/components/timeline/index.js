import React from 'react'

    import BasicDemo from './BasicDemo.js'
import CustomDemo from './CustomDemo.js'
import ColorDemo from './ColorDemo.js'
import LastNodeDemo from './LastNodeDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Vertical display timeline.

## When To Use

- When a series of information needs to be ordered by time (ascend or descend).
- When you need a timeline to make a visual connection.

## API

\`\`\`jsx
<Timeline>
  <Timeline.Item>step1 2015-09-01</Timeline.Item>
  <Timeline.Item>step2 2015-09-01</Timeline.Item>
  <Timeline.Item>step3 2015-09-01</Timeline.Item>
  <Timeline.Item>step4 2015-09-01</Timeline.Item>
</Timeline>
\`\`\`

### Timeline

Timeline

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| pending | Set the last ghost node's existence or its content | boolean\|string\|ReactNode | \`false\` |
| pendingDot | Set the dot of the last ghost node when pending is true | \|string\|ReactNode | \`<Icon type="loading" />\` |

### Timeline.Item

Node of timeline

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| color | Set the circle's color to \`blue\`, \`red\`, \`green\` or other custom colors | string | \`blue\` |
| dot | Customize timeline dot | string\|ReactNode | - |
`
const expComponent = () => (
        <div id="component-demos-timeline">
            <div className="title-bar">
                <h4>Timeline</h4>
                <p>

Vertical display timeline.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo">
        <h4>Custom</h4>
        <CustomDemo />
        </div>
<div className="component-demo">
        <h4>Color</h4>
        <ColorDemo />
        </div>
<div className="component-demo">
        <h4>Last Node</h4>
        <LastNodeDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        