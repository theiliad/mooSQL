import React from 'react'

    import DynamicCircularProgressBarDemo from './DynamicCircularProgressBarDemo.js'
import MiniSizeCircularProgressBarDemo from './MiniSizeCircularProgressBarDemo.js'
import DashboardDemo from './DashboardDemo.js'
import DynamicDemo from './DynamicDemo.js'
import CircularProgressBarDemo from './CircularProgressBarDemo.js'
import CustomTextFormatDemo from './CustomTextFormatDemo.js'
import MiniSizeProgressBarDemo from './MiniSizeProgressBarDemo.js'
import ProgressBarWithSuccessSegmentDemo from './ProgressBarWithSuccessSegmentDemo.js'
import ProgressBarDemo from './ProgressBarDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Display the current progress of an operation flow.

## When To Use

If it will take a long time to complete an operation, you can use \`\`\`Progress\`\`\` to show the current progress and status.

- When an operation will interrupt the current interface, or it needs to run in the background for more than 2 seconds.
- When you need to display the completion percentage of an operation.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| format | template function of the content | function(percent) | \`\`\`percent =&gt; percent + '%'\`\`\` |
| gapDegree \`\`\`(type=circle)\`\`\` | the gap degree of half circle, 0 ~ 360 | number | 0 |
| gapPosition \`\`\`(type=circle)\`\`\` | the gap position, options: \`\`\`top\`\`\` \`\`\`bottom\`\`\` \`\`\`left\`\`\` \`\`\`right\`\`\` | string | \`\`\`top\`\`\` |
| percent | to set the completion percentage | number | 0 |
| showInfo | whether to display the progress value and the status icon | boolean | true |
| status | to set the status of the Progress, options: \`\`\`success\`\`\` \`\`\`exception\`\`\` \`\`\`active\`\`\` | string | - |
| strokeWidth \`\`\`(type=line)\`\`\` | to set the width of the progress bar, unit: \`\`\`px\`\`\` | number | 10 |
| strokeWidth \`\`\`(type=circle)\`\`\` | to set the width of the circular progress bar, unit: percentage of the canvas width | number | 6 |
| type | to set the type, options: \`\`\`line\`\`\` \`\`\`circle\`\`\` \`\`\`dashboard\`\`\` | string | \`\`\`line\`\`\` |
| width \`\`\`(type=circle)\`\`\` | to set the canvas width of the circular progress bar, unit: \`\`\`px\`\`\` | number | 132 |
| successPercent | segmented success percent, works when \`\`\`type=&quot;line&quot;\`\`\` | number | 0 |
`
const expComponent = () => (
        <div>
            <h4>Progress</h4>
            <p>

Display the current progress of an operation flow.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Dynamic Circular Progress Bar" bordered={true}><DynamicCircularProgressBarDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Mini Size Circular Progress Bar" bordered={true}><MiniSizeCircularProgressBarDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Dashboard" bordered={true}><DashboardDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Dynamic" bordered={true}><DynamicDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Circular Progress Bar" bordered={true}><CircularProgressBarDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Custom Text Format" bordered={true}><CustomTextFormatDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Mini Size Progress Bar" bordered={true}><MiniSizeProgressBarDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Progress Bar With Success Segment" bordered={true}><ProgressBarWithSuccessSegmentDemo /></Card>
        </Col>
</Row>
<Row gutter={30}>
        <Col span={12}>
        <Card title="Progress Bar" bordered={true}><ProgressBarDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        