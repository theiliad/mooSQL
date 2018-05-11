import React from 'react'

    import ScrollAutomaticallyDemo from './ScrollAutomaticallyDemo.js'
import BasicDemo from './BasicDemo.js'
import VerticalDemo from './VerticalDemo.js'
import FadeInDemo from './FadeInDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

A carousel component. Scales with its container.

## When To Use

- When there is a group of content on the same level.
- When there is insufficient content space, it can be used to save space in the form of a revolving door.
- Commonly used for a group of pictures/cards.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| afterChange | Callback function called after the current index changes | function(current) | - |
| autoplay | Whether to scroll automatically | boolean | \`false\` |
| beforeChange | Callback function called before the current index changes | function(from, to) | - |
| dots | Whether to show the dots at the bottom of the gallery | boolean | \`true\` |
| easing | Transition interpolation function name | string | \`linear\` |
| effect | Transition effect | \`scrollx\` \| \`fade\` | \`scrollx\` |
| vertical | Whether to use a vertical display | boolean | \`false\` |

## Methods

| Name | Description |
| ---- | ----------- |
| goTo(slideNumber) | Change current slide to given slide number |
| next() | Change current slide to next slide |
| prev() | Change current slide to previous slide |

For more info on the parameters, refer to the <https://github.com/akiran/react-slick>
`
const expComponent = () => (
        <div id="component-demos-carousel">
            <div className="title-bar">
                <h4>Carousel</h4>
                <p>

A carousel component. Scales with its container.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo">
        <h4>Scroll Automatically</h4>
        <ScrollAutomaticallyDemo />
        </div>
<div className="component-demo">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo">
        <h4>Vertical</h4>
        <VerticalDemo />
        </div>
<div className="component-demo">
        <h4>Fade In</h4>
        <FadeInDemo />
        </div>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        