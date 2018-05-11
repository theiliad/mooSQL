import React from 'react'

    import BasicCardDemo from './BasicCardDemo.js'
import NoBorderDemo from './NoBorderDemo.js'
import GridCardDemo from './GridCardDemo.js'
import CustomizedContentDemo from './CustomizedContentDemo.js'
import InnerCardDemo from './InnerCardDemo.js'
import CardInColumnDemo from './CardInColumnDemo.js'
import LoadingCardDemo from './LoadingCardDemo.js'
import SimpleCardDemo from './SimpleCardDemo.js'
import SupportMoreContentConfigurationDemo from './SupportMoreContentConfigurationDemo.js'
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
        <div id="component-demos-card">
            <div className="title-bar">
                <h4>Card</h4>
                <p>

Simple rectangular container.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo">
        <h4>Basic Card</h4>
        <BasicCardDemo />
        </div>
<div className="component-demo">
        <h4>No Border</h4>
        <NoBorderDemo />
        </div>
<div className="component-demo">
        <h4>Grid Card</h4>
        <GridCardDemo />
        </div>
<div className="component-demo">
        <h4>Customized Content</h4>
        <CustomizedContentDemo />
        </div>
<div className="component-demo">
        <h4>Inner Card</h4>
        <InnerCardDemo />
        </div>
<div className="component-demo">
        <h4>Card In Column</h4>
        <CardInColumnDemo />
        </div>
<div className="component-demo">
        <h4>Loading Card</h4>
        <LoadingCardDemo />
        </div>
<div className="component-demo">
        <h4>Simple Card</h4>
        <SimpleCardDemo />
        </div>
<div className="component-demo">
        <h4>Support More Content Configuration</h4>
        <SupportMoreContentConfigurationDemo />
        </div>
<div className="component-demo">
        <h4>With Tabs</h4>
        <WithTabsDemo />
        </div>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        