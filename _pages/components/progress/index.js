import React from 'react'

    import DynamicCircularProgressBarDemo from './DynamicCircularProgressBarDemo.js'
import MiniSizeCircularProgressBarDemo from './MiniSizeCircularProgressBarDemo.js'
import CircularProgressBarDemo from './CircularProgressBarDemo.js'
import DashboardDemo from './DashboardDemo.js'
import DynamicDemo from './DynamicDemo.js'
import MiniSizeProgressBarDemo from './MiniSizeProgressBarDemo.js'
import CustomTextFormatDemo from './CustomTextFormatDemo.js'
import ProgressBarDemo from './ProgressBarDemo.js'
import ProgressBarWithSuccessSegmentDemo from './ProgressBarWithSuccessSegmentDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Display the current progress of an operation flow.

## When To Use

If it will take a long time to complete an operation, you can use \`Progress\` to show the current progress and status.

- When an operation will interrupt the current interface, or it needs to run in the background for more than 2 seconds.
- When you need to display the completion percentage of an operation.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| format | template function of the content | function(percent) | \`percent => percent + '%'\` |
| gapDegree \`(type=circle)\` | the gap degree of half circle, 0 ~ 360 | number | 0 |
| gapPosition \`(type=circle)\` | the gap position, options: \`top\` \`bottom\` \`left\` \`right\` | string | \`top\` |
| percent | to set the completion percentage | number | 0 |
| showInfo | whether to display the progress value and the status icon | boolean | true |
| status | to set the status of the Progress, options: \`success\` \`exception\` \`active\` | string | - |
| strokeWidth \`(type=line)\` | to set the width of the progress bar, unit: \`px\` | number | 10 |
| strokeWidth \`(type=circle)\` | to set the width of the circular progress bar, unit: percentage of the canvas width | number | 6 |
| type | to set the type, options: \`line\` \`circle\` \`dashboard\` | string | \`line\` |
| width \`(type=circle)\` | to set the canvas width of the circular progress bar, unit: \`px\` | number | 132 |
| successPercent | segmented success percent, works when \`type="line"\` | number | 0 |
`
const expComponent = () => (
        <div id="component-demos-progress">
            <div className="title-bar">
                <h4>Progress</h4>
                <p>

Display the current progress of an operation flow.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo dynamic-circular-progress-bar">
        <h4>Dynamic Circular Progress Bar</h4>
        <DynamicCircularProgressBarDemo />
        </div>
<div className="component-demo mini-size-circular-progress-bar">
        <h4>Mini Size Circular Progress Bar</h4>
        <MiniSizeCircularProgressBarDemo />
        </div>
<div className="component-demo circular-progress-bar">
        <h4>Circular Progress Bar</h4>
        <CircularProgressBarDemo />
        </div>
<div className="component-demo dashboard">
        <h4>Dashboard</h4>
        <DashboardDemo />
        </div>
<div className="component-demo dynamic">
        <h4>Dynamic</h4>
        <DynamicDemo />
        </div>
<div className="component-demo mini-size-progress-bar">
        <h4>Mini Size Progress Bar</h4>
        <MiniSizeProgressBarDemo />
        </div>
<div className="component-demo custom-text-format">
        <h4>Custom Text Format</h4>
        <CustomTextFormatDemo />
        </div>
<div className="component-demo progress-bar">
        <h4>Progress Bar</h4>
        <ProgressBarDemo />
        </div>
<div className="component-demo progress-bar-with-success-segment">
        <h4>Progress Bar With Success Segment</h4>
        <ProgressBarWithSuccessSegmentDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        