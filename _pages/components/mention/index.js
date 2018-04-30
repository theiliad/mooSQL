import React from 'react'

    import AsynchronousLoadingDemo from './AsynchronousLoadingDemo.js'
import IconImageDemo from './IconImageDemo.js'
import ControlledDemo from './ControlledDemo.js'
import BasicDemo from './BasicDemo.js'
import WithFormDemo from './WithFormDemo.js'
import CustomizeSuggestionDemo from './CustomizeSuggestionDemo.js'
import MultilinesModeDemo from './MultilinesModeDemo.js'
import CustomizeTriggerTokenDemo from './CustomizeTriggerTokenDemo.js'
import PlacementDemo from './PlacementDemo.js'
import SuggestionContainerDemo from './SuggestionContainerDemo.js'
import DisabledOrReadOnlyDemo from './DisabledOrReadOnlyDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Mention component.

## When To Use

When need to mention someone or something.

## API

\`\`\`jsx &lt;Mention onChange={onChange} suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']} /&gt;\`\`\`

### Mention API

| API | Description | Type |
| --- | ----------- | ---- |
| getMentions | get mentioned people in current contentState | Function(ContentState: contentState): string[] |
| toContentState | convert string to ContentState | Function(value: string): ContentState |
| toString | convert ContentState to string | Function(contentState: ContentState): string |

### Mention

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| autoFocus | get focus when component mounted | boolean | false |
| defaultValue | default value | ContentState, you can use \`\`\`Mention.toContentState\`\`\` to convert text to \`\`\`ContentState\`\`\` | null |
| disabled | Tell if the input is disabled. | boolean | false |
| getSuggestionContainer | rendered to the root of the menu. Default rendered to the body dom. If gets any problem of the menu while scrolling. Try to make the root the dom scrolled, and make it position relative. | function | () =&gt; document.body |
| loading | loading mode | boolean | false |
| multiLines | multilines mode | boolean | false |
| notFoundContent | suggestion when suggestions empty | string | '无匹配结果，轻敲空格完成输入' |
| placeholder | placeholder of input | string | null |
| placement | The position of the suggestion relative to the target, which can be one of \`\`\`top\`\`\` and \`\`\`bottom\`\`\` | string | 'bottom'. |
| prefix | character which will trigger Mention to show mention list | string or Array&lt;string&gt; | '@' |
| readOnly | Tell if the input is readonly. | boolean | false |
| suggestions | suggestion content | Array&lt;string|Mention.Nav&gt; | [] |
| suggestionStyle | style of suggestion container | object | {} |
| value | core state of mention | ContentState | null |
| onBlur | Callback function called when mention component blur | function(e) | null |
| onChange | Callback function called when content of input changes | function(contentState: ContentState) | null |
| onFocus | Callback function called when mention component get focus | functione) | null |
| onSearchChange | Callback function called when search content changes | function(value:string, trigger: string) | [] |
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
| value | value of suggestion，the value will insert into input filed while selected | string | &quot;&quot; |
`
const expComponent = () => (
        <div>
            <h4>Mention</h4>
            <p>

Mention component.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Asynchronous Loading" bordered={true}><AsynchronousLoadingDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Icon Image" bordered={true}><IconImageDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Controlled" bordered={true}><ControlledDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Basic" bordered={true}><BasicDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="With Form" bordered={true}><WithFormDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Customize Suggestion" bordered={true}><CustomizeSuggestionDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Multilines Mode" bordered={true}><MultilinesModeDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Customize Trigger Token" bordered={true}><CustomizeTriggerTokenDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Placement" bordered={true}><PlacementDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Suggestion Container" bordered={true}><SuggestionContainerDemo /></Card>
        </Col>
</Row>
<Row gutter={30}>
        <Col span={12}>
        <Card title="Disabled Or Read Only" bordered={true}><DisabledOrReadOnlyDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        