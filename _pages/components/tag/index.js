import React from 'react'

    import BasicDemo from './BasicDemo.js'
import CheckableDemo from './CheckableDemo.js'
import ColorfulTagDemo from './ColorfulTagDemo.js'
import AddRemoveDynamicallyDemo from './AddRemoveDynamicallyDemo.js'
import HotTagsDemo from './HotTagsDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Tag for categorizing or markup.

## When To Use

- It can be used to tag by dimension or property.

- When categorizing.

## API

### Tag

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| afterClose | Callback executed when close animation is completed | () =&gt; void | - |
| closable | Whether Tag can be closed | boolean | \`\`\`false\`\`\` |
| color | Color of the Tag | string | - |
| onClose | Callback executed when tag is closed | (e) =&gt; void | - |

### Tag.CheckableTag

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| checked | Checked status of Tag | boolean | \`\`\`false\`\`\` |
| onChange | Callback executed when Tag is checked/unchecked | (checked) =&gt; void | - |
`
const expComponent = () => (
        <div>
            <h4>Tag</h4>
            <p>

Tag for categorizing or markup.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Basic" bordered={true}><BasicDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Checkable" bordered={true}><CheckableDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Colorful Tag" bordered={true}><ColorfulTagDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Add Remove Dynamically" bordered={true}><AddRemoveDynamicallyDemo /></Card>
        </Col>
</Row>
<Row gutter={30}>
        <Col span={12}>
        <Card title="Hot Tags" bordered={true}><HotTagsDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        