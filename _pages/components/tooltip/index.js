import React from 'react'

    import ArrowPointingAtTheCenterDemo from './ArrowPointingAtTheCenterDemo.js'
import AdjustPlacementAutomaticallyDemo from './AdjustPlacementAutomaticallyDemo.js'
import BasicDemo from './BasicDemo.js'
import PlacementDemo from './PlacementDemo.js'
    import { Card } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

A simple text popup tip.

## When To Use

- The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn't support complex text or operations.
- To provide an explanation of a \`\`\`button/text/operation\`\`\`. It's often used instead of the html \`\`\`title\`\`\` attribute.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| title | The text shown in the tooltip | string|ReactNode|() =&gt; ReactNode | - |

### Common API

The following APIs are shared by Tooltip, Popconfirm, Popover.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| arrowPointAtCenter | Whether the arrow is pointed at the center of target, supported after \`\`\`antd@1.11+\`\`\` | boolean | \`\`\`false\`\`\` |
| autoAdjustOverflow | Whether to adjust popup placement automatically when popup is off screen | boolean | \`\`\`true\`\`\` |
| defaultVisible | Whether the floating tooltip card is visible by default | boolean | \`\`\`false\`\`\` |
| getPopupContainer | The DOM container of the tip, the default behavior is to create a \`\`\`div\`\`\` element in \`\`\`body\`\`\`. Use \`\`\`getTooltipContainer\`\`\` if you are using \`\`\`antd@&lt;2.5.2\`\`\` | Function(triggerNode) | () =&gt; document.body |
| mouseEnterDelay | Delay in seconds, before tooltip is shown on mouse enter | number | 0 |
| mouseLeaveDelay | Delay in seconds, before tooltip is hidden on mouse leave | number | 0.1 |
| overlayClassName | Class name of the tooltip card | string | - |
| overlayStyle | Style of the tooltip card | object | - |
| placement | The position of the tooltip relative to the target, which can be one of \`\`\`top\`\`\` \`\`\`left\`\`\` \`\`\`right\`\`\` \`\`\`bottom\`\`\` \`\`\`topLeft\`\`\` \`\`\`topRight\`\`\` \`\`\`bottomLeft\`\`\` \`\`\`bottomRight\`\`\` \`\`\`leftTop\`\`\` \`\`\`leftBottom\`\`\` \`\`\`rightTop\`\`\` \`\`\`rightBottom\`\`\` | string | \`\`\`top\`\`\` |
| trigger | Tooltip trigger mode | \`\`\`hover\`\`\` | \`\`\`focus\`\`\` | \`\`\`click\`\`\` | \`\`\`contextMenu\`\`\` | \`\`\`hover\`\`\` |
| visible | Whether the floating tooltip card is visible or not | boolean | \`\`\`false\`\`\` |
| onVisibleChange | Callback executed when visibility of the tooltip card is changed | (visible) =&gt; void | - |

## Note

Please ensure that the child node of \`\`\`Tooltip\`\`\` accepts \`\`\`onMouseEnter\`\`\`, \`\`\`onMouseLeave\`\`\`, \`\`\`onFocus\`\`\`, \`\`\`onClick\`\`\` events.
`
const expComponent = () => (
        <div>
            <h4>Tooltip</h4>

            <Card bordered={false}>
                        <ArrowPointingAtTheCenterDemo />
        <AdjustPlacementAutomaticallyDemo />
        <BasicDemo />
        <PlacementDemo />

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        