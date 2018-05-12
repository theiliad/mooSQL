import React from 'react'

    import BasicDemo from './BasicDemo.js'
import EventDemo from './EventDemo.js'
import GraduatedSliderDemo from './GraduatedSliderDemo.js'
import SliderWithIconDemo from './SliderWithIconDemo.js'
import SliderWithInputNumberDemo from './SliderWithInputNumberDemo.js'
import CustomizeTooltipDemo from './CustomizeTooltipDemo.js'
import VerticalDemo from './VerticalDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

A Slider component for displaying current value and intervals in range.

## When To Use

To input a value in a range.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| autoFocus | get focus when component mounted | boolean | false |
| defaultValue | The default value of slider. When \`range\` is \`false\`, use \`number\`, otherwise, use \`[number, number]\` | number\|number\[] | 0 or [0, 0] |
| disabled | If true, the slider will not be interactable. | boolean | false |
| dots | Whether the thumb can drag over tick only. | boolean | false |
| included | Make effect when \`marks\` not null，\`true\` means containment and \`false\` means coordinative | boolean | true |
| marks | Tick mark of Slider, type of key must be \`number\`, and must in closed interval [min, max] ，each mark can declare its own style. | object | { number: string\|ReactNode } or { number: { style: object, label: string\|ReactNode } } |
| max | The maximum value the slider can slide to | number | 100 |
| min | The minimum value the slider can slide to. | number | 0 |
| range | dual thumb mode | boolean | false |
| step | The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When  \`marks\` no null, \`step\` can be \`null\`. | number\|null | 1 |
| tipFormatter | Slider will pass its value to \`tipFormatter\`, and display its value in Tooltip, and hide Tooltip when return value is null. | Function\|null | IDENTITY |
| value | The value of slider. When \`range\` is \`false\`, use \`number\`, otherwise, use \`[number, number]\` | number\|number\[] |  |
| vertical | If true, the slider will be vertical. | Boolean | false |
| onAfterChange | Fire when  \`onmouseup\` is fired. | Function(value) | NOOP |
| onChange | Callback function that is fired when the user changes the slider's value. | Function(value) | NOOP |

## Methods

| Name | Description |
| ---- | ----------- |
| blur() | remove focus |
| focus() | get focus |
`
const expComponent = () => (
        <div id="component-demos-slider">
            <div className="title-bar">
                <h4>Slider</h4>
                <p>

A Slider component for displaying current value and intervals in range.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo basic">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo event">
        <h4>Event</h4>
        <EventDemo />
        </div>
<div className="component-demo graduated-slider">
        <h4>Graduated Slider</h4>
        <GraduatedSliderDemo />
        </div>
<div className="component-demo slider-with-icon">
        <h4>Slider With Icon</h4>
        <SliderWithIconDemo />
        </div>
<div className="component-demo slider-with-input-number">
        <h4>Slider With Input Number</h4>
        <SliderWithInputNumberDemo />
        </div>
<div className="component-demo customize-tooltip">
        <h4>Customize Tooltip</h4>
        <CustomizeTooltipDemo />
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
                        