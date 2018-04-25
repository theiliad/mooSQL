import React from 'react'

    import BasicDemo from './BasicDemo.js'
import DynamicDemo from './DynamicDemo.js'
import RedBadgeDemo from './RedBadgeDemo.js'
import ClickableDemo from './ClickableDemo.js'
import StandaloneDemo from './StandaloneDemo.js'
import OverflowCountDemo from './OverflowCountDemo.js'
import StatusDemo from './StatusDemo.js'
    import { Card } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Small numerical value or status descriptor for UI elements.

## When To Use

Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count.

## API

\`\`\`jsx &lt;Badge count={5}&gt; &lt;a href=&quot;#&quot; className=&quot;head-example&quot; /&gt; &lt;/Badge&gt;\`\`\`

\`\`\`jsx &lt;Badge count={5} /&gt;\`\`\`

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| count | Number to show in badge | number|ReactNode |  |
| dot | Whether to display a red dot instead of \`\`\`count\`\`\` | boolean | \`\`\`false\`\`\` |
| offset | set offset of the badge dot, like\`\`\`[x, y]\`\`\` | \`\`\`[number, number]\`\`\` | - |
| overflowCount | Max count to show | number | 99 |
| showZero | Whether to show badge when \`\`\`count\`\`\` is zero | boolean | \`\`\`false\`\`\` |
| status | Set Badge as a status dot | \`\`\`success\`\`\` | \`\`\`processing\`\`\` | \`\`\`default\`\`\` | \`\`\`error\`\`\` | \`\`\`warning\`\`\` | \`\`\`''\`\`\` |
| text | If \`\`\`status\`\`\` is set, \`\`\`text\`\`\` sets the display text of the status \`\`\`dot\`\`\` | string | \`\`\`''\`\`\` |
`
const expComponent = () => (
        <div>
            <h4>Badge</h4>

            <Card bordered={false}>
                        <BasicDemo />
        <DynamicDemo />
        <RedBadgeDemo />
        <ClickableDemo />
        <StandaloneDemo />
        <OverflowCountDemo />
        <StatusDemo />

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        