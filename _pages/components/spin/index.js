import React from 'react'

    import BasicUsageDemo from './BasicUsageDemo.js'
import CustomSpinningIndicatorDemo from './CustomSpinningIndicatorDemo.js'
import DelayDemo from './DelayDemo.js'
import InsideAContainerDemo from './InsideAContainerDemo.js'
import EmbeddedModeDemo from './EmbeddedModeDemo.js'
import SizeDemo from './SizeDemo.js'
import CustomizedDescriptionDemo from './CustomizedDescriptionDemo.js'
    import { Card, Row, Col } from 'antd';
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
| size | size of Spin, options: \`small\`, \`default\` and \`large\` | string | \`default\` |
| spinning | whether Spin is spinning | boolean | true |
| tip | customize description content when Spin has children | string | - |
| wrapperClassName | className of wrapper when Spin has children | string | - |
`
const expComponent = () => (
        <div>
            <h4>Spin</h4>
            <p>

A spinner for displaying loading state of a page or a section.

</p>

            <Card bordered={false}>
                <div className="component-demo">
        <h4>Basic Usage</h4>
        <BasicUsageDemo />
        </div>
<div className="component-demo">
        <h4>Custom Spinning Indicator</h4>
        <CustomSpinningIndicatorDemo />
        </div>
<div className="component-demo">
        <h4>Delay</h4>
        <DelayDemo />
        </div>
<div className="component-demo">
        <h4>Inside A Container</h4>
        <InsideAContainerDemo />
        </div>
<div className="component-demo">
        <h4>Embedded Mode</h4>
        <EmbeddedModeDemo />
        </div>
<div className="component-demo">
        <h4>Size</h4>
        <SizeDemo />
        </div>
<div className="component-demo">
        <h4>Customized Description</h4>
        <CustomizedDescriptionDemo />
        </div>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        