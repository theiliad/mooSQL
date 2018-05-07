import React from 'react'

    import BasicCardDemo from './BasicCardDemo.js'
import NoBorderDemo from './NoBorderDemo.js'
import CustomizedContentDemo from './CustomizedContentDemo.js'
import GridCardDemo from './GridCardDemo.js'
import CardInColumnDemo from './CardInColumnDemo.js'
import InnerCardDemo from './InnerCardDemo.js'
import LoadingCardDemo from './LoadingCardDemo.js'
import SupportMoreContentConfigurationDemo from './SupportMoreContentConfigurationDemo.js'
import SimpleCardDemo from './SimpleCardDemo.js'
import WithTabsDemo from './WithTabsDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Simple rectangular container.

## When To Use

A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.

## API

\`\`\`html
<Card title="Card title">Card content</Card>
\`\`\`

### Card

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| actions | The action list, shows at the bottom of the Card. | Array<ReactNode> | - |
| bodyStyle | Inline style to apply to the card content | object | - |
| bordered | Toggles rendering of the border around the card | boolean | \`true\` |
| cover | Card cover | ReactNode | - |
| extra | Content to render in the top-right corner of the card | string\|ReactNode | - |
| hoverable | Lift up when hovering card | boolean | false |
| loading | Shows a loading indicator while the contents of the card are being fetched | boolean | false |
| tabList | List of TabPane's head. | Array&lt;{key: string, tab: ReactNode}> | - |
| activeTabKey | Current TabPane's key | string | - |
| defaultActiveTabKey | Initial active TabPane's key, if \`activeTabKey\` is not set. | string | - |
| title | Card title | string\|ReactNode | - |
| type | Card style type, can be set to \`inner\` or not set | string | - |
| onTabChange | Callback when tab is switched | (key) => void | - |

### Card.Grid

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| className | className of container | string | - |
| style | style object of container | object | - |

### Card.Meta

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| avatar | avatar or icon | ReactNode | - |
| className | className of container | string | - |
| description | description content | ReactNode | - |
| style | style object of container | object | - |
| title | title content | ReactNode | - |
`
const expComponent = () => (
        <div>
            <h4>Card</h4>
            <p>

Simple rectangular container.

</p>

            <Card bordered={false}>
                        <Card title="Basic Card" bordered={true}><BasicCardDemo /></Card>
        <Card title="No Border" bordered={true}><NoBorderDemo /></Card>
        <Card title="Customized Content" bordered={true}><CustomizedContentDemo /></Card>
        <Card title="Grid Card" bordered={true}><GridCardDemo /></Card>
        <Card title="Card In Column" bordered={true}><CardInColumnDemo /></Card>
        <Card title="Inner Card" bordered={true}><InnerCardDemo /></Card>
        <Card title="Loading Card" bordered={true}><LoadingCardDemo /></Card>
        <Card title="Support More Content Configuration" bordered={true}><SupportMoreContentConfigurationDemo /></Card>
        <Card title="Simple Card" bordered={true}><SimpleCardDemo /></Card>
        <Card title="With Tabs" bordered={true}><WithTabsDemo /></Card>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        