import React from 'react'

    import AjaxDemo from './AjaxDemo.js'
import BasicUsageDemo from './BasicUsageDemo.js'
import BorderTitleAndFooterDemo from './BorderTitleAndFooterDemo.js'
import ColSpanAndRowSpanDemo from './ColSpanAndRowSpanDemo.js'
import CustomizedFilterPanelDemo from './CustomizedFilterPanelDemo.js'
import DragSortingDemo from './DragSortingDemo.js'
import DynamicSettingsDemo from './DynamicSettingsDemo.js'
import EditableCellsDemo from './EditableCellsDemo.js'
import EditableRowsDemo from './EditableRowsDemo.js'
import TreeDataDemo from './TreeDataDemo.js'
import ExpandableRowDemo from './ExpandableRowDemo.js'
import FixedColumnsAndHeaderDemo from './FixedColumnsAndHeaderDemo.js'
import FixedColumnsDemo from './FixedColumnsDemo.js'
import FixedHeaderDemo from './FixedHeaderDemo.js'
import GroupingTableHeadDemo from './GroupingTableHeadDemo.js'
import FilterAndSorterDemo from './FilterAndSorterDemo.js'
import JSXStyleAPIDemo from './JSXStyleAPIDemo.js'
import NestedTablesDemo from './NestedTablesDemo.js'
import ResetFiltersAndSortersDemo from './ResetFiltersAndSortersDemo.js'
import SelectionAndOperationDemo from './SelectionAndOperationDemo.js'
import CustomSelectionDemo from './CustomSelectionDemo.js'
import SelectionDemo from './SelectionDemo.js'
import SizeDemo from './SizeDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

A table displays rows of data.

## When To Use

- To display a collection of structured data.
- To sort, search, paginate, filter data.

## How To Use

Specify \`\`\`dataSource\`\`\` of Table as an array of data.

\`\`\`jsx const dataSource = [{ key: '1', name: 'Mike', age: 32, address: '10 Downing Street' }, { key: '2', name: 'John', age: 42, address: '10 Downing Street' }]; const columns = [{ title: 'Name', dataIndex: 'name', key: 'name', }, { title: 'Age', dataIndex: 'age', key: 'age', }, { title: 'Address', dataIndex: 'address', key: 'address', }]; &lt;Table dataSource={dataSource} columns={columns} /&gt;\`\`\`

## API

### Table

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| bordered | Whether to show all table borders | boolean | \`\`\`false\`\`\` |
| childrenColumnName | The column contains children to display | string[] | children |
| columns | Columns of table | <a href="https://git.io/vMMXC">ColumnProps</a>[] | - |
| components | Override default table elements | object | - |
| dataSource | Data record array to be displayed | any[] | - |
| defaultExpandAllRows | Expand all rows initially | boolean | \`\`\`false\`\`\` |
| defaultExpandedRowKeys | Initial expanded row keys | string[] | - |
| expandedRowKeys | Current expanded row keys | string[] | - |
| expandedRowRender | Expanded container render for each row | Function(record):ReactNode | - |
| expandRowByClick | Whether to expand row by clicking anywhere in the whole row | boolean | \`\`\`false\`\`\` |
| footer | Table footer renderer | Function(currentPageData) |  |
| indentSize | Indent size in pixels of tree data | number | 15 |
| loading | Loading status of table | boolean|<a href="https://ant.design/components/spin-cn/#API">object</a> (<a href="https://github.com/ant-design/ant-design/issues/4544#issuecomment-271533135">more</a>) | \`\`\`false\`\`\` |
| locale | i18n text including filter, sort, empty text, etc | object | filterConfirm: 'Ok' &lt;br&gt; filterReset: 'Reset' &lt;br&gt; emptyText: 'No Data' &lt;br&gt; <a href="https://github.com/ant-design/ant-design/issues/575#issuecomment-159169511">Default</a> |
| pagination | Pagination <a href="#pagination">config</a> or [\`\`\`Pagination\`\`\`] (/components/pagination/), hide it by setting it to \`\`\`false\`\`\` | object |  |
| rowClassName | Row's className | Function(record, index):string | - |
| rowKey | Row's unique key, could be a string or function that returns a string | string|Function(record):string | \`\`\`key\`\`\` |
| rowSelection | Row selection <a href="#rowSelection">config</a> | object | null |
| scroll | Set horizontal or vertical scrolling, can also be used to specify the width and height of the scroll area. It is recommended to set a number for \`\`\`x\`\`\`, if you want to set it to \`\`\`true\`\`\`, you need to add style \`\`\`.ant-table td { white-space: nowrap; }\`\`\`. | { x: number | true, y: number } | - |
| showHeader | Whether to show table header | boolean | \`\`\`true\`\`\` |
| size | Size of table | \`\`\`default\`\`\` | \`\`\`middle\`\`\` | \`\`\`small\`\`\` | \`\`\`default\`\`\` |
| title | Table title renderer | Function(currentPageData) |  |
| onChange | Callback executed when pagination, filters or sorter is changed | Function(pagination, filters, sorter) |  |
| onExpand | Callback executed when the row expand icon is clicked | Function(expanded, record) |  |
| onExpandedRowsChange | Callback executed when the expanded rows change | Function(expandedRows) |  |
| onHeaderRow | Set props on per header row | Function(column, index) | - |
| onRow | Set props on per row | Function(record, index) | - |

#### onRow usage

Same as \`\`\`onRow\`\`\` \`\`\`onHeaderRow\`\`\` \`\`\`onCell\`\`\` \`\`\`onHeaderCell\`\`\`

\`\`\`jsx &lt;Table onRow={(record) =&gt; { return { onClick: () =&gt; {}, // click row onMouseEnter: () =&gt; {}, // mouse enter row onXxxx... }; }} onHeaderRow={(column) =&gt; { return { onClick: () =&gt; {}, // click header row }; }} /&gt;\`\`\`

### Column

One of the Table \`\`\`columns\`\`\` prop for describing the table's columns, Column has the same API.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| className | className of this column | string | - |
| colSpan | Span of this column's title | number |  |
| dataIndex | Display field of the data record, could be set like \`\`\`a.b.c\`\`\` | string | - |
| defaultSortOrder | Default order of sorted values: \`\`\`'ascend'\`\`\` \`\`\`'descend'\`\`\` \`\`\`null\`\`\` | string | - |
| filterDropdown | Customized filter overlay | ReactNode | - |
| filterDropdownVisible | Whether \`\`\`filterDropdown\`\`\` is visible | boolean | - |
| filtered | Whether the \`\`\`dataSource\`\`\` is filtered | boolean | \`\`\`false\`\`\` |
| filteredValue | Controlled filtered value, filter icon will highlight | string[] | - |
| filterIcon | Customized filter icon | ReactNode | \`\`\`false\`\`\` |
| filterMultiple | Whether multiple filters can be selected | boolean | \`\`\`true\`\`\` |
| filters | Filter menu config | object[] | - |
| fixed | Set column to be fixed: \`\`\`true\`\`\`(same as left) \`\`\`'left'\`\`\` \`\`\`'right'\`\`\` | boolean|string | \`\`\`false\`\`\` |
| key | Unique key of this column, you can ignore this prop if you've set a unique \`\`\`dataIndex\`\`\` | string | - |
| render | Renderer of the table cell. The return value should be a ReactNode, or an object for <a href="#components-table-demo-colspan-rowspan">colSpan/rowSpan config</a> | Function(text, record, index) {} | - |
| align | specify how content is aligned | 'left' | 'right' | 'center' | 'left' |
| sorter | Sort function for local sort, see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">Array.sort</a>'s compareFunction. If you need sort buttons only, set to \`\`\`true\`\`\` | Function|boolean | - |
| sortOrder | Order of sorted values: \`\`\`'ascend'\`\`\` \`\`\`'descend'\`\`\` \`\`\`false\`\`\` | boolean|string | - |
| title | Title of this column | string|ReactNode | - |
| width | Width of this column | string|number | - |
| onCell | Set props on per cell | Function(record) | - |
| onFilter | Callback executed when the confirm filter button is clicked | Function | - |
| onFilterDropdownVisibleChange | Callback executed when \`\`\`filterDropdownVisible\`\`\` is changed | function(visible) {} | - |
| onHeaderCell | Set props on per header cell | Function(column) | - |

### ColumnGroup

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| title | Title of the column group | string|ReactNode | - |

### pagination

Properties for pagination.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| position | specify the position of \`\`\`Pagination\`\`\` | 'top' | 'bottom' | 'both' | 'bottom' |

More about pagination, please check <a href="/components/pagination/">\`\`\`Pagination\`\`\`</a>.

### rowSelection

Properties for row selection.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| fixed | Fixed selection column on the left | boolean | - |
| getCheckboxProps | Get Checkbox or Radio props | Function(record) | - |
| hideDefaultSelections | Remove the default \`\`\`Select All\`\`\` and \`\`\`Select Invert\`\`\` selections | boolean | \`\`\`false\`\`\` |
| selectedRowKeys | Controlled selected row keys | string[] | [] |
| columnWidth | Set the width of the selection column | string|number | - |
| selections | Custom selection <a href="#rowSelection">config</a>, only displays default selections when set to \`\`\`true\`\`\` | object[]|boolean | - |
| type | \`\`\`checkbox\`\`\` or \`\`\`radio\`\`\` | \`\`\`checkbox\`\`\` | \`\`\`radio\`\`\` | \`\`\`checkbox\`\`\` |
| onChange | Callback executed when selected rows change | Function(selectedRowKeys, selectedRows) | - |
| onSelect | Callback executed when select/deselect one row | Function(record, selected, selectedRows, nativeEvent) | - |
| onSelectAll | Callback executed when select/deselect all rows | Function(selected, selectedRows, changeRows) | - |
| onSelectInvert | Callback executed when row selection is inverted | Function(selectedRows) | - |

### selection

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| key | Unique key of this selection | string | - |
| text | Display text of this selection | string|React.ReactNode | - |
| onSelect | Callback executed when this selection is clicked | Function(changeableRowKeys) | - |

## Using in TypeScript

\`\`\`jsx import { Table } from 'antd'; import { ColumnProps } from 'antd/lib/table'; interface IUser { key: number, name: string; } const columns: ColumnProps&lt;IUser&gt;[] = [{ key: 'name', title: 'Name', dataIndex: 'name', }]; const data: IUser[] = [{ key: 0, name: 'Jack', }]; class UserTable extends Table&lt;IUser&gt; {} &lt;UserTable columns={columns} dataSource={data} /&gt; // Use JSX style API class NameColumn extends Table.Column&lt;IUser&gt; {} &lt;UserTable dataSource={data}&gt; &lt;NameColumn key=&quot;name&quot; title=&quot;Name&quot; dataIndex=&quot;name&quot; /&gt; &lt;/UserTable&gt;\`\`\`

## Note

According to <a href="https://facebook.github.io/react/docs/lists-and-keys.html#keys">React documentation</a>, every child in array should be assigned a unique key. The values inside \`\`\`dataSource\`\`\` and \`\`\`columns\`\`\` should follow this in Table, and \`\`\`dataSource[i].key\`\`\` would be treated as key value default for \`\`\`dataSource\`\`\`.

If \`\`\`dataSource[i].key\`\`\` is not provided, then you should specify the primary key of dataSource value via \`\`\`rowKey\`\`\`. If not, warnings like above will show in browser console.

<img src="https://os.alipayobjects.com/rmsportal/luLdLvhPOiRpyss.png" alt="">

\`\`\`jsx // primary key is uid return &lt;Table rowKey=&quot;uid&quot; /&gt;; // or return &lt;Table rowKey={record =&gt; record.uid} /&gt;;\`\`\`
`
const expComponent = () => (
        <div>
            <h4>Table</h4>
            <p>

A table displays rows of data.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Ajax" bordered={true}><AjaxDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Basic Usage" bordered={true}><BasicUsageDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Border Title And Footer" bordered={true}><BorderTitleAndFooterDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Col Span And Row Span" bordered={true}><ColSpanAndRowSpanDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Customized Filter Panel" bordered={true}><CustomizedFilterPanelDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Drag Sorting" bordered={true}><DragSortingDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Dynamic Settings" bordered={true}><DynamicSettingsDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Editable Cells" bordered={true}><EditableCellsDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Editable Rows" bordered={true}><EditableRowsDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Tree Data" bordered={true}><TreeDataDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Expandable Row" bordered={true}><ExpandableRowDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Fixed Columns And Header" bordered={true}><FixedColumnsAndHeaderDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Fixed Columns" bordered={true}><FixedColumnsDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Fixed Header" bordered={true}><FixedHeaderDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Grouping Table Head" bordered={true}><GroupingTableHeadDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Filter And Sorter" bordered={true}><FilterAndSorterDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="J S X Style A P I" bordered={true}><JSXStyleAPIDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Nested Tables" bordered={true}><NestedTablesDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Reset Filters And Sorters" bordered={true}><ResetFiltersAndSortersDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Selection And Operation" bordered={true}><SelectionAndOperationDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Custom Selection" bordered={true}><CustomSelectionDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Selection" bordered={true}><SelectionDemo /></Card>
        </Col>
</Row>
<Row gutter={30}>
        <Col span={12}>
        <Card title="Size" bordered={true}><SizeDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        