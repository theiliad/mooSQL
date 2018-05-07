import React from 'react'

    import BasicDemo from './BasicDemo.js'
import DisabledDemo from './DisabledDemo.js'
import VerticalRadioGroupDemo from './VerticalRadioGroupDemo.js'
import RadioStyleDemo from './RadioStyleDemo.js'
import RadioGroupGroupOptionalDemo from './RadioGroupGroupOptionalDemo.js'
import SizeDemo from './SizeDemo.js'
import RadioGroupWithNameDemo from './RadioGroupWithNameDemo.js'
import RadioGroupDemo from './RadioGroupDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Radio.

## When To Use

- Used to select a single state in multiple options.
- The difference between Select is that Radio is visible to user and can facilitate the comparison of choice. So, when you want to use Radio, option should not be too much.

## API

### Radio

| Property | Description | Type | optional | Default |
| -------- | ----------- | ---- | -------- | ------- |
| autoFocus | get focus when component mounted | boolean | false |  |
| checked | Specifies whether the radio is selected. | boolean |  | false |
| defaultChecked | Specifies the initial state: whether or not the radio is selected. | boolean |  | false |
| disabled | Disable radio | boolean |  | false |
| value | According to value for comparison, to determine whether the selected | any |  | none |

### RadioGroup

radio group，wrap a group of \`\`\`Radio\`\`\`。

| Property | Description | Type | optional | Default |
| -------- | ----------- | ---- | -------- | ------- |
| defaultValue | Default selected value | any | none | none |
| disabled | Disable all radio buttons | boolean |  | false |
| name | The \`\`\`name\`\`\` property of all \`\`\`input[type=&quot;radio&quot;]\`\`\` children | string |  | none |
| options | set children optional | string[] | Array&lt;{ label: string value: string disabled?: boolean }&gt; | 无 | 无 |
| size | Size, only on radio style | string | \`\`\`large\`\`\` \`\`\`default\`\`\` \`\`\`small\`\`\` | \`\`\`default\`\`\` |
| value | Used for setting the currently selected value. | any | none | none |
| onChange | The callback function that is triggered when the state changes. | Function(e:Event) | none | none |

## Methods

### Radio

| Name | Description |
| ---- | ----------- |
| blur() | remove focus |
| focus() | get focus |
`
const expComponent = () => (
        <div>
            <h4>Radio</h4>
            <p>

Radio.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Basic" bordered={true}><BasicDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Disabled" bordered={true}><DisabledDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Vertical Radio Group" bordered={true}><VerticalRadioGroupDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Radio Style" bordered={true}><RadioStyleDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Radio Group Group Optional" bordered={true}><RadioGroupGroupOptionalDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Size" bordered={true}><SizeDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Radio Group With Name" bordered={true}><RadioGroupWithNameDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Radio Group" bordered={true}><RadioGroupDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        