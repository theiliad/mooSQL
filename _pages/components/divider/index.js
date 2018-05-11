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
| type | direction type of divider | enum: \`horizontal\` \`vertical\` | \`horizontal\` |
| orientation | position of title inside divider | enum: \`left\` \`right\` \`center\` | \`center\` |
`
const expComponent = () => (
        <div id="component-demos-divider">
            <div className="title-bar">
                <h4>Divider</h4>
                <p>

A divider line separates different content.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo">
        <h4>Horizontal</h4>
        <HorizontalDemo />
        </div>
<div className="component-demo">
        <h4>Vertical</h4>
        <VerticalDemo />
        </div>
<div className="component-demo">
        <h4>Orientation Of Title</h4>
        <OrientationOfTitleDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        