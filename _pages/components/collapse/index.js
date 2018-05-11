import React from 'react'

    import AccordionDemo from './AccordionDemo.js'
import BorderlessDemo from './BorderlessDemo.js'
import CollapseDemo from './CollapseDemo.js'
import CustomPanelDemo from './CustomPanelDemo.js'
import NestedPanelDemo from './NestedPanelDemo.js'
import NoArrowDemo from './NoArrowDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

A content area which can be collapsed and expanded.

## When To Use

- Can be used to group or hide complex regions to keep the page clean.
- \`Accordion\` is a special kind of \`Collapse\`, which allows only one panel to be expanded at a time.

## API

### Collapse

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| activeKey | Key of the active panel | string\[]\|string | No default value. In \`accordion\` mode, it's the key of the first panel. |
| defaultActiveKey | Key of the initial active panel | string | - |
| onChange | Callback function executed when active panel is changed | Function | - |

### Collapse.Panel

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| disabled | If \`true\`, panel cannot be opened or closed | boolean | \`false\` |
| header | Title of the panel | string\|ReactNode | - |
| key | Unique key identifying the panel from among its siblings | string | - |
| showArrow | If \`false\`, panel will not show arrow icon | boolean | \`true\` |
| forceRender | Forced render of content on panel, instead of lazy rending after clicking on header | boolean | \`false\` |
`
const expComponent = () => (
        <div id="component-demos-collapse">
            <div className="title-bar">
                <h4>Collapse</h4>
                <p>

A content area which can be collapsed and expanded.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo accordion">
        <h4>Accordion</h4>
        <AccordionDemo />
        </div>
<div className="component-demo borderless">
        <h4>Borderless</h4>
        <BorderlessDemo />
        </div>
<div className="component-demo collapse">
        <h4>Collapse</h4>
        <CollapseDemo />
        </div>
<div className="component-demo custom-panel">
        <h4>Custom Panel</h4>
        <CustomPanelDemo />
        </div>
<div className="component-demo nested-panel">
        <h4>Nested Panel</h4>
        <NestedPanelDemo />
        </div>
<div className="component-demo no-arrow">
        <h4>No Arrow</h4>
        <NoArrowDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        