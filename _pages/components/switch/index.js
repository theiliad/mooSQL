import React from 'react'

    import BasicDemo from './BasicDemo.js'
import LoadingDemo from './LoadingDemo.js'
import DisabledDemo from './DisabledDemo.js'
import TwoSizesDemo from './TwoSizesDemo.js'
import TextIconDemo from './TextIconDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Switching Selector.

## When To Use

- If you need to represent the switching between two states or on-off state.
- The difference between \`\`\`Switch\`\`\` and \`\`\`Checkbox\`\`\` is that \`\`\`Switch\`\`\` will trigger a state change directly when you toggle it, while \`\`\`Checkbox\`\`\` is generally used for state marking, which should work in conjunction with submit operation.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| autoFocus | get focus when component mounted | boolean | false |
| checked | determine whether the \`\`\`Switch\`\`\` is checked | boolean | false |
| checkedChildren | content to be shown when the state is checked | string|ReactNode |  |
| defaultChecked | to set the initial state | boolean | false |
| disabled | Disable switch | boolean | false |
| loading | loading state of switch | boolean | false |
| size | the size of the \`\`\`Switch\`\`\`, options: \`\`\`default\`\`\` \`\`\`small\`\`\` | string | default |
| unCheckedChildren | content to be shown when the state is unchecked | string|ReactNode |  |
| onChange | a callback function, can be executed when the checked state is changing | Function(checked:Boolean) |  |

## Methods

| Name | Description |
| ---- | ----------- |
| blur() | remove focus |
| focus() | get focus |
`
const expComponent = () => (
        <div>
            <h4>Switch</h4>
            <p>

Switching Selector.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Basic" bordered={true}><BasicDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Loading" bordered={true}><LoadingDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Disabled" bordered={true}><DisabledDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Two Sizes" bordered={true}><TwoSizesDemo /></Card>
        </Col>
</Row>
<Row gutter={30}>
        <Col span={12}>
        <Card title="Text Icon" bordered={true}><TextIconDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        