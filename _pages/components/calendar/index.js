import React from 'react'

    import NoticeCalendarDemo from './NoticeCalendarDemo.js'
import BasicDemo from './BasicDemo.js'
import CardDemo from './CardDemo.js'
import SelectableCalendarDemo from './SelectableCalendarDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Container for displaying data in calendar form.

## When To Use

When data is in the form of dates, such as schedules, timetables, prices calendar, lunar calendar. This component also supports Year/Month switch.

## API

**Note:** Part of the Calendar's locale is read from \`value\`. So, please set the locale of \`moment\` correctly.

\`\`\`jsx
// The default locale is en-US, if you want to use other locale, just set locale in entry file globaly.
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');

<Calendar
  dateCellRender={dateCellRender}
  monthCellRender={monthCellRender}
  onPanelChange={onPanelChange}
  onSelect={onSelect}
/>
\`\`\`

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| dateCellRender | Customize the display of the date cell, the returned content will be appended to the cell | function(date: moment): ReactNode | - |
| dateFullCellRender | Customize the display of the date cell, the returned content will override the cell | function(date: moment): ReactNode | - |
| defaultValue | The date selected by default | [moment](http://momentjs.com/) | default date |
| disabledDate | Function that specifies the dates that cannot be selected | (currentDate: moment) => boolean | - |
| fullscreen | Whether to display in full-screen | boolean | \`true\` |
| locale | The calendar's locale | object | [default](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) |
| mode | The display mode of the calendar | \`month\` \| \`year\` | \`month\` |
| monthCellRender | Customize the display of the month cell, the returned content will be appended to the cell | function(date: moment): ReactNode | - |
| monthFullCellRender | Customize the display of the month cell, the returned content will override the cell | function(date: moment): ReactNode | - |
| validRange | to set valid range | \[[moment](http://momentjs.com/), [moment](http://momentjs.com/)] | - |
| value | The current selected date | [moment](http://momentjs.com/) | current date |
| onPanelChange | Callback for when panel changes | function(date: moment, mode: string) | - |
| onSelect | Callback for when a date is selected | function(date: moment） | - |
`
const expComponent = () => (
        <div>
            <h4>Calendar</h4>
            <p>

Container for displaying data in calendar form.

</p>

            <Card bordered={false}>
                <div className="component-demo">
        <h4>Notice Calendar</h4>
        <NoticeCalendarDemo />
        </div>
<div className="component-demo">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo">
        <h4>Card</h4>
        <CardDemo />
        </div>
<div className="component-demo">
        <h4>Selectable Calendar</h4>
        <SelectableCalendarDemo />
        </div>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        