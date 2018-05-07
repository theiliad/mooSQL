import React from 'react'

    import PrePostTabDemo from './PrePostTabDemo.js'
import BasicUsageDemo from './BasicUsageDemo.js'
import AutosizingTheHeightToFitTheContentDemo from './AutosizingTheHeightToFitTheContentDemo.js'
import InputGroupDemo from './InputGroupDemo.js'
import PrefixAndSuffixDemo from './PrefixAndSuffixDemo.js'
import SearchBoxDemo from './SearchBoxDemo.js'
import ThreeSizesOfInputDemo from './ThreeSizesOfInputDemo.js'
import TextAreaDemo from './TextAreaDemo.js'
import FormatTooltipInputDemo from './FormatTooltipInputDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

A basic widget for getting the user input is a text field.
Keyboard and mouse can be used for providing or changing data.

## When To Use

- A user input in a form field is needed.
- A search input is required.

## API

### Input

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| addonAfter | The label text displayed after (on the right side of) the input field. | string|ReactNode |  |
| addonBefore | The label text displayed before (on the left side of) the input field. | string|ReactNode |  |
| defaultValue | The initial input content | string |  |
| disabled | Whether the input is disabled. | boolean | false |
| id | The ID for input | string |  |
| prefix | The prefix icon for the Input. | string|ReactNode |  |
| size | The size of the input box. Note: in the context of a form, the \`\`\`large\`\`\` size is used. Available: \`\`\`large\`\`\` \`\`\`default\`\`\` \`\`\`small\`\`\` | string | \`\`\`default\`\`\` |
| suffix | The suffix icon for the Input. | string|ReactNode |  |
| type | The type of input, see: <a href="https://developer.mozilla.org/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types">MDN</a>(use \`\`\`Input.TextArea\`\`\` instead of \`\`\`type=&quot;textarea&quot;\`\`\`) | string | \`\`\`text\`\`\` |
| value | The input content value | string |  |
| onPressEnter | The callback function that is triggered when Enter key is pressed. | function(e) |  |

&gt; When \`\`\`Input\`\`\` is used in a \`\`\`Form.Item\`\`\` context, if the \`\`\`Form.Item\`\`\` has the \`\`\`id\`\`\` and \`\`\`options\`\`\` props defined
&gt; then \`\`\`value\`\`\`, \`\`\`defaultValue\`\`\`, and \`\`\`id\`\`\` props of \`\`\`Input\`\`\` are automatically set.

The rest of the props of Input are exactly the same as the original <a href="https://facebook.github.io/react/docs/events.html#supported-events">input</a>.

### Input.TextArea

&gt; If you are using \`\`\`antd@&lt;2.12\`\`\`, please use \`\`\`Input[type=textarea]\`\`\`.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| autosize | Height autosize feature, can be set to \`\`\`true|false\`\`\` or an object \`\`\`{ minRows: 2, maxRows: 6 }\`\`\` | boolean|object | false |
| defaultValue | The initial input content | string |  |
| value | The input content value | string |  |
| onPressEnter | The callback function that is triggered when Enter key is pressed. | function(e) |  |

The rest of the props of \`\`\`Input.TextArea\`\`\` are the same as the original <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea">textarea</a>.

#### Input.Search

\`\`\`Added in 2.5.0\`\`\`

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| enterButton | to show a enter button after input | boolean|ReactNode | false |
| onSearch | The callback function that is triggered when you click on the search-icon or press Enter key. | function(value) |  |

Supports all props of \`\`\`Input\`\`\`.

#### Input.Group

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| compact | Whether use compact style | boolean | false |
| size | The size of \`\`\`Input.Group\`\`\` specifies the size of the included \`\`\`Input\`\`\` fields. Available: \`\`\`large\`\`\` \`\`\`default\`\`\` \`\`\`small\`\`\` | string | \`\`\`default\`\`\` |

\`\`\`html &lt;Input.Group&gt; &lt;Input /&gt; &lt;Input /&gt; &lt;/Input.Group&gt;\`\`\`
`
const expComponent = () => (
        <div>
            <h4>Input</h4>
            <p>

A basic widget for getting the user input is a text field.
Keyboard and mouse can be used for providing or changing data.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Pre Post Tab" bordered={true}><PrePostTabDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Basic Usage" bordered={true}><BasicUsageDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Autosizing The Height To Fit The Content" bordered={true}><AutosizingTheHeightToFitTheContentDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Input Group" bordered={true}><InputGroupDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Prefix And Suffix" bordered={true}><PrefixAndSuffixDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Search Box" bordered={true}><SearchBoxDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Three Sizes Of Input" bordered={true}><ThreeSizesOfInputDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Text Area" bordered={true}><TextAreaDemo /></Card>
        </Col>
</Row>
<Row gutter={30}>
        <Col span={12}>
        <Card title="Format Tooltip Input" bordered={true}><FormatTooltipInputDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        