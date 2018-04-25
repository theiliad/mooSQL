import React from 'react'

    import BasicDemo from './BasicDemo.js'
import ColorDemo from './ColorDemo.js'
import CustomDemo from './CustomDemo.js'
import LastNodeDemo from './LastNodeDemo.js'
    import { Card } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Vertical display timeline.

## When To Use

- When a series of information needs to be ordered by time (ascend or descend).
- When you need a timeline to make a visual connection.

## API

\`\`\`jsx &lt;Timeline&gt; &lt;Timeline.Item&gt;step1 2015-09-01&lt;/Timeline.Item&gt; &lt;Timeline.Item&gt;step2 2015-09-01&lt;/Timeline.Item&gt; &lt;Timeline.Item&gt;step3 2015-09-01&lt;/Timeline.Item&gt; &lt;Timeline.Item&gt;step4 2015-09-01&lt;/Timeline.Item&gt; &lt;/Timeline&gt;\`\`\`

### Timeline

Timeline

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| pending | Set the last ghost node's existence or its content | boolean|string|ReactNode | \`\`\`false\`\`\` |
| pendingDot | Set the dot of the last ghost node when pending is true | |string|ReactNode | \`\`\`&lt;Icon type=&quot;loading&quot; /&gt;\`\`\` |

### Timeline.Item

Node of timeline

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| color | Set the circle's color to \`\`\`blue\`\`\`, \`\`\`red\`\`\`, \`\`\`green\`\`\` or other custom colors | string | \`\`\`blue\`\`\` |
| dot | Customize timeline dot | string|ReactNode | - |
`
const expComponent = () => (
        <div>
            <h4>Timeline</h4>

            <Card bordered={false}>
                        <BasicDemo />
        <ColorDemo />
        <CustomDemo />
        <LastNodeDemo />

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        