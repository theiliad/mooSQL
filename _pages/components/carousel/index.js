import React from 'react'

    import ScrollAutomaticallyDemo from './ScrollAutomaticallyDemo.js'
import BasicDemo from './BasicDemo.js'
import FadeInDemo from './FadeInDemo.js'
import VerticalDemo from './VerticalDemo.js'
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
| autoplay | Whether to scroll automatically | boolean | \`\`\`false\`\`\` |
| beforeChange | Callback function called before the current index changes | function(from, to) | - |
| dots | Whether to show the dots at the bottom of the gallery | boolean | \`\`\`true\`\`\` |
| easing | Transition interpolation function name | string | \`\`\`linear\`\`\` |
| effect | Transition effect | \`\`\`scrollx\`\`\` | \`\`\`fade\`\`\` | \`\`\`scrollx\`\`\` |
| vertical | Whether to use a vertical display | boolean | \`\`\`false\`\`\` |

## Methods

| Name | Description |
| ---- | ----------- |
| goTo(slideNumber) | Change current slide to given slide number |
| next() | Change current slide to next slide |
| prev() | Change current slide to previous slide |

For more info on the parameters, refer to the <a href="https://github.com/akiran/react-slick">https://github.com/akiran/react-slick</a>
`
const expComponent = () => (
        <div>
            <h4>Carousel</h4>
            <p>

A carousel component. Scales with its container.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Scroll Automatically" bordered={true}><ScrollAutomaticallyDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Basic" bordered={true}><BasicDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Fade In" bordered={true}><FadeInDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Vertical" bordered={true}><VerticalDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        