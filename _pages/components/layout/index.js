import React from 'react'

    import BasicStructureDemo from './BasicStructureDemo.js'
import CustomTriggerDemo from './CustomTriggerDemo.js'
import FixedSiderDemo from './FixedSiderDemo.js'
import FixedHeaderDemo from './FixedHeaderDemo.js'
import SiderDemo from './SiderDemo.js'
import ResponsiveDemo from './ResponsiveDemo.js'
import HeaderSiderDemo from './HeaderSiderDemo.js'
import HeaderSiderDemo22 from './HeaderSiderDemo22.js'
import HeaderContentFooterDemo from './HeaderContentFooterDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Handling the overall layout of a page.

## Specification

### Size

The first level navigation is inclined left near a logo, and the secondary menu is inclined right.

- Top Navigation (almost systems): the height of the first level navigation \`64px\`, the second level navigation \`48px\`.
- Top Navigation(contents page): the height of the first level navigation \`80px\`, the second level navigation \`56px\`.
- Calculation formula of a top navigation: \`48+8n\`.
- Calculation formula of an aside navigation: \`200+8n\`.

### Interaction rules

- The first level navigation and the last level navigation should be distincted by visualization;
- The current item should have the highest priority of visualization;
- When the current navigation item is collapsed, the stlye of the current navigation item will be applied to its parent level;
- The left side navigation bar has support for both the accordion and expanding styles, you can choose the one that fits your case best.

## Visualization rules

 Style of a navigation should conform to its level.

- **Emphasis by colorblock**

  When background color is a deep color, you can use this pattern for the parent level navigation item of current page.

- **The highlight match stick**

  When background color is a light color, you can use this pattern for the current page navigation item, we recommed using it for the last item of the navigation path.

- **Hightlighted font**

  From the visualization aspect, hightlighted font is stronger than colorblock, this pattern is often used for the parent level of the current item.

- **Enlarge the size of the font**

  \`12px\`、\`14px\` is a standard font size of navigations，\`14px\` is used for the first and the second level of the navigation. You can choose a appropriate font size in terms of the level of your navigation.

## Component Overview

- \`Layout\`: The layout wrapper, in which \`Header\` \`Sider\` \`Content\` \`Footer\` or \`Layout\` itself can be nested, and can be placed in any parent container.
- \`Header\`: The top layout with default style, in which any element can be nested, and must be placed in \`Layout\`.
- \`Sider\`: The sidebar with default style and basic functions, in which any element can be nested, and must be placed in \`Layout\`.
- \`Content\`: The content layout with default style, in which any element can be nested, and must be placed in \`Layout\`.
- \`Footer\`: The bottom layout with default style, in which any element can be nested, and must be placed in \`Layout\`.

> Based on \`flex layout\`, please pay attention to the [compatibility](http://caniuse.com/#search=flex).

## API

\`\`\`jsx
<Layout>
  <Header>header</Header>
  <Layout>
    <Sider>left sidebar</Sider>
    <Content>main content</Content>
    <Sider>right sidebar</Sider>
  </Layout>
  <Footer>footer</Footer>
</Layout>
\`\`\`

### Layout

The wrapper.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| className | container className | string | - |
| style | to customize the styles | object | - |
| hasSider | whether contain Sider in children, don't have to assign it normally. Useful in ssr avoid style flickering | boolean | - |

> APIs of \`Layout.Header\` \`Layout.Footer\` \`Layout.Content\` are the same as that of \`Layout\`.

### Layout.Sider

The sidebar.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| breakpoint | [breakpoints](/components/grid#api) of the responsive layout | Enum { 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' } | - |
| className | container className | string | - |
| collapsed | to set the current status | boolean | - |
| collapsedWidth | width of the collapsed sidebar, by setting to \`0\` a special trigger will appear | number | 64 |
| collapsible | whether can be collapsed | boolean | false |
| defaultCollapsed | to set the initial status | boolean | false |
| reverseArrow | reverse direction of arrow, for a sider that expands from the right | boolean | false |
| style | to customize the styles | object | - |
| trigger | specify the customized trigger, set to null to hide the trigger | string\|ReactNode | - |
| width | width of the sidebar | number\|string | 200 |
| onCollapse | the callback function, executed by clicking the trigger or activating the responsive layout | (collapsed, type) => {} | - |

#### breakpoint width

\`\`\`js
{
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
}
\`\`\`
`
const expComponent = () => (
        <div>
            <h4>Layout</h4>
            <p>

Handling the overall layout of a page.

</p>

            <Card bordered={false}>
                <div className="component-demo">
        <h4>Basic Structure</h4>
        <BasicStructureDemo />
        </div>
<div className="component-demo">
        <h4>Custom Trigger</h4>
        <CustomTriggerDemo />
        </div>
<div className="component-demo">
        <h4>Fixed Sider</h4>
        <FixedSiderDemo />
        </div>
<div className="component-demo">
        <h4>Fixed Header</h4>
        <FixedHeaderDemo />
        </div>
<div className="component-demo">
        <h4>Sider</h4>
        <SiderDemo />
        </div>
<div className="component-demo">
        <h4>Responsive</h4>
        <ResponsiveDemo />
        </div>
<div className="component-demo">
        <h4>Header Sider</h4>
        <HeaderSiderDemo />
        </div>
<div className="component-demo">
        <h4>Header Sider22</h4>
        <HeaderSiderDemo22 />
        </div>
<div className="component-demo">
        <h4>Header Content Footer</h4>
        <HeaderContentFooterDemo />
        </div>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        