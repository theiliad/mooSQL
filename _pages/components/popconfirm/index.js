import React from 'react'

    import BasicDemo from './BasicDemo.js'
import ConditionalTriggerDemo from './ConditionalTriggerDemo.js'
import LocaleTextDemo from './LocaleTextDemo.js'
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
        <div>
            <h4>Popconfirm</h4>
            <p>

A simple and compact confirmation dialog of an action.

</p>

            <Card bordered={false}>
                        <Card title="Basic" bordered={true}><BasicDemo /></Card>
        <Card title="Conditional Trigger" bordered={true}><ConditionalTriggerDemo /></Card>
        <Card title="Locale Text" bordered={true}><LocaleTextDemo /></Card>
        <Card title="Placement" bordered={true}><PlacementDemo /></Card>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        