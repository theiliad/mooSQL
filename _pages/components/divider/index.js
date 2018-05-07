import React from 'react'

    import HorizontalDemo from './HorizontalDemo.js'
import OrientationOfTitleDemo from './OrientationOfTitleDemo.js'
import VerticalDemo from './VerticalDemo.js'
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
| type | direction type of divider | enum: \`horizontal\` \`vertical\` | \`horizontal\` |
| orientation | position of title inside divider | enum: \`left\` \`right\` \`center\` | \`center\` |
`
const expComponent = () => (
        <div>
            <h4>Divider</h4>
            <p>

A divider line separates different content.

</p>

            <Card bordered={false}>
                        <Card title="Horizontal" bordered={true}><HorizontalDemo /></Card>
        <Card title="Orientation Of Title" bordered={true}><OrientationOfTitleDemo /></Card>
        <Card title="Vertical" bordered={true}><VerticalDemo /></Card>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        