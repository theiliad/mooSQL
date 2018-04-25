import React from 'react'

    import BasicDemo from './BasicDemo.js'
import ColorfulTagDemo from './ColorfulTagDemo.js'
import CheckableDemo from './CheckableDemo.js'
import AddRemoveDynamicallyDemo from './AddRemoveDynamicallyDemo.js'
import HotTagsDemo from './HotTagsDemo.js'
    import { Card } from 'antd';
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

            <Card bordered={false}>
                        <BasicDemo />
        <ColorfulTagDemo />
        <CheckableDemo />
        <AddRemoveDynamicallyDemo />
        <HotTagsDemo />

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        