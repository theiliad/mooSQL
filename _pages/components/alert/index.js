import React from 'react'

    import BannerDemo from './BannerDemo.js'
import BasicDemo from './BasicDemo.js'
import ClosableDemo from './ClosableDemo.js'
import DescriptionDemo from './DescriptionDemo.js'
import MoreTypesDemo from './MoreTypesDemo.js'
import IconDemo from './IconDemo.js'
import SmoothlyUnmountDemo from './SmoothlyUnmountDemo.js'
import CustomizedCloseTextDemo from './CustomizedCloseTextDemo.js'
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
        <div id="component-demos-alert">
            <div className="title-bar">
                <h4>Alert</h4>
                <p>

Alert component for feedback.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo banner">
        <h4>Banner</h4>
        <BannerDemo />
        </div>
<div className="component-demo basic">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo closable">
        <h4>Closable</h4>
        <ClosableDemo />
        </div>
<div className="component-demo description">
        <h4>Description</h4>
        <DescriptionDemo />
        </div>
<div className="component-demo more-types">
        <h4>More Types</h4>
        <MoreTypesDemo />
        </div>
<div className="component-demo icon">
        <h4>Icon</h4>
        <IconDemo />
        </div>
<div className="component-demo smoothly-unmount">
        <h4>Smoothly Unmount</h4>
        <SmoothlyUnmountDemo />
        </div>
<div className="component-demo customized-close-text">
        <h4>Customized Close Text</h4>
        <CustomizedCloseTextDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        