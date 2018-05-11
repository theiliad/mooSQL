import React from 'react'

    import CustomizedDotStyleDemo from './CustomizedDotStyleDemo.js'
import ErrorStatusDemo from './ErrorStatusDemo.js'
import DotStyleDemo from './DotStyleDemo.js'
import WithIconDemo from './WithIconDemo.js'
import MiniVersionDemo from './MiniVersionDemo.js'
import SwitchStepDemo from './SwitchStepDemo.js'
import BasicDemo from './BasicDemo.js'
import VerticalMiniVersionDemo from './VerticalMiniVersionDemo.js'
import VerticalDemo from './VerticalDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

\`Steps\` is a navigation bar that guides users through the steps of a task.

## When To Use

When the task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier.

## API

\`\`\`jsx
<Steps>
  <Step title="first step" />
  <Step title="second step" />
  <Step title="third step" />
</Steps>
\`\`\`

### Steps

The whole of the step bar.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| current | to set the current step, counting from 0. You can overwrite this state by using \`status\` of \`Step\` | number | 0 |
| direction | to specify the direction of the step bar, \`horizontal\` and \`vertical\` are currently supported | string | \`horizontal\` |
| progressDot | Steps with progress dot style, customize the progress dot by setting it to a function | Boolean or (iconDot, {index, status, title, description}) => ReactNode | false |
| size | to specify the size of the step bar, \`default\` and \`small\` are currently supported | string | \`default\` |
| status | to specify the status of current step, can be set to one of the following values: \`wait\` \`process\` \`finish\` \`error\` | string | \`process\` |

### Steps.Step

A single step in the step bar.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| description | description of the step, optional property | string\|ReactNode | - |
| icon | icon of the step, optional property | string\|ReactNode | - |
| status | to specify the status. It will be automatically set by \`current\` of \`Steps\` if not configured. Optional values are: \`wait\` \`process\` \`finish\` \`error\` | string | \`wait\` |
| title | title of the step | string\|ReactNode | - |
`
const expComponent = () => (
        <div id="component-demos-steps">
            <div className="title-bar">
                <h4>Steps</h4>
                <p>

\`Steps\` is a navigation bar that guides users through the steps of a task.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo customized-dot-style">
        <h4>Customized Dot Style</h4>
        <CustomizedDotStyleDemo />
        </div>
<div className="component-demo error-status">
        <h4>Error Status</h4>
        <ErrorStatusDemo />
        </div>
<div className="component-demo dot-style">
        <h4>Dot Style</h4>
        <DotStyleDemo />
        </div>
<div className="component-demo with-icon">
        <h4>With Icon</h4>
        <WithIconDemo />
        </div>
<div className="component-demo mini-version">
        <h4>Mini Version</h4>
        <MiniVersionDemo />
        </div>
<div className="component-demo switch-step">
        <h4>Switch Step</h4>
        <SwitchStepDemo />
        </div>
<div className="component-demo basic">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo vertical-mini-version">
        <h4>Vertical Mini Version</h4>
        <VerticalMiniVersionDemo />
        </div>
<div className="component-demo vertical">
        <h4>Vertical</h4>
        <VerticalDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        