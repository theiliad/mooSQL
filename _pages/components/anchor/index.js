import React from 'react'

    import BasicDemo from './BasicDemo.js'
import StaticAnchorDemo from './StaticAnchorDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Hyperlinks to scroll on one page.

## When To Use

For displaying anchor hyperlinks on page and jumping between them.

## API

### Anchor Props

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| affix | Fixed mode of Anchor | boolean | true |
| bounds | Bounding distance of anchor area | number | 5(px) |
| getContainer | Scrolling container | () => HTMLElement | () => window  |
| offsetBottom | Pixels to offset from bottom when calculating position of scroll | number | - |
| offsetTop | Pixels to offset from top when calculating position of scroll | number | 0 |
| showInkInFixed | Whether show ink-balls in Fixed mode | boolean | false |

### Link Props

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| href | target of hyperlink | string |  |
| title | content of  hyperlink | string\|ReactNode |  |
`
const expComponent = () => (
        <div>
            <h4>Anchor</h4>
            <p>

Hyperlinks to scroll on one page.

</p>

            <Card bordered={false}>
                        <Card title="Basic" bordered={true}><BasicDemo /></Card>
        <Card title="Static Anchor" bordered={true}><StaticAnchorDemo /></Card>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        