import React from 'react'

    import BannerDemo from './BannerDemo.js'
import BasicDemo from './BasicDemo.js'
import ClosableDemo from './ClosableDemo.js'
import CustomizedCloseTextDemo from './CustomizedCloseTextDemo.js'
import DescriptionDemo from './DescriptionDemo.js'
import IconDemo from './IconDemo.js'
import SmoothlyUnmountDemo from './SmoothlyUnmountDemo.js'
import MoreTypesDemo from './MoreTypesDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Alert component for feedback.

## When To Use

- When you need to show alert messages to users.
- When you need a persistent static container which is closable by user actions.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| afterClose | Called when close animation is finished | () => void | - |
| banner | Whether to show as banner | boolean | false |
| closable | Whether Alert can be closed | boolean | - |
| closeText | Close text to show | string\|ReactNode | - |
| description | Additional content of Alert | string\|ReactNode | - |
| message | Content of Alert | string\|ReactNode | - |
| showIcon | Whether to show icon | boolean | false, in \`banner\` mode default is true |
| iconType | Icon type, effective when \`showIcon\` is \`true\` | string | - |
| type | Type of Alert styles, options: \`success\`, \`info\`, \`warning\`, \`error\` | string | \`info\`, in \`banner\` mode default is \`warning\` |
| onClose | Callback when Alert is closed | (e: MouseEvent) => void | - |
`
const expComponent = () => (
        <div>
            <h4>Alert</h4>
            <p>

Alert component for feedback.

</p>

            <Card bordered={false}>
                        <Card title="Banner" bordered={true}><BannerDemo /></Card>
        <Card title="Basic" bordered={true}><BasicDemo /></Card>
        <Card title="Closable" bordered={true}><ClosableDemo /></Card>
        <Card title="Customized Close Text" bordered={true}><CustomizedCloseTextDemo /></Card>
        <Card title="Description" bordered={true}><DescriptionDemo /></Card>
        <Card title="Icon" bordered={true}><IconDemo /></Card>
        <Card title="Smoothly Unmount" bordered={true}><SmoothlyUnmountDemo /></Card>
        <Card title="More Types" bordered={true}><MoreTypesDemo /></Card>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        