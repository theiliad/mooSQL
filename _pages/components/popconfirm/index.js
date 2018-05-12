import React from 'react'

    import LocaleTextDemo from './LocaleTextDemo.js'
import BasicDemo from './BasicDemo.js'
import ConditionalTriggerDemo from './ConditionalTriggerDemo.js'
import PlacementDemo from './PlacementDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

A simple and compact confirmation dialog of an action.

## When To Use

A simple and compact dialog used for asking for user confirmation.

The difference with the \`confirm\` modal dialog is that it's more lightweight than the static popped full-screen confirm modal.

## API

| Param | Description | Type | Default value |
| ----- | ----------- | ---- | ------------- |
| cancelText | text of the Cancel button | string | \`Cancel\` |
| okText | text of the Confirm button | string | \`Confirm\` |
| okType | Button \`type\` of the Confirm button | string | \`primary\` |
| title | title of the confirmation box | string\|ReactNode | - |
| onCancel | callback of cancel | function(e) | - |
| onConfirm | callback of confirmation | function(e) | - |

Consult [Tooltip's documentation](https://ant.design/components/tooltip/#API) to find more APIs.

## Note

Please ensure that the child node of \`Popconfirm\` accepts \`onMouseEnter\`, \`onMouseLeave\`, \`onFocus\`, \`onClick\` events.
`
const expComponent = () => (
        <div id="component-demos-popconfirm">
            <div className="title-bar">
                <h4>Popconfirm</h4>
                <p>

A simple and compact confirmation dialog of an action.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo locale-text">
        <h4>Locale Text</h4>
        <LocaleTextDemo />
        </div>
<div className="component-demo basic">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo conditional-trigger">
        <h4>Conditional Trigger</h4>
        <ConditionalTriggerDemo />
        </div>
<div className="component-demo placement">
        <h4>Placement</h4>
        <PlacementDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        