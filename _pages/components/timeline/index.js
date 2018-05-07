import React from 'react'

    import BasicDemo from './BasicDemo.js'
import ColorDemo from './ColorDemo.js'
import CustomDemo from './CustomDemo.js'
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
        <div>
            <h4>Timeline</h4>
            <p>

Vertical display timeline.

</p>

            <Card bordered={false}>
                        <Card title="Basic" bordered={true}><BasicDemo /></Card>
        <Card title="Color" bordered={true}><ColorDemo /></Card>
        <Card title="Custom" bordered={true}><CustomDemo /></Card>
        <Card title="Last Node" bordered={true}><LastNodeDemo /></Card>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        