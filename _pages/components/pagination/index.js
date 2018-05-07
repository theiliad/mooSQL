import React from 'react'

    import BasicDemo from './BasicDemo.js'
import ChangerDemo from './ChangerDemo.js'
import ControlledDemo from './ControlledDemo.js'
import PrevAndNextDemo from './PrevAndNextDemo.js'
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
                <div className="component-demo">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo">
        <h4>Changer</h4>
        <ChangerDemo />
        </div>
<div className="component-demo">
        <h4>Controlled</h4>
        <ControlledDemo />
        </div>
<div className="component-demo">
        <h4>Prev And Next</h4>
        <PrevAndNextDemo />
        </div>
<div className="component-demo">
        <h4>Jumper</h4>
        <JumperDemo />
        </div>
<div className="component-demo">
        <h4>Mini Size</h4>
        <MiniSizeDemo />
        </div>
<div className="component-demo">
        <h4>More</h4>
        <MoreDemo />
        </div>
<div className="component-demo">
        <h4>Simple Mode</h4>
        <SimpleModeDemo />
        </div>
<div className="component-demo">
        <h4>Total Number</h4>
        <TotalNumberDemo />
        </div>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        