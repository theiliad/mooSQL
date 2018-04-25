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
    import { Card } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Tabs make it easy to switch between different views.

### When To Use

Ant Design has 3 types of Tabs for different situations.

- Card Tabs: for managing too many closeable views.
- Normal Tabs: for functional aspects of a page.
- <a href="/components/radio/#components-radio-demo-radiobutton">RadioButton</a>: for secondary tabs.

## API

### Tabs

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| activeKey | Current TabPane's key | string | - |
| animated | Whether to change tabs with animation. Only works while \`\`\`tabPosition=&quot;top&quot;\|&quot;bottom&quot;\`\`\` | boolean | {inkBar:boolean, tabPane:boolean} | \`\`\`true\`\`\`, \`\`\`false\`\`\` when \`\`\`type=&quot;card&quot;\`\`\` |
| defaultActiveKey | Initial active TabPane's key, if \`\`\`activeKey\`\`\` is not set. | string | - |
| hideAdd | Hide plus icon or not. Only works while \`\`\`type=&quot;editable-card&quot;\`\`\` | boolean | \`\`\`false\`\`\` |
| size | preset tab bar size | \`\`\`large\`\`\` | \`\`\`default\`\`\` | \`\`\`small\`\`\` | \`\`\`default\`\`\` |
| tabBarExtraContent | Extra content in tab bar | React.ReactNode | - |
| tabBarStyle | Tab bar style object | object | - |
| tabPosition | Position of tabs | \`\`\`top\`\`\` | \`\`\`right\`\`\` | \`\`\`bottom\`\`\` | \`\`\`left\`\`\` | \`\`\`top\`\`\` |
| type | Basic style of tabs | \`\`\`line\`\`\` | \`\`\`card\`\`\` | \`\`\`editable-card\`\`\` | \`\`\`line\`\`\` |
| onChange | Callback executed when active tab is changed | Function(activeKey) {} | - |
| onEdit | Callback executed when tab is added or removed. Only works while \`\`\`type=&quot;editable-card&quot;\`\`\` | (targetKey, action): void | - |
| onNextClick | Callback executed when next button is clicked | Function | - |
| onPrevClick | Callback executed when prev button is clicked | Function | - |
| onTabClick | Callback executed when tab is clicked | Function | - |
| tabBarGutter | The gap between tabs | number | - |

### Tabs.TabPane

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| forceRender | Forced render of content in tabs, not lazy render after clicking on tabs | boolean | false |
| key | TabPane's key | string | - |
| tab | Show text in TabPane's head | string|ReactNode | - |
`
const expComponent = () => (
        <div>
            <h4>Tabs</h4>

            <Card bordered={false}>
                        <BasicDemo />
        <ContainerOfCardTypeTabDemo />
        <CardTypeTabDemo />
        <CustomizedTriggerOfNewTabDemo />
        <DisabledDemo />
        <AddCloseTabDemo />
        <ExtraContentDemo />
        <IconDemo />
        <PositionDemo />
        <SizeDemo />
        <SlideDemo />

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        