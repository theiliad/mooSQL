import React from 'react'

    import BasicDemo from './BasicDemo.js'
import ContextMenuDemo from './ContextMenuDemo.js'
import ButtonWithDropdownMenuDemo from './ButtonWithDropdownMenuDemo.js'
import ClickEventDemo from './ClickEventDemo.js'
import OtherElementsDemo from './OtherElementsDemo.js'
import TheWayOfHidingMenuDemo from './TheWayOfHidingMenuDemo.js'
import PlacementDemo from './PlacementDemo.js'
import CascadingMenuDemo from './CascadingMenuDemo.js'
import TriggerModeDemo from './TriggerModeDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

A dropdown list.

## When To Use

If there are too many operations to display, you can wrap them in a \`Dropdown\`. By clicking/hovering on the trigger, a dropdown menu should appear, which allows you to choose one option and execute relevant actions.

## API

### Dropdown

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| disabled | whether the dropdown menu is disabled | boolean | - |
| getPopupContainer | to set the container of the dropdown menu. The default is to create a \`div\` element in \`body\`, you can reset it to the scrolling area and make a relative reposition. [example](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | Function(triggerNode) | \`() => document.body\` |
| overlay | the dropdown menu | [Menu](/components/menu) | - |
| placement | placement of pop menu: \`bottomLeft\` \`bottomCenter\` \`bottomRight\` \`topLeft\` \`topCenter\` \`topRight\` | String | \`bottomLeft\` |
| trigger | the trigger mode which executes the drop-down action | Array&lt;\`click\`\|\`hover\`\|\`contextMenu\`> | \`['hover']\` |
| visible | whether the dropdown menu is visible | boolean | - |
| onVisibleChange | a callback function takes an argument: \`visible\`, is executed when the visible state is changed | Function(visible) | - |

You should use [Menu](/components/menu/) as \`overlay\`. The menu items and dividers are also available by using \`Menu.Item\` and \`Menu.Divider\`.

> Warning: You must set a unique \`key\` for \`Menu.Item\`.
>
> Menu of Dropdown is unselectable by default, you can make it selectable via \`<Menu selectable>\`.

### Dropdown.Button

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| disabled | whether the dropdown menu is disabled | boolean | - |
| overlay | the dropdown menu | [Menu](/components/menu) | - |
| placement | placement of pop menu: \`bottomLeft\` \`bottomCenter\` \`bottomRight\` \`topLeft\` \`topCenter\` \`topRight\` | String | \`bottomLeft\` |
| size | size of the button, the same as [Button](/components/button) | string | \`default\` |
| trigger | the trigger mode which executes the drop-down action | Array&lt;\`click\`\|\`hover\`\|\`contextMenu\`> | \`['hover']\` |
| type | type of the button, the same as [Button](/components/button) | string | \`default\` |
| visible | whether the dropdown menu is visible | boolean | - |
| onClick | a callback function, the same as [Button](/components/button), which will be executed when you click the button on the left | Function | - |
| onVisibleChange | a callback function takes an argument: \`visible\`, is executed when the visible state is changed | Function | - |
`
const expComponent = () => (
        <div id="component-demos-dropdown">
            <div className="title-bar">
                <h4>Dropdown</h4>
                <p>

A dropdown list.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo basic">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo context-menu">
        <h4>Context Menu</h4>
        <ContextMenuDemo />
        </div>
<div className="component-demo button-with-dropdown-menu">
        <h4>Button With Dropdown Menu</h4>
        <ButtonWithDropdownMenuDemo />
        </div>
<div className="component-demo click-event">
        <h4>Click Event</h4>
        <ClickEventDemo />
        </div>
<div className="component-demo other-elements">
        <h4>Other Elements</h4>
        <OtherElementsDemo />
        </div>
<div className="component-demo the-way-of-hiding-menu">
        <h4>The Way Of Hiding Menu</h4>
        <TheWayOfHidingMenuDemo />
        </div>
<div className="component-demo placement">
        <h4>Placement</h4>
        <PlacementDemo />
        </div>
<div className="component-demo cascading-menu">
        <h4>Cascading Menu</h4>
        <CascadingMenuDemo />
        </div>
<div className="component-demo trigger-mode">
        <h4>Trigger Mode</h4>
        <TriggerModeDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        