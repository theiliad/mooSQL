import React from 'react'

    import BasicDemo from './BasicDemo.js'
import CardDemo from './CardDemo.js'
import NoticeCalendarDemo from './NoticeCalendarDemo.js'
import SelectableCalendarDemo from './SelectableCalendarDemo.js'
    import { Card } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Container for displaying data in calendar form.

## When To Use

When data is in the form of dates, such as schedules, timetables, prices calendar, lunar calendar. This component also supports Year/Month switch.

## API

<strong>Note:</strong> Part of the Calendar's locale is read from \`\`\`value\`\`\`. So, please set the locale of \`\`\`moment\`\`\` correctly.

\`\`\`jsx // The default locale is en-US, if you want to use other locale, just set locale in entry file globaly. // import moment from 'moment'; // import 'moment/locale/zh-cn'; // moment.locale('zh-cn'); &lt;Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} onPanelChange={onPanelChange} onSelect={onSelect} /&gt;\`\`\`

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| dateCellRender | Customize the display of the date cell, the returned content will be appended to the cell | function(date: moment): ReactNode | - |
| dateFullCellRender | Customize the display of the date cell, the returned content will override the cell | function(date: moment): ReactNode | - |
| defaultValue | The date selected by default | <a href="http://momentjs.com/">moment</a> | default date |
| disabledDate | Function that specifies the dates that cannot be selected | (currentDate: moment) =&gt; boolean | - |
| fullscreen | Whether to display in full-screen | boolean | \`\`\`true\`\`\` |
| locale | The calendar's locale | object | <a href="https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json">default</a> |
| mode | The display mode of the calendar | \`\`\`month\`\`\` | \`\`\`year\`\`\` | \`\`\`month\`\`\` |
| monthCellRender | Customize the display of the month cell, the returned content will be appended to the cell | function(date: moment): ReactNode | - |
| monthFullCellRender | Customize the display of the month cell, the returned content will override the cell | function(date: moment): ReactNode | - |
| validRange | to set valid range | [<a href="http://momentjs.com/">moment</a>, <a href="http://momentjs.com/">moment</a>] | - |
| value | The current selected date | <a href="http://momentjs.com/">moment</a> | current date |
| onPanelChange | Callback for when panel changes | function(date: moment, mode: string) | - |
| onSelect | Callback for when a date is selected | function(date: moment） | - |
`
const expComponent = () => (
        <div>
            <h4>Calendar</h4>

            <Card bordered={false}>
                        <BasicDemo />
        <CardDemo />
        <NoticeCalendarDemo />
        <SelectableCalendarDemo />

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        