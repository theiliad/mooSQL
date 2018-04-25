import React from 'react'

    import BasicDemo from './BasicDemo.js'
import CustomStyleDemo from './CustomStyleDemo.js'
    import { Card } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

\`\`\`BackTop\`\`\` makes it easy to go back to the top of the page.

## When To Use

- When the page content is very long.
- When you need to go back to the top very frequently in order to view the contents.

## API

&gt; The distance to the bottom is set to \`\`\`50px\`\`\` by default, which is overridable.
&gt;
&gt; If you decide to use custom styles, please note the size limit: no more than \`\`\`40px * 40px\`\`\`.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| target | specifies the scrollable area dom node | () =&gt; HTMLElement | () =&gt; window |
| visibilityHeight | the \`\`\`BackTop\`\`\` button will not show until the scroll height reaches this value | number | 400 |
| onClick | a callback function, which can be executed when you click the button | Function | - |
`
const expComponent = () => (
        <div>
            <h4>Back Top</h4>

            <Card bordered={false}>
                        <BasicDemo />
        <CustomStyleDemo />

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        