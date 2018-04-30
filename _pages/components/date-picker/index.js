import React from 'react'

    import CustomizedDateRenderingDemo from './CustomizedDateRenderingDemo.js'
import BasicDemo from './BasicDemo.js'
import DisabledDemo from './DisabledDemo.js'
import DisabledDateTimeDemo from './DisabledDateTimeDemo.js'
import ExtraFooterDemo from './ExtraFooterDemo.js'
import DateFormatDemo from './DateFormatDemo.js'
import ControlledPanelsDemo from './ControlledPanelsDemo.js'
import PresettedRangesDemo from './PresettedRangesDemo.js'
import ThreeSizesDemo from './ThreeSizesDemo.js'
import CustomizedRangePickerDemo from './CustomizedRangePickerDemo.js'
import ChooseTimeDemo from './ChooseTimeDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

To select or input a date.

## When To Use

By clicking the input box, you can select a date from a popup calendar.

## API

There are four kinds of picker:

- DatePicker
- MonthPicker
- RangePicker
- WeekPicker

<strong>Note:</strong> Part of locale of DatePicker, MonthPicker, RangePicker, WeekPicker is read from value. So, please set the locale of moment correctly.

\`\`\`jsx // The default locale is en-US, if you want to use other locale, just set locale in entry file globaly. // import moment from 'moment'; // import 'moment/locale/zh-cn'; // moment.locale('zh-cn'); &lt;DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} /&gt;\`\`\`

### Common API

The following APIs are shared by DatePicker, MonthPicker, RangePicker, WeekPicker.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| allowClear | Whether to show clear button | boolean | true |
| autoFocus | get focus when component mounted | boolean | false |
| className | picker className | string | '' |
| dateRender | custom rendering function for date cells | function(currentDate: moment, today: moment) =&gt; React.ReactNode | - |
| disabled | determine whether the DatePicker is disabled | boolean | false |
| disabledDate | specify the date that cannot be selected | (currentDate: moment) =&gt; boolean | - |
| getCalendarContainer | to set the container of the floating layer, while the default is to create a \`\`\`div\`\`\` element in \`\`\`body\`\`\` | function(trigger) | - |
| locale | localization configuration | object | <a href="https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json">default</a> |
| open | open state of picker | boolean | - |
| placeholder | placeholder of date input | string|RangePicker[] | - |
| popupStyle | to customize the style of the popup calendar | object | {} |
| dropdownClassName | to customize the className of the popup calendar  | string | - |
| size | determine the size of the input box, the height of \`\`\`large\`\`\` and \`\`\`small\`\`\`, are 40px and 24px respectively, while default size is 32px | string | - |
| style | to customize the style of the input box | object | {} |
| onOpenChange | a callback function, can be executed whether the popup calendar is popped up or closed | function(status) | - |

### Common Methods

| Name | Description |
| ---- | ----------- |
| blur() | remove focus |
| focus() | get focus |

### DatePicker

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| defaultValue | to set default date | <a href="http://momentjs.com/">moment</a> | - |
| disabledTime | to specify the time that cannot be selected | function(date) | - |
| format | to set the date format, refer to <a href="http://momentjs.com/">moment.js</a> | string | &quot;YYYY-MM-DD&quot; |
| renderExtraFooter | render extra footer in panel | () =&gt; React.ReactNode | - |
| showTime | to provide an additional time selection | object|boolean | <a href="/components/time-picker/#API">TimePicker Options</a> |
| showTime.defaultValue | to set default time of selected date, <a href="https://ant.design/components/date-picker/#components-date-picker-demo-disabled-date">demo</a> | <a href="http://momentjs.com/">moment</a> | moment() |
| showToday | whether to show &quot;Today&quot; button | boolean | true |
| value | to set date | <a href="http://momentjs.com/">moment</a> | - |
| onCalendarChange | a callback function, can be executed when the start time or the end time of the range is changing | function(dates: [moment, moment], dateStrings: [string, string]) | 无 |
| onChange | a callback function, can be executed when the selected time is changing | function(date: moment, dateString: string) | - |
| onOk | callback when click ok button | function() | - |

### MonthPicker

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| defaultValue | to set default date | <a href="http://momentjs.com/">moment</a> | - |
| format | to set the date format, refer to <a href="http://momentjs.com/">moment.js</a> | string | &quot;YYYY-MM&quot; |
| monthCellContentRender | Custom month cell content render method | function(date, locale): ReactNode | - |
| renderExtraFooter | render extra footer in panel | () =&gt; React.ReactNode | - |
| value | to set date | <a href="http://momentjs.com/">moment</a> | - |
| onChange | a callback function, can be executed when the selected time is changing | function(date: moment, dateString: string) | - |

### WeekPicker

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| defaultValue | to set default date | <a href="http://momentjs.com/">moment</a> | - |
| format | to set the date format, refer to <a href="http://momentjs.com/">moment.js</a> | string | &quot;YYYY-wo&quot; |
| value | to set date | <a href="http://momentjs.com/">moment</a> | - |
| onChange | a callback function, can be executed when the selected time is changing | function(date: moment, dateString: string) | - |

### RangePicker

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| defaultValue | to set default date | [<a href="http://momentjs.com/">moment</a>, <a href="http://momentjs.com/">moment</a>] | - |
| disabledTime | to specify the time that cannot be selected | function(dates: [moment, moment], partial: \`\`\`'start'|'end'\`\`\`) | - |
| format | to set the date format | string | &quot;YYYY-MM-DD HH:mm:ss&quot; |
| ranges | preseted ranges for quick selection | { [range: string]: <a href="http://momentjs.com/">moment</a>[] } | () =&gt; { [range: string]: <a href="http://momentjs.com/">moment</a>[] } | - |
| renderExtraFooter | render extra footer in panel | () =&gt; React.ReactNode | - |
| showTime | to provide an additional time selection | object|boolean | <a href="/components/time-picker/#API">TimePicker Options</a> |
| showTime.defaultValue | to set default time of selected date, <a href="https://ant.design/components/date-picker/#components-date-picker-demo-disabled-date">demo</a> | <a href="http://momentjs.com/">moment</a>[] | [moment(), moment()] |
| value | to set date | [<a href="http://momentjs.com/">moment</a>, <a href="http://momentjs.com/">moment</a>] | - |
| onChange | a callback function, can be executed when the selected time is changing | function(dates: [moment, moment], dateStrings: [string, string]) | - |
| onOk | callback when click ok button | function() | - |

&lt;style&gt;
.code-box-demo .ant-calendar-picker {
margin: 0 8px 12px 0;
}
&lt;/style&gt;
`
const expComponent = () => (
        <div>
            <h4>Date Picker</h4>
            <p>

To select or input a date.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Customized Date Rendering" bordered={true}><CustomizedDateRenderingDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Basic" bordered={true}><BasicDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Disabled" bordered={true}><DisabledDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Disabled Date Time" bordered={true}><DisabledDateTimeDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Extra Footer" bordered={true}><ExtraFooterDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Date Format" bordered={true}><DateFormatDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Controlled Panels" bordered={true}><ControlledPanelsDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Presetted Ranges" bordered={true}><PresettedRangesDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Three Sizes" bordered={true}><ThreeSizesDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Customized Range Picker" bordered={true}><CustomizedRangePickerDemo /></Card>
        </Col>
</Row>
<Row gutter={30}>
        <Col span={12}>
        <Card title="Choose Time" bordered={true}><ChooseTimeDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        