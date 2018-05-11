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

Comparing with \`Tooltip\`, besides information \`Popover\` card can also provide action elements like links and buttons.

## API

| Param | Description | Type | Default value |
| ----- | ----------- | ---- | ------------- |
| content | Content of the card | string\|ReactNode | - |
| title | Title of the card | string\|ReactNode | - |

Consult [Tooltip's documentation](https://ant.design/components/tooltip/#API) to find more APIs.

## Note

Please ensure that the child node of \`Popover\` accepts \`onMouseEnter\`, \`onMouseLeave\`, \`onFocus\`, \`onClick\` events.
`
const expComponent = () => (
        <div id="component-demos-popover">
            <div className="title-bar">
                <h4>Popover</h4>
                <p>

The floating card popped by clicking or hovering.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo">
        <h4>Arrow Pointing</h4>
        <ArrowPointingDemo />
        </div>
<div className="component-demo">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo">
        <h4>Controlling The Close Of The Dialog</h4>
        <ControllingTheCloseOfTheDialogDemo />
        </div>
<div className="component-demo">
        <h4>Placement</h4>
        <PlacementDemo />
        </div>
<div className="component-demo">
        <h4>Three Ways To Trigger</h4>
        <ThreeWaysToTriggerDemo />
        </div>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        