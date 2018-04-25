import React from 'react'

    import BasicGridDemo from './BasicGridDemo.js'
import FlexAlignmentDemo from './FlexAlignmentDemo.js'
import FlexOrderDemo from './FlexOrderDemo.js'
import FlexLayoutDemo from './FlexLayoutDemo.js'
import ColumnOffsetDemo from './ColumnOffsetDemo.js'
import GridGutterDemo from './GridGutterDemo.js'
import PlaygroundDemo from './PlaygroundDemo.js'
import MoreResponsiveDemo from './MoreResponsiveDemo.js'
import ResponsiveDemo from './ResponsiveDemo.js'
import GridSortDemo from './GridSortDemo.js'
    import { Card } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

24 Grids System。

## Design concept

&lt;div class=&quot;grid-demo&quot;&gt;
&lt;div class=&quot;ant-row demo-row&quot;&gt;
&lt;div class=&quot;ant-col-24 demo-col demo-col-1&quot;&gt;
100%
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;ant-row demo-row&quot;&gt;
&lt;div class=&quot;ant-col-6 demo-col demo-col-2&quot;&gt;
25%
&lt;/div&gt;
&lt;div class=&quot;ant-col-6 demo-col demo-col-3&quot;&gt;
25%
&lt;/div&gt;
&lt;div class=&quot;ant-col-6 demo-col demo-col-2&quot;&gt;
25%
&lt;/div&gt;
&lt;div class=&quot;ant-col-6 demo-col demo-col-3&quot;&gt;
25%
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;ant-row demo-row&quot;&gt;
&lt;div class=&quot;ant-col-8 demo-col demo-col-4&quot;&gt;
33.33%
&lt;/div&gt;
&lt;div class=&quot;ant-col-8 demo-col demo-col-5&quot;&gt;
33.33%
&lt;/div&gt;
&lt;div class=&quot;ant-col-8 demo-col demo-col-4&quot;&gt;
33.33%
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;ant-row demo-row&quot;&gt;
&lt;div class=&quot;ant-col-12 demo-col demo-col-1&quot;&gt;
50%
&lt;/div&gt;
&lt;div class=&quot;ant-col-12 demo-col demo-col-3&quot;&gt;
50%
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;ant-row demo-row&quot;&gt;
&lt;div class=&quot;ant-col-16 demo-col demo-col-4&quot;&gt;
66.66%
&lt;/div&gt;
&lt;div class=&quot;ant-col-8 demo-col demo-col-5&quot;&gt;
33.33%
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;

In most business situations, Ant Design needs to solve a lot of information storage problems within the design area, so based on 12 Grids System, we divided the design area into 24 aliquots.

We name the divided area 'box'. We suggest four boxes for horizontal arrangement at most, one at least. Boxes are proportional to the entire screen as shown in the picture above. To ensure a high level of visual comfort, we customize the typography inside of the box based on the box unit.

## Outline

In the grid system, we define the frame outside the information area based on \`\`\`row\`\`\` and \`\`\`column\`\`\`, to ensure that every area can have stable arrangement.

Following is a brief look at how it works:

- Establish a set of \`\`\`column\`\`\` in the horizontal space defined by \`\`\`row\`\`\` (abbreviated col)
- Your content elements should be placed directly in the \`\`\`col\`\`\`, and only \`\`\`col\`\`\` should be placed directly in \`\`\`row\`\`\`
- The column grid system is a value of 1-24 to represent its range spans. For example, three columns of equal width can be created by \`\`\`.col-8\`\`\` (\`\`\`span=8\`\`\`).
- If the sum of \`\`\`col\`\`\` spans in a \`\`\`row\`\`\` are more than 24, then the overflowing \`\`\`col\`\`\` as a whole will start a new line arrangement.

## Flex layout

Our grid systems support Flex layout to allow the elements within the parent to be aligned horizontally - left, center, right, wide arrangement, and decentralized arrangement. The Grid system also supports vertical alignment - top aligned, vertically centered, bottom-aligned. You can also define the order of elements by using \`\`\`order\`\`\`.

Flex layout uses a 24 grid layout to define the width of each &quot;box&quot;, but does not rigidly adhere to the grid layout.

## API

If the Ant Design grid layout component does not meet your needs, you can use the excellent layout components of the community:

- <a href="http://roylee0704.github.io/react-flexbox-grid/">react-flexbox-grid</a>
- <a href="https://github.com/whoisandy/react-blocks/">react-blocks</a>

### Row

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| align | the vertical alignment of the flex layout: \`\`\`top\`\`\` \`\`\`middle\`\`\` \`\`\`bottom\`\`\` | string | \`\`\`top\`\`\` |
| gutter | spacing between grids, could be a number or a object like \`\`\`{ xs: 8, sm: 16, md: 24}\`\`\` | number/object | 0 |
| justify | horizontal arrangement of the flex layout: \`\`\`start\`\`\` \`\`\`end\`\`\` \`\`\`center\`\`\` \`\`\`space-around\`\`\` \`\`\`space-between\`\`\` | string | \`\`\`start\`\`\` |
| type | layout mode, optional \`\`\`flex\`\`\`, <a href="http://caniuse.com/#search=flex">browser support</a> | string |  |

### Col

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| offset | the number of cells to offset Col from the left | number | 0 |
| order | raster order, used in \`\`\`flex\`\`\` layout mode | number | 0 |
| pull | the number of cells that raster is moved to the left | number | 0 |
| push | the number of cells that raster is moved to the right | number | 0 |
| span | raster number of cells to occupy, 0 corresponds to \`\`\`display: none\`\`\` | number | none |
| xs | \`\`\`&lt;576px\`\`\` and also default setting, could be a \`\`\`span\`\`\` value or an object containing above props | number|object | - |
| sm | \`\`\`≥576px\`\`\`, could be a \`\`\`span\`\`\` value or an object containing above props | number|object | - |
| md | \`\`\`≥768px\`\`\`, could be a \`\`\`span\`\`\` value or an object containing above props | number|object | - |
| lg | \`\`\`≥992px\`\`\`, could be a \`\`\`span\`\`\` value or an object containing above props | number|object | - |
| xl | \`\`\`≥1200px\`\`\`, could be a \`\`\`span\`\`\` value or an object containing above props | number|object | - |
| xxl | \`\`\`≥1600px\`\`\`, could be a \`\`\`span\`\`\` value or an object containing above props | number|object | - |

The breakpoints of responsive grid follow <a href="https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints">BootStrap 4 media queries rules</a>(not including \`\`\`occasionally part\`\`\`).
`
const expComponent = () => (
        <div>
            <h4>Grid</h4>

            <Card bordered={false}>
                        <BasicGridDemo />
        <FlexAlignmentDemo />
        <FlexOrderDemo />
        <FlexLayoutDemo />
        <ColumnOffsetDemo />
        <GridGutterDemo />
        <PlaygroundDemo />
        <MoreResponsiveDemo />
        <ResponsiveDemo />
        <GridSortDemo />

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        