import React from 'react'

    import PrePostTabDemo from './PrePostTabDemo.js'
import AutosizingTheHeightToFitTheContentDemo from './AutosizingTheHeightToFitTheContentDemo.js'
import BasicUsageDemo from './BasicUsageDemo.js'
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
| addonAfter | The label text displayed after (on the right side of) the input field. | string\|ReactNode |  |
| addonBefore | The label text displayed before (on the left side of) the input field. | string\|ReactNode |  |
| defaultValue | The initial input content | string |  |
| disabled | Whether the input is disabled. | boolean | false |
| id | The ID for input | string |  |
| prefix | The prefix icon for the Input. | string\|ReactNode |  |
| size | The size of the input box. Note: in the context of a form, the \`large\` size is used. Available: \`large\` \`default\` \`small\` | string | \`default\` |
| suffix | The suffix icon for the Input. | string\|ReactNode |  |
| type | The type of input, see: [MDN](https://developer.mozilla.org/docs/Web/HTML/Element/input#Form_<input>_types)(use \`Input.TextArea\` instead of \`type="textarea"\`) | string | \`text\` |
| value | The input content value | string |  |
| onPressEnter | The callback function that is triggered when Enter key is pressed. | function(e) |  |

> When \`Input\` is used in a \`Form.Item\` context, if the \`Form.Item\` has the \`id\` and \`options\` props defined
> then \`value\`, \`defaultValue\`, and \`id\` props of \`Input\` are automatically set.

The rest of the props of Input are exactly the same as the original [input](https://facebook.github.io/react/docs/events.html#supported-events).

### Input.TextArea

> If you are using \`antd@<2.12\`, please use \`Input[type=textarea]\`.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| autosize | Height autosize feature, can be set to \`true|false\` or an object \`{ minRows: 2, maxRows: 6 }\` | boolean\|object | false |
| defaultValue | The initial input content | string |  |
| value | The input content value | string |  |
| onPressEnter | The callback function that is triggered when Enter key is pressed. | function(e) |  |

The rest of the props of \`Input.TextArea\` are the same as the original [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).

#### Input.Search

\`Added in 2.5.0\`

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| enterButton | to show a enter button after input | boolean\|ReactNode | false |
| onSearch | The callback function that is triggered when you click on the search-icon or press Enter key. | function(value) |  |

Supports all props of \`Input\`.

#### Input.Group

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| compact | Whether use compact style | boolean | false |
| size | The size of \`Input.Group\` specifies the size of the included \`Input\` fields. Available: \`large\` \`default\` \`small\` | string | \`default\` |

\`\`\`html
<Input.Group>
  <Input />
  <Input />
</Input.Group>
\`\`\`
`
const expComponent = () => (
        <div id="component-demos-input">
            <div className="title-bar">
                <h4>Input</h4>
                <p>

A basic widget for getting the user input is a text field.
Keyboard and mouse can be used for providing or changing data.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo pre-post-tab">
        <h4>Pre Post Tab</h4>
        <PrePostTabDemo />
        </div>
<div className="component-demo autosizing-the-height-to-fit-the-content">
        <h4>Autosizing The Height To Fit The Content</h4>
        <AutosizingTheHeightToFitTheContentDemo />
        </div>
<div className="component-demo basic-usage">
        <h4>Basic Usage</h4>
        <BasicUsageDemo />
        </div>
<div className="component-demo input-group">
        <h4>Input Group</h4>
        <InputGroupDemo />
        </div>
<div className="component-demo prefix-and-suffix">
        <h4>Prefix And Suffix</h4>
        <PrefixAndSuffixDemo />
        </div>
<div className="component-demo search-box">
        <h4>Search Box</h4>
        <SearchBoxDemo />
        </div>
<div className="component-demo three-sizes-of-input">
        <h4>Three Sizes Of Input</h4>
        <ThreeSizesOfInputDemo />
        </div>
<div className="component-demo text-area">
        <h4>Text Area</h4>
        <TextAreaDemo />
        </div>
<div className="component-demo format-tooltip-input">
        <h4>Format Tooltip Input</h4>
        <FormatTooltipInputDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        