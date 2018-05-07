import React from 'react'

    import WithBadgeDemo from './WithBadgeDemo.js'
import BasicDemo from './BasicDemo.js'
import AutosetFontSizeDemo from './AutosetFontSizeDemo.js'
import TypeDemo from './TypeDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Avatars can be used to represent people or objects. It supports images, \`Icon\`s, or letters.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| icon | the \`Icon\` type for an icon avatar, see \`Icon\` Component | string | - |
| shape | the shape of avatar | \`circle\` \| \`square\` | \`circle\` |
| size | the size of the avatar | \`large\` \| \`small\` \| \`default\` | \`default\` |
| src | the address of the image for an image avatar | string | - |
`
const expComponent = () => (
        <div>
            <h4>Avatar</h4>
            <p>

Avatars can be used to represent people or objects. It supports images, \`Icon\`s, or letters.

</p>

            <Card bordered={false}>
                        <Card title="With Badge" bordered={true}><WithBadgeDemo /></Card>
        <Card title="Basic" bordered={true}><BasicDemo /></Card>
        <Card title="Autoset Font Size" bordered={true}><AutosetFontSizeDemo /></Card>
        <Card title="Type" bordered={true}><TypeDemo /></Card>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        