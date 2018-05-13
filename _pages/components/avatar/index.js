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
        <div id="component-demos-avatar">
            <div className="title-bar">
                <h4>Avatar</h4>
                <p>

Avatars can be used to represent people or objects. It supports images, \`Icon\`s, or letters.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo with-badge">
        <h4>With Badge</h4>
        <WithBadgeDemo />
        </div>
<div className="component-demo basic">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo autoset-font-size">
        <h4>Autoset Font Size</h4>
        <AutosetFontSizeDemo />
        </div>
<div className="component-demo type">
        <h4>Type</h4>
        <TypeDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        