import React from 'react'

    import BasicListDemo from './BasicListDemo.js'
import GridDemo from './GridDemo.js'
import ScrollingLoadedDemo from './ScrollingLoadedDemo.js'
import InfiniteVirtualizedDemo from './InfiniteVirtualizedDemo.js'
import LoadMoreDemo from './LoadMoreDemo.js'
import SimpleListDemo from './SimpleListDemo.js'
import ResponsiveGridListDemo from './ResponsiveGridListDemo.js'
import VerticalDemo from './VerticalDemo.js'
    import { Card } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Simple List.

## When To Use

A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.

## API

### List

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| bordered | Toggles rendering of the border around the list | boolean | false |
| footer | List footer renderer | string|ReactNode | - |
| grid | The grid type of list. You can set grid to something like {gutter: 16, column: 4} | object | - |
| header | List header renderer | string|ReactNode | - |
| itemLayout | The layout of list, default is \`\`\`horizontal\`\`\`, If a vertical list is desired, set the itemLayout property to \`\`\`vertical\`\`\` | string | - |
| loading | Shows a loading indicator while the contents of the list are being fetched | boolean|<a href="https://ant.design/components/spin-cn/#API">object</a> (<a href="https://github.com/ant-design/ant-design/issues/8659">more</a>) | false |
| locale | i18n text including empty text | object | emptyText: 'No Data' &lt;br&gt; |
| loadMore | Shows a load more content | string|ReactNode | - |
| pagination | Pagination <a href="https://ant.design/components/pagination/">config</a>, hide it by setting it to false | boolean | object | false |
| split | Toggles rendering of the split under the list item | boolean | true |

### List grid props

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| column | column of grid | number | - |
| gutter | spacing between grid | number | 0 |
| size | Size of list | \`\`\`default\`\`\` | \`\`\`middle\`\`\` | \`\`\`small\`\`\` | \`\`\`default\`\`\` |
| xs | \`\`\`&lt;576px\`\`\` column of grid | number | - |
| sm | \`\`\`≥576px\`\`\` column of grid | number | - |
| md | \`\`\`≥768px\`\`\` column of grid | number | - |
| lg | \`\`\`≥992px\`\`\` column of grid | number | - |
| xl | \`\`\`≥1200px\`\`\` column of grid | number | - |
| xxl | \`\`\`≥1600px\`\`\` column of grid | number | - |

### List.Item

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| actions | The actions content of list item. If \`\`\`itemLayout\`\`\` is \`\`\`vertical\`\`\`, shows the content on bottom, otherwise shows content on the far right. | Array&lt;ReactNode&gt; | - |
| extra | The extra content of list item. If \`\`\`itemLayout\`\`\` is \`\`\`vertical\`\`\`, shows the content on right, otherwise shows content on the far right. | string|ReactNode | - |

### List.Item.Meta

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| avatar | The avatar of list item | ReactNode | - |
| description | The description of list item | string|ReactNode | - |
| title | The title of list item | string|ReactNode | - |
`
const expComponent = () => (
        <div>
            <h4>List</h4>

            <Card bordered={false}>
                        <BasicListDemo />
        <GridDemo />
        <ScrollingLoadedDemo />
        <InfiniteVirtualizedDemo />
        <LoadMoreDemo />
        <SimpleListDemo />
        <ResponsiveGridListDemo />
        <VerticalDemo />

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        