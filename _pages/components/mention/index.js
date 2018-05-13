import React from 'react'

    import AsynchronousLoadingDemo from './AsynchronousLoadingDemo.js'
import BasicDemo from './BasicDemo.js'
import IconImageDemo from './IconImageDemo.js'
import ControlledDemo from './ControlledDemo.js'
import WithFormDemo from './WithFormDemo.js'
import CustomizeSuggestionDemo from './CustomizeSuggestionDemo.js'
import MultilinesModeDemo from './MultilinesModeDemo.js'
import CustomizeTriggerTokenDemo from './CustomizeTriggerTokenDemo.js'
import PlacementDemo from './PlacementDemo.js'
import DisabledOrReadOnlyDemo from './DisabledOrReadOnlyDemo.js'
import SuggestionContainerDemo from './SuggestionContainerDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Mention component.

## When To Use

When need to mention someone or something.

## API

\`\`\`jsx
<Mention
  onChange={onChange}
  suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
/>
\`\`\`

### Mention API

| API | Description | Type |
| --- | ----------- | ---- |
| getMentions | get mentioned people in current contentState | Function(ContentState: contentState): string\[] |
| toContentState | convert string to ContentState | Function(value: string): ContentState |
| toString | convert ContentState to string | Function(contentState: ContentState): string |

### Mention

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| autoFocus | get focus when component mounted | boolean | false |
| defaultValue | default value | ContentState, you can use \`Mention.toContentState\` to convert text to \`ContentState\` | null |
| disabled | Tell if the input is disabled. | boolean | false |
| getSuggestionContainer | rendered to the root of the menu. Default rendered to the body dom. If gets any problem of the menu while scrolling. Try to make the root the dom scrolled, and make it position relative. | function | () => document.body |
| loading | loading mode | boolean | false |
| multiLines | multilines mode | boolean | false |
| notFoundContent | suggestion when suggestions empty | string | '无匹配结果，轻敲空格完成输入' |
| placeholder | placeholder of input | string | null |
| placement | The position of the suggestion relative to the target, which can be one of \`top\` and \`bottom\` | string | 'bottom'. |
| prefix | character which will trigger Mention to show mention list | string or Array<string> | '@' |
| readOnly | Tell if the input is readonly. | boolean | false |
| suggestions | suggestion content | Array&lt;string\|Mention.Nav> | \[] |
| suggestionStyle | style of suggestion container | object | {} |
| value | core state of mention | ContentState | null |
| onBlur | Callback function called when mention component blur | function(e) | null |
| onChange | Callback function called when content of input changes | function(contentState: ContentState) | null |
| onFocus | Callback function called when mention component get focus | functione) | null |
| onSearchChange | Callback function called when search content changes | function(value:string, trigger: string) | \[] |
| onSelect | Callback function called when select from suggestions | function(suggestion: string, data?: any) | null |

### Mention methods

| Name | Description |
| ---- | ----------- |
| blur() | remove focus |
| focus() | get focus |

### Nav

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| children | suggestion content | object | {} |
| value | value of suggestion，the value will insert into input filed while selected | string | "" |
`
const expComponent = () => (
        <div id="component-demos-mention">
            <div className="title-bar">
                <h4>Mention</h4>
                <p>

Mention component.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo asynchronous-loading">
        <h4>Asynchronous Loading</h4>
        <AsynchronousLoadingDemo />
        </div>
<div className="component-demo basic">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo icon-image">
        <h4>Icon Image</h4>
        <IconImageDemo />
        </div>
<div className="component-demo controlled">
        <h4>Controlled</h4>
        <ControlledDemo />
        </div>
<div className="component-demo with-form">
        <h4>With Form</h4>
        <WithFormDemo />
        </div>
<div className="component-demo customize-suggestion">
        <h4>Customize Suggestion</h4>
        <CustomizeSuggestionDemo />
        </div>
<div className="component-demo multilines-mode">
        <h4>Multilines Mode</h4>
        <MultilinesModeDemo />
        </div>
<div className="component-demo customize-trigger-token">
        <h4>Customize Trigger Token</h4>
        <CustomizeTriggerTokenDemo />
        </div>
<div className="component-demo placement">
        <h4>Placement</h4>
        <PlacementDemo />
        </div>
<div className="component-demo disabled-or-read-only">
        <h4>Disabled Or Read Only</h4>
        <DisabledOrReadOnlyDemo />
        </div>
<div className="component-demo suggestion-container">
        <h4>Suggestion Container</h4>
        <SuggestionContainerDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        