import React from 'react'

    import BasicUsageDemo from './BasicUsageDemo.js'
import CustomSpinningIndicatorDemo from './CustomSpinningIndicatorDemo.js'
import DelayDemo from './DelayDemo.js'
import InsideAContainerDemo from './InsideAContainerDemo.js'
import EmbeddedModeDemo from './EmbeddedModeDemo.js'
import SizeDemo from './SizeDemo.js'
import CustomizedDescriptionDemo from './CustomizedDescriptionDemo.js'
    import { Card } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

A spinner for displaying loading state of a page or a section.

## When To Use

When part of the page is waiting for asynchronous data or during a rendering process, an appropriate loading animation can effectively alleviate users' inquietude.

## API

| Property | Description | Type | Default Value |
| -------- | ----------- | ---- | ------------- |
| delay | specifies a delay in milliseconds for loading state (prevent flush) | number (milliseconds) | - |
| indicator | React node of the spinning indicator | ReactElement | - |
| size | size of Spin, options: \`\`\`small\`\`\`, \`\`\`default\`\`\` and \`\`\`large\`\`\` | string | \`\`\`default\`\`\` |
| spinning | whether Spin is spinning | boolean | true |
| tip | customize description content when Spin has children | string | - |
| wrapperClassName | className of wrapper when Spin has children | string | - |
`
const expComponent = () => (
        <div>
            <h4>Spin</h4>

            <Card bordered={false}>
                        <BasicUsageDemo />
        <CustomSpinningIndicatorDemo />
        <DelayDemo />
        <InsideAContainerDemo />
        <EmbeddedModeDemo />
        <SizeDemo />
        <CustomizedDescriptionDemo />

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        