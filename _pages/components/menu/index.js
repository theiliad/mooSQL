import React from 'react'

    import TopNavigationDemo from './TopNavigationDemo.js'
import CollapsedInlineMenuDemo from './CollapsedInlineMenuDemo.js'
import OpenCurrentSubmenuOnlyDemo from './OpenCurrentSubmenuOnlyDemo.js'
import SwitchTheMenuTypeDemo from './SwitchTheMenuTypeDemo.js'
import InlineMenuDemo from './InlineMenuDemo.js'
import MenuThemesDemo from './MenuThemesDemo.js'
import VerticalMenuDemo from './VerticalMenuDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Menu list of Navigation.

## When To Use

Navigation menu is important for a website, it helps users jump from one site section to another quickly. Mostly, it includes top navigation and side navigation. Top navigation provides all the category and functions of the website. Side navigation provides the Multi-level structure of the website.

More layouts with navigation: [layout](/components/layout).

## API

\`\`\`html
<Menu>
  <Menu.Item>Menu</Menu.Item>
  <SubMenu title="SubMenu">
    <Menu.Item>SubMenuItem</Menu.Item>
  </SubMenu>
</Menu>
\`\`\`

### Menu

| Param | Description | Type | Default value |
| ----- | ----------- | ---- | ------------- |
| defaultOpenKeys | array with the keys of default opened sub menus |  |  |
| defaultSelectedKeys | array with the keys of default selected menu items | string\[] |  |
| forceSubMenuRender | render submenu into DOM before it shows | boolean | false |
| inlineCollapsed | specifies the collapsed status when menu is inline mode | boolean | - |
| inlineIndent | indent px of inline menu item on each level | number | 24 |
| mode | type of the menu; \`vertical\`, \`horizontal\`, and \`inline\` modes are supported | string: \`vertical\` \| \`vertical-right\` \| \`horizontal\` \| \`inline\` | \`vertical\` |
| multiple | Allow selection of multiple items | boolean | false |
| openKeys | array with the keys of currently opened sub menus | string\[] |  |
| selectable | allow selecting menu items | boolean | true |
| selectedKeys | array with the keys of currently selected menu items | string\[] |  |
| style | style of the root node | object |  |
| subMenuCloseDelay | delay time to hide submenu when mouse leave, unit: second | number | 0.1 |
| subMenuOpenDelay | delay time to show submenu when mouse enter, unit: second | number | 0 |
| theme | color theme of the menu | string: \`light\` \`dark\` | \`light\` |
| onClick | callback executed when a menu item is clicked | function({ item, key, keyPath }) | - |
| onDeselect | callback executed when a menu item is deselected, only supported for multiple mode | function({ item, key, selectedKeys }) | - |
| onOpenChange | called when open/close sub menu | function(openKeys: string\[]) | noop |
| onSelect | callback executed when a menu item is selected | function({ item, key, selectedKeys }) | none |

> More options in [rc-menu](https://github.com/react-component/menu#api)

### Menu.Item

| Param | Description | Type | Default value |
| ----- | ----------- | ---- | ------------- |
| disabled | whether menu item is disabled or not | boolean | false |
| key | unique id of the menu item | string |  |

### Menu.SubMenu

| Param | Description | Type | Default value |
| ----- | ----------- | ---- | ------------- |
| children | sub menus or sub menu items | Array&lt;MenuItem\|SubMenu> |  |
| disabled | whether sub menu is disabled or not | boolean | false |
| key | unique id of the sub menu | string |  |
| title | title of the sub menu | string\|ReactNode |  |
| onTitleClick | callback executed when the sub menu title is clicked | function({ key, domEvent }) |  |

### Menu.ItemGroup

| Param | Description | Type | Default value |
| ----- | ----------- | ---- | ------------- |
| children | sub menu items | MenuItem\[] |  |
| title | title of the group | string\|ReactNode |  |

### Menu.Divider

Divider line in between menu items, only used in vertical popup Menu or Dropdown Menu.
`
const expComponent = () => (
        <div id="component-demos-menu">
            <div className="title-bar">
                <h4>Menu</h4>
                <p>

Menu list of Navigation.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo top-navigation">
        <h4>Top Navigation</h4>
        <TopNavigationDemo />
        </div>
<div className="component-demo collapsed-inline-menu">
        <h4>Collapsed Inline Menu</h4>
        <CollapsedInlineMenuDemo />
        </div>
<div className="component-demo open-current-submenu-only">
        <h4>Open Current Submenu Only</h4>
        <OpenCurrentSubmenuOnlyDemo />
        </div>
<div className="component-demo switch-the-menu-type">
        <h4>Switch The Menu Type</h4>
        <SwitchTheMenuTypeDemo />
        </div>
<div className="component-demo inline-menu">
        <h4>Inline Menu</h4>
        <InlineMenuDemo />
        </div>
<div className="component-demo menu-themes">
        <h4>Menu Themes</h4>
        <MenuThemesDemo />
        </div>
<div className="component-demo vertical-menu">
        <h4>Vertical Menu</h4>
        <VerticalMenuDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        