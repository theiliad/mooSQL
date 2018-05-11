import React from 'react'

    import BasicDemo from './BasicDemo.js'
import RedBadgeDemo from './RedBadgeDemo.js'
import DynamicDemo from './DynamicDemo.js'
import ClickableDemo from './ClickableDemo.js'
import StandaloneDemo from './StandaloneDemo.js'
import OverflowCountDemo from './OverflowCountDemo.js'
import StatusDemo from './StatusDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Small numerical value or status descriptor for UI elements.

## When To Use

Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count.

## API

\`\`\`jsx
<Badge count={5}>
  <a href="#" className="head-example" />
</Badge>
\`\`\`

\`\`\`jsx
<Badge count={5} />
\`\`\`

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| count | Number to show in badge | number\|ReactNode |  |
| dot | Whether to display a red dot instead of \`count\` | boolean | \`false\` |
| offset | set offset of the badge dot, like\`[x, y]\` | \`[number, number]\` | - |
| overflowCount | Max count to show | number | 99 |
| showZero | Whether to show badge when \`count\` is zero | boolean | \`false\` |
| status | Set Badge as a status dot | \`success\` \| \`processing\` \| \`default\` \| \`error\` \| \`warning\` | \`''\` |
| text | If \`status\` is set, \`text\` sets the display text of the status \`dot\` | string | \`''\` |
`
const expComponent = () => (
        <div id="component-demos-badge">
            <div className="title-bar">
                <h4>Badge</h4>
                <p>

Small numerical value or status descriptor for UI elements.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo">
        <h4>Red Badge</h4>
        <RedBadgeDemo />
        </div>
<div className="component-demo">
        <h4>Dynamic</h4>
        <DynamicDemo />
        </div>
<div className="component-demo">
        <h4>Clickable</h4>
        <ClickableDemo />
        </div>
<div className="component-demo">
        <h4>Standalone</h4>
        <StandaloneDemo />
        </div>
<div className="component-demo">
        <h4>Overflow Count</h4>
        <OverflowCountDemo />
        </div>
<div className="component-demo">
        <h4>Status</h4>
        <StatusDemo />
        </div>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        