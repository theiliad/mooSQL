import React from 'react'

    import AccordionDemo from './AccordionDemo.js'
import CollapseDemo from './CollapseDemo.js'
import BorderlessDemo from './BorderlessDemo.js'
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
- \`\`\`Accordion\`\`\` is a special kind of \`\`\`Collapse\`\`\`, which allows only one panel to be expanded at a time.

## API

### Collapse

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| activeKey | Key of the active panel | string[]|string | No default value. In \`\`\`accordion\`\`\` mode, it's the key of the first panel. |
| defaultActiveKey | Key of the initial active panel | string | - |
| onChange | Callback function executed when active panel is changed | Function | - |

### Collapse.Panel

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| disabled | If \`\`\`true\`\`\`, panel cannot be opened or closed | boolean | \`\`\`false\`\`\` |
| header | Title of the panel | string|ReactNode | - |
| key | Unique key identifying the panel from among its siblings | string | - |
| showArrow | If \`\`\`false\`\`\`, panel will not show arrow icon | boolean | \`\`\`true\`\`\` |
| forceRender | Forced render of content on panel, instead of lazy rending after clicking on header | boolean | \`\`\`false\`\`\` |
`
const expComponent = () => (
        <div>
            <h4>Collapse</h4>
            <p>

A content area which can be collapsed and expanded.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Accordion" bordered={true}><AccordionDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Collapse" bordered={true}><CollapseDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Borderless" bordered={true}><BorderlessDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Custom Panel" bordered={true}><CustomPanelDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Nested Panel" bordered={true}><NestedPanelDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="No Arrow" bordered={true}><NoArrowDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        