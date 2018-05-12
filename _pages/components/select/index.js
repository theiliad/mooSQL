import React from 'react'

    import AutomaticTokenizationDemo from './AutomaticTokenizationDemo.js'
import BasicUsageDemo from './BasicUsageDemo.js'
import CoordinateDemo from './CoordinateDemo.js'
import AutomaticCompletionDemo from './AutomaticCompletionDemo.js'
import OptionGroupDemo from './OptionGroupDemo.js'
import GetValueOfSelectedItemDemo from './GetValueOfSelectedItemDemo.js'
import MultipleSelectionDemo from './MultipleSelectionDemo.js'
import SearchAndSelectUsersDemo from './SearchAndSelectUsersDemo.js'
import SizesDemo from './SizesDemo.js'
import TagsDemo from './TagsDemo.js'
import SearchBoxDemo from './SearchBoxDemo.js'
import SelectWithSearchFieldDemo from './SelectWithSearchFieldDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Select component to select value from options.

## When To Use

- A dropdown menu for displaying choices - an elegant alternative to the native \`<select>\` element.
- Utilizing [Radio](/components/radio/) is recommended when there are fewer total options (less than 5).

## API

\`\`\`html
<Select>
  <Option value="lucy">lucy</Option>
</Select>
\`\`\`

### Select props

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| allowClear | Show clear button. | boolean | false |
| autoFocus | Get focus by default | boolean | false |
| defaultActiveFirstOption | Whether active first option by default | boolean | true |
| defaultValue | Initial selected option. | string\|number\|string\[]\|number\[] | - |
| disabled | Whether disabled select | boolean | false |
| dropdownClassName | className of dropdown menu | string | - |
| dropdownMatchSelectWidth | Whether dropdown's with is same with select. | boolean | true |
| dropdownStyle | style of dropdown menu | object | - |
| filterOption | If true, filter options by input, if function, filter options against it. The function will receive two arguments, \`inputValue\` and \`option\`, if the function returns \`true\`, the option will be included in the filtered set; Otherwise, it will be excluded. | boolean or function(inputValue, option) | true |
| firstActiveValue | Value of action option by default | string\|string\[] | - |
| getPopupContainer | Parent Node which the selector should be rendered to. Default to \`body\`. When position issues happen, try to modify it into scrollable content and position it relative. [Example](https://codesandbox.io/s/4j168r7jw0) | function(triggerNode) | () => document.body |
| labelInValue | whether to embed label in value, turn the format of value from \`string\` to \`{key: string, label: ReactNode}\` | boolean | false |
| maxTagCount | Max tag count to show | number | - |
| maxTagPlaceholder | Placeholder for not showing tags | ReactNode/function(omittedValues) | - |
| mode | Set mode of Select (Support after 2.9) | 'default' \| 'multiple' \| 'tags' \| 'combobox' | 'default' |
| notFoundContent | Specify content to show when no result matches.. | string | 'Not Found' |
| optionFilterProp | Which prop value of option will be used for filter if filterOption is true | string | value |
| optionLabelProp | Which prop value of option will render as content of select. | string | \`value\` for \`combobox\`, \`children\` for other modes |
| placeholder | Placeholder of select | string\|ReactNode | - |
| showSearch | Whether show search input in single mode. | boolean | false |
| showArrow | Whether to show the drop-down arrow | boolean |  true |
| size | Size of Select input. \`default\` \`large\` \`small\` | string | default |
| tokenSeparators | Separator used to tokenize on tag/multiple mode | string\[] |  |
| value | Current selected option. | string\|number\|string\[]\|number\[] | - |
| onBlur | Called when blur | function | - |
| onChange | Called when select an option or input value change, or value of input is changed in combobox mode | function(value, option:Option/Array<Option\>) | - |
| onDeselect | Called when a option is deselected, the params are option's value (or key) . only called for multiple or tags, effective in multiple or tags mode only. | function(value, option:Option) | - |
| onFocus | Called when focus | function | - |
| onInputKeyDown | Called when key pressed | function | - |
| onMouseEnter | Called when mouse enter | function | - |
| onMouseLeave | Called when mouse leave | function | - |
| onPopupScroll | Called when dropdown scrolls | function | - |
| onSearch | Callback function that is fired when input changed. | function(value: string) |  |
| onSelect | Called when a option is selected, the params are option's value (or key) and option instance. | function(value, option:Option) | - |

### Select Methods

| Name | Description |
| ---- | ----------- |
| blur() | Remove focus |
| focus() | Get focus |

### Option props

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| disabled | Disable this option | boolean | false |
| key | Same usage as \`value\`. If React request you to set this property, you can set it to value of option, and then omit value property. | string |  |
| title | \`title\` of Select after select this Option | string | - |
| value | default to filter with this property | string\|number | - |

### OptGroup props

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| key |  | string | - |
| label | Group label | string\|React.Element | - |
`
const expComponent = () => (
        <div id="component-demos-select">
            <div className="title-bar">
                <h4>Select</h4>
                <p>

Select component to select value from options.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo automatic-tokenization">
        <h4>Automatic Tokenization</h4>
        <AutomaticTokenizationDemo />
        </div>
<div className="component-demo basic-usage">
        <h4>Basic Usage</h4>
        <BasicUsageDemo />
        </div>
<div className="component-demo coordinate">
        <h4>Coordinate</h4>
        <CoordinateDemo />
        </div>
<div className="component-demo automatic-completion">
        <h4>Automatic Completion</h4>
        <AutomaticCompletionDemo />
        </div>
<div className="component-demo option-group">
        <h4>Option Group</h4>
        <OptionGroupDemo />
        </div>
<div className="component-demo get-value-of-selected-item">
        <h4>Get Value Of Selected Item</h4>
        <GetValueOfSelectedItemDemo />
        </div>
<div className="component-demo multiple-selection">
        <h4>Multiple Selection</h4>
        <MultipleSelectionDemo />
        </div>
<div className="component-demo search-and-select-users">
        <h4>Search And Select Users</h4>
        <SearchAndSelectUsersDemo />
        </div>
<div className="component-demo sizes">
        <h4>Sizes</h4>
        <SizesDemo />
        </div>
<div className="component-demo tags">
        <h4>Tags</h4>
        <TagsDemo />
        </div>
<div className="component-demo search-box">
        <h4>Search Box</h4>
        <SearchBoxDemo />
        </div>
<div className="component-demo select-with-search-field">
        <h4>Select With Search Field</h4>
        <SelectWithSearchFieldDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        