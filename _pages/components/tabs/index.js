import React from 'react'

    import BasicDemo from './BasicDemo.js'
import ContainerOfCardTypeTabDemo from './ContainerOfCardTypeTabDemo.js'
import CardTypeTabDemo from './CardTypeTabDemo.js'
import CustomizedTriggerOfNewTabDemo from './CustomizedTriggerOfNewTabDemo.js'
import DisabledDemo from './DisabledDemo.js'
import AddCloseTabDemo from './AddCloseTabDemo.js'
import ExtraContentDemo from './ExtraContentDemo.js'
import IconDemo from './IconDemo.js'
import PositionDemo from './PositionDemo.js'
import SizeDemo from './SizeDemo.js'
import SlideDemo from './SlideDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Tabs make it easy to switch between different views.

### When To Use

Ant Design has 3 types of Tabs for different situations.

- Card Tabs: for managing too many closeable views.
- Normal Tabs: for functional aspects of a page.
- [RadioButton](/components/radio/#components-radio-demo-radiobutton): for secondary tabs.

## API

### Tabs

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| activeKey | Current TabPane's key | string | - |
| animated | Whether to change tabs with animation. Only works while \`tabPosition="top"\|"bottom"\` | boolean \| {inkBar:boolean, tabPane:boolean} | \`true\`, \`false\` when \`type="card"\` |
| defaultActiveKey | Initial active TabPane's key, if \`activeKey\` is not set. | string | - |
| hideAdd | Hide plus icon or not. Only works while \`type="editable-card"\` | boolean | \`false\` |
| size | preset tab bar size | \`large\` \| \`default\` \| \`small\` | \`default\` |
| tabBarExtraContent | Extra content in tab bar | React.ReactNode | - |
| tabBarStyle | Tab bar style object | object | - |
| tabPosition | Position of tabs | \`top\` \| \`right\` \| \`bottom\` \| \`left\` | \`top\` |
| type | Basic style of tabs | \`line\` \| \`card\` \| \`editable-card\` | \`line\` |
| onChange | Callback executed when active tab is changed | Function(activeKey) {} | - |
| onEdit | Callback executed when tab is added or removed. Only works while \`type="editable-card"\` | (targetKey, action): void | - |
| onNextClick | Callback executed when next button is clicked | Function | - |
| onPrevClick | Callback executed when prev button is clicked | Function | - |
| onTabClick | Callback executed when tab is clicked | Function | - |
| tabBarGutter | The gap between tabs | number | - |

### Tabs.TabPane

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| forceRender | Forced render of content in tabs, not lazy render after clicking on tabs | boolean | false |
| key | TabPane's key | string | - |
| tab | Show text in TabPane's head | string\|ReactNode | - |
`
const expComponent = () => (
        <div id="component-demos-tabs">
            <div className="title-bar">
                <h4>Tabs</h4>
                <p>

Tabs make it easy to switch between different views.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo">
        <h4>Container Of Card Type Tab</h4>
        <ContainerOfCardTypeTabDemo />
        </div>
<div className="component-demo">
        <h4>Card Type Tab</h4>
        <CardTypeTabDemo />
        </div>
<div className="component-demo">
        <h4>Customized Trigger Of New Tab</h4>
        <CustomizedTriggerOfNewTabDemo />
        </div>
<div className="component-demo">
        <h4>Disabled</h4>
        <DisabledDemo />
        </div>
<div className="component-demo">
        <h4>Add Close Tab</h4>
        <AddCloseTabDemo />
        </div>
<div className="component-demo">
        <h4>Extra Content</h4>
        <ExtraContentDemo />
        </div>
<div className="component-demo">
        <h4>Icon</h4>
        <IconDemo />
        </div>
<div className="component-demo">
        <h4>Position</h4>
        <PositionDemo />
        </div>
<div className="component-demo">
        <h4>Size</h4>
        <SizeDemo />
        </div>
<div className="component-demo">
        <h4>Slide</h4>
        <SlideDemo />
        </div>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        