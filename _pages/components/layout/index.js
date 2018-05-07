import React from 'react'

    import BasicStructureDemo from './BasicStructureDemo.js'
import CustomTriggerDemo from './CustomTriggerDemo.js'
import FixedSiderDemo from './FixedSiderDemo.js'
import SiderDemo from './SiderDemo.js'
import FixedHeaderDemo from './FixedHeaderDemo.js'
import HeaderSiderDemo from './HeaderSiderDemo.js'
import HeaderSiderDemo from './HeaderSiderDemo.js'
import ResponsiveDemo from './ResponsiveDemo.js'
import HeaderContentFooterDemo from './HeaderContentFooterDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Handling the overall layout of a page.

## Specification

### Size

The first level navigation is inclined left near a logo, and the secondary menu is inclined right.

- Top Navigation (almost systems): the height of the first level navigation \`\`\`64px\`\`\`, the second level navigation \`\`\`48px\`\`\`.
- Top Navigation(contents page): the height of the first level navigation \`\`\`80px\`\`\`, the second level navigation \`\`\`56px\`\`\`.
- Calculation formula of a top navigation: \`\`\`48+8n\`\`\`.
- Calculation formula of an aside navigation: \`\`\`200+8n\`\`\`.

### Interaction rules

- The first level navigation and the last level navigation should be distincted by visualization;
- The current item should have the highest priority of visualization;
- When the current navigation item is collapsed, the stlye of the current navigation item will be applied to its parent level;
- The left side navigation bar has support for both the accordion and expanding styles, you can choose the one that fits your case best.

## Visualization rules

Style of a navigation should conform to its level.

- <strong>Emphasis by colorblock</strong>

When background color is a deep color, you can use this pattern for the parent level navigation item of current page.

- <strong>The highlight match stick</strong>

When background color is a light color, you can use this pattern for the current page navigation item, we recommed using it for the last item of the navigation path.

- <strong>Hightlighted font</strong>

From the visualization aspect, hightlighted font is stronger than colorblock, this pattern is often used for the parent level of the current item.

- <strong>Enlarge the size of the font</strong>

\`\`\`12px\`\`\`、\`\`\`14px\`\`\` is a standard font size of navigations，\`\`\`14px\`\`\` is used for the first and the second level of the navigation. You can choose a appropriate font size in terms of the level of your navigation.

## Component Overview

- \`\`\`Layout\`\`\`: The layout wrapper, in which \`\`\`Header\`\`\` \`\`\`Sider\`\`\` \`\`\`Content\`\`\` \`\`\`Footer\`\`\` or \`\`\`Layout\`\`\` itself can be nested, and can be placed in any parent container.
- \`\`\`Header\`\`\`: The top layout with default style, in which any element can be nested, and must be placed in \`\`\`Layout\`\`\`.
- \`\`\`Sider\`\`\`: The sidebar with default style and basic functions, in which any element can be nested, and must be placed in \`\`\`Layout\`\`\`.
- \`\`\`Content\`\`\`: The content layout with default style, in which any element can be nested, and must be placed in \`\`\`Layout\`\`\`.
- \`\`\`Footer\`\`\`: The bottom layout with default style, in which any element can be nested, and must be placed in \`\`\`Layout\`\`\`.

&gt; Based on \`\`\`flex layout\`\`\`, please pay attention to the <a href="http://caniuse.com/#search=flex">compatibility</a>.

## API

\`\`\`jsx &lt;Layout&gt; &lt;Header&gt;header&lt;/Header&gt; &lt;Layout&gt; &lt;Sider&gt;left sidebar&lt;/Sider&gt; &lt;Content&gt;main content&lt;/Content&gt; &lt;Sider&gt;right sidebar&lt;/Sider&gt; &lt;/Layout&gt; &lt;Footer&gt;footer&lt;/Footer&gt; &lt;/Layout&gt;\`\`\`

### Layout

The wrapper.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| className | container className | string | - |
| style | to customize the styles | object | - |
| hasSider | whether contain Sider in children, don't have to assign it normally. Useful in ssr avoid style flickering | boolean | - |

&gt; APIs of \`\`\`Layout.Header\`\`\` \`\`\`Layout.Footer\`\`\` \`\`\`Layout.Content\`\`\` are the same as that of \`\`\`Layout\`\`\`.

### Layout.Sider

The sidebar.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| breakpoint | <a href="/components/grid#api">breakpoints</a> of the responsive layout | Enum { 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' } | - |
| className | container className | string | - |
| collapsed | to set the current status | boolean | - |
| collapsedWidth | width of the collapsed sidebar, by setting to \`\`\`0\`\`\` a special trigger will appear | number | 64 |
| collapsible | whether can be collapsed | boolean | false |
| defaultCollapsed | to set the initial status | boolean | false |
| reverseArrow | reverse direction of arrow, for a sider that expands from the right | boolean | false |
| style | to customize the styles | object | - |
| trigger | specify the customized trigger, set to null to hide the trigger | string|ReactNode | - |
| width | width of the sidebar | number|string | 200 |
| onCollapse | the callback function, executed by clicking the trigger or activating the responsive layout | (collapsed, type) =&gt; {} | - |

#### breakpoint width

\`\`\`js { xs: '480px', sm: '576px', md: '768px', lg: '992px', xl: '1200px', xxl: '1600px', }\`\`\`
`
const expComponent = () => (
        <div>
            <h4>Layout</h4>
            <p>

Handling the overall layout of a page.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Basic Structure" bordered={true}><BasicStructureDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Custom Trigger" bordered={true}><CustomTriggerDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Fixed Sider" bordered={true}><FixedSiderDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Sider" bordered={true}><SiderDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Fixed Header" bordered={true}><FixedHeaderDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Header Sider" bordered={true}><HeaderSiderDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Header Sider" bordered={true}><HeaderSiderDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Responsive" bordered={true}><ResponsiveDemo /></Card>
        </Col>
</Row>
<Row gutter={30}>
        <Col span={12}>
        <Card title="Header Content Footer" bordered={true}><HeaderContentFooterDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        