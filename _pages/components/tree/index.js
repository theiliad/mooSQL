import React from 'react'

    import BasicControlledExampleDemo from './BasicControlledExampleDemo.js'
import BasicDemo from './BasicDemo.js'
import CustomizeIconDemo from './CustomizeIconDemo.js'
import DraggableDemo from './DraggableDemo.js'
import LoadDataAsynchronouslyDemo from './LoadDataAsynchronouslyDemo.js'
import TreeWithLineDemo from './TreeWithLineDemo.js'
import SearchableDemo from './SearchableDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

## When To Use

Almost anything can be represented in a tree structure. Examples include directories, organization hierarchies, biological classifications, countries, etc. The \`Tree\` component is a way of representing the hierarchical relationship between these things. You can also  expand, collapse, and select a treeNode within a \`Tree\`.

## API

### Tree props

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| autoExpandParent | Whether to automatically expand a parent treeNode | boolean | true |
| checkable | Adds a \`Checkbox\` before the treeNodes | boolean | false |
| checkedKeys | (Controlled) Specifies the keys of the checked treeNodes (PS: When this specifies the key of a treeNode which is also a parent treeNode, all the children treeNodes of will be checked; and vice versa, when it specifies the key of a treeNode which is a child treeNode, its parent treeNode will also be checked. When \`checkable\` and \`checkStrictly\` is true, its object has \`checked\` and \`halfChecked\` property. Regardless of whether the child or parent treeNode is checked, they won't impact each other. | string\[] \| {checked: string\[], halfChecked: string\[]} | \[] |
| checkStrictly | Check treeNode precisely; parent treeNode and children treeNodes are not associated | boolean | false |
| defaultCheckedKeys | Specifies the keys of the default checked treeNodes | string\[] | \[] |
| defaultExpandAll | Whether to expand all treeNodes by default | boolean | false |
| defaultExpandedKeys | Specify the keys of the default expanded treeNodes | string\[] | \[] |
| defaultExpandParent | auto expand parent treeNodes when init | bool | true |
| defaultSelectedKeys | Specifies the keys of the default selected treeNodes | string\[] | \[] |
| disabled | whether disabled the tree | bool | false |
| draggable | Specifies whether this Tree is draggable (IE > 8) | boolean | false |
| expandedKeys | (Controlled) Specifies the keys of the expanded treeNodes | string\[] | \[] |
| filterTreeNode | Defines a function to filter (highlight) treeNodes. When the function returns \`true\`, the corresponding treeNode will be highlighted | function(node) | - |
| loadData | Load data asynchronously | function(node) | - |
| multiple | Allows selecting multiple treeNodes | boolean | false |
| selectedKeys | (Controlled) Specifies the keys of the selected treeNodes | string\[] | - |
| showIcon | Shows the icon before a TreeNode's title. There is no default style; you must set a custom style for it if set to \`true\` | boolean | false |
| showLine | Shows a connecting line | boolean | false |
| onCheck | Callback function for when the onCheck event occurs | function(checkedKeys, e:{checked: bool, checkedNodes, node, event}) | - |
| onDragEnd | Callback function for when the onDragEnd event occurs | function({event, node}) | - |
| onDragEnter | Callback function for when the onDragEnter event occurs | function({event, node,  expandedKeys}) | - |
| onDragLeave | Callback function for when the onDragLeave event occurs | function({event, node}) | - |
| onDragOver | Callback function for when the onDragOver event occurs | function({event, node}) | - |
| onDragStart | Callback function for when the onDragStart event occurs | function({event, node}) | - |
| onDrop | Callback function for when the onDrop event occurs | function({event, node, dragNode, dragNodesKeys}) | - |
| onExpand | Callback function for when a treeNode is expanded or collapsed | function(expandedKeys, {expanded: bool, node}) | - |
| onRightClick | Callback function for when the user right clicks a treeNode | function({event, node}) | - |
| onSelect | Callback function for when the user clicks a treeNode | function(selectedKeys, e:{selected: bool, selectedNodes, node, event}) | - |

### TreeNode props

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| disableCheckbox | Disables the checkbox of the treeNode | boolean | false |
| disabled | Disables the treeNode | boolean | false |
| icon | customize icon. When you pass component, whose render will receive full TreeNode props as component props | ReactNode/Function(props):ReactNode | - |
| isLeaf | Determines if this is a leaf node(effective when \`loadData\` is specified) | boolean | false |
| key | Used with (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys. P.S.: It must be unique in all of treeNodes of the tree! | string | internal calculated position of treeNode |
| selectable | Set whether the treeNode can be selected | boolean | true |
| title | Title | string\|ReactNode | '---' |

## Note

Before \`3.4.0\`:
The number of treeNodes can be very large, but when \`checkable=true\`,
it will increase the compute time. So, we cache some calculations (e.g. \`this.treeNodesStates\`)
to avoid double computing. But, this brings some restrictions.
**When you load treeNodes asynchronously, you should render tree like this**:

\`\`\`jsx
{this.state.treeData.length
  ? <Tree>{this.state.treeData.map(data => <TreeNode />)}</Tree>
  : 'loading tree'}
\`\`\`
`
const expComponent = () => (
        <div>
            <h4>Tree</h4>
            <p>

</p>

            <Card bordered={false}>
                <div className="component-demo">
        <h4>Basic Controlled Example</h4>
        <BasicControlledExampleDemo />
        </div>
<div className="component-demo">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo">
        <h4>Customize Icon</h4>
        <CustomizeIconDemo />
        </div>
<div className="component-demo">
        <h4>Draggable</h4>
        <DraggableDemo />
        </div>
<div className="component-demo">
        <h4>Load Data Asynchronously</h4>
        <LoadDataAsynchronouslyDemo />
        </div>
<div className="component-demo">
        <h4>Tree With Line</h4>
        <TreeWithLineDemo />
        </div>
<div className="component-demo">
        <h4>Searchable</h4>
        <SearchableDemo />
        </div>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        