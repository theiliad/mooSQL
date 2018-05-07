import React from 'react'

    import BasicDemo from './BasicDemo.js'
import CheckableDemo from './CheckableDemo.js'
import AddRemoveDynamicallyDemo from './AddRemoveDynamicallyDemo.js'
import ColorfulTagDemo from './ColorfulTagDemo.js'
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
| afterClose | Callback executed when close animation is completed | () => void | - |
| closable | Whether Tag can be closed | boolean | \`false\` |
| color | Color of the Tag | string | - |
| onClose | Callback executed when tag is closed | (e) => void | - |

### Tag.CheckableTag

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| checked | Checked status of Tag | boolean | \`false\` |
| onChange | Callback executed when Tag is checked/unchecked | (checked) => void | - |
`
const expComponent = () => (
        <div>
            <h4>Tag</h4>
            <p>

Tag for categorizing or markup.

</p>

            <Card bordered={false}>
                        <Card title="Basic" bordered={true}><BasicDemo /></Card>
        <Card title="Checkable" bordered={true}><CheckableDemo /></Card>
        <Card title="Add Remove Dynamically" bordered={true}><AddRemoveDynamicallyDemo /></Card>
        <Card title="Colorful Tag" bordered={true}><ColorfulTagDemo /></Card>
        <Card title="Hot Tags" bordered={true}><HotTagsDemo /></Card>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        