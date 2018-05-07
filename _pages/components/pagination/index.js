import React from 'react'

    import BasicDemo from './BasicDemo.js'
import ChangerDemo from './ChangerDemo.js'
import PrevAndNextDemo from './PrevAndNextDemo.js'
import ControlledDemo from './ControlledDemo.js'
import JumperDemo from './JumperDemo.js'
import MiniSizeDemo from './MiniSizeDemo.js'
import MoreDemo from './MoreDemo.js'
import SimpleModeDemo from './SimpleModeDemo.js'
import TotalNumberDemo from './TotalNumberDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

A long list can be divided into several pages by \`Pagination\`, and only one page will be loaded at a time.

## When To Use

- When it will take a long time to load/render all items.
- If you want to browse the data by navigating through pages.

## API

\`\`\`html
<Pagination onChange={onChange} total={50} />
\`\`\`

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| current | current page number | number | - |
| defaultCurrent | default initial page number | number | 1 |
| defaultPageSize | default number of data items per page | number | 10 |
| hideOnSinglePage | Whether to hide pager on single page | boolean | false |
| itemRender | to customize item innerHTML | (page, type: 'page' \| 'prev' \| 'next', originalElement) => React.ReactNode | - |
| pageSize | number of data items per page | number | - |
| pageSizeOptions | specify the sizeChanger options | string\[] | ['10', '20', '30', '40'] |
| showQuickJumper | determine whether you can jump to pages directly | boolean | false |
| showSizeChanger | determine whether \`pageSize\` can be changed | boolean | false |
| showTotal | to display the total number and range | Function(total, range) | - |
| simple | whether to use simple mode | boolean | - |
| size | specify the size of \`Pagination\`, can be set to \`small\` | string | "" |
| total | total number of data items | number | 0 |
| onChange | a callback function, executed when the page number is changed, and it takes the resulting page number and pageSize as its arguments | Function(page, pageSize) | noop |
| onShowSizeChange | a callback function, executed when \`pageSize\` is changed | Function(current, size) | noop |
`
const expComponent = () => (
        <div>
            <h4>Pagination</h4>
            <p>

A long list can be divided into several pages by \`Pagination\`, and only one page will be loaded at a time.

</p>

            <Card bordered={false}>
                        <Card title="Basic" bordered={true}><BasicDemo /></Card>
        <Card title="Changer" bordered={true}><ChangerDemo /></Card>
        <Card title="Prev And Next" bordered={true}><PrevAndNextDemo /></Card>
        <Card title="Controlled" bordered={true}><ControlledDemo /></Card>
        <Card title="Jumper" bordered={true}><JumperDemo /></Card>
        <Card title="Mini Size" bordered={true}><MiniSizeDemo /></Card>
        <Card title="More" bordered={true}><MoreDemo /></Card>
        <Card title="Simple Mode" bordered={true}><SimpleModeDemo /></Card>
        <Card title="Total Number" bordered={true}><TotalNumberDemo /></Card>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        