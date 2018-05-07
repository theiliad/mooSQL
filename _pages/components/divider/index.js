import React from 'react'

    import HorizontalDemo from './HorizontalDemo.js'
import VerticalDemo from './VerticalDemo.js'
import OrientationOfTitleDemo from './OrientationOfTitleDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

A divider line separates different content.

## When To Use

- Divide sections of article.
- Divide inline text and links such as the operation column of table.

## API

### Divider

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| dashed | whether line is dashed | Boolean | false |
| type | direction type of divider | enum: \`\`\`horizontal\`\`\` \`\`\`vertical\`\`\` | \`\`\`horizontal\`\`\` |
| orientation | position of title inside divider | enum: \`\`\`left\`\`\` \`\`\`right\`\`\` \`\`\`center\`\`\` | \`\`\`center\`\`\` |
`
const expComponent = () => (
        <div>
            <h4>Divider</h4>
            <p>

A divider line separates different content.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Horizontal" bordered={true}><HorizontalDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Vertical" bordered={true}><VerticalDemo /></Card>
        </Col>
</Row>
<Row gutter={30}>
        <Col span={12}>
        <Card title="Orientation Of Title" bordered={true}><OrientationOfTitleDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        