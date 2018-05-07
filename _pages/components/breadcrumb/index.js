import React from 'react'

    import BasicUsageDemo from './BasicUsageDemo.js'
import ReactRouterIntegrationDemo from './ReactRouterIntegrationDemo.js'
import WithAnIconDemo from './WithAnIconDemo.js'
import OtherRouterIntegrationDemo from './OtherRouterIntegrationDemo.js'
import ConfiguringTheSeparatorDemo from './ConfiguringTheSeparatorDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.

## When To Use

- When the system has more than two layers in a hierarchy.
- When you need to inform the user of where they are.
- When the user may need to navigate back to a higher level.
- When the application has multi-layer architecture.

## API

| Property | Description | Type | Optional | Default |
| -------- | ----------- | ---- | -------- | ------- |
| itemRender | Custom item renderer | (route, params, routes, paths) =&gt; ReactNode |  | - |
| params | Routing parameters | object |  | - |
| routes | The routing stack information of router | object[] |  | - |
| separator | Custom separator | string|ReactNode |  | \`\`\`/\`\`\` |

&gt; \`\`\`linkRender\`\`\` and \`\`\`nameRender\`\`\` were removed after \`\`\`antd@2.0\`\`\`, please use \`\`\`itemRender\`\`\` instead.

### Use with browserHistory

The link of Breadcrumb item targets \`\`\`#\`\`\` by default, you can use \`\`\`itemRender\`\`\` to make a \`\`\`browserHistory\`\`\` Link.

\`\`\`jsx import { Link } from 'react-router'; const routes = [{ path: 'index',  breadcrumbName: 'home' }, { path: 'first', breadcrumbName: 'first' }, { path: 'second', breadcrumbName: 'second' }]; function itemRender(route, params, routes, paths) { const last = routes.indexOf(route) === routes.length - 1; return last ? &lt;span&gt;{route.breadcrumbName}&lt;/span&gt; : &lt;Link to={paths.join('/')}&gt;{route.breadcrumbName}&lt;/Link&gt;; } return &lt;Breadcrumb itemRender={itemRender} routes={routes} /&gt;;\`\`\`
`
const expComponent = () => (
        <div>
            <h4>Breadcrumb</h4>
            <p>

A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Basic Usage" bordered={true}><BasicUsageDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="React Router Integration" bordered={true}><ReactRouterIntegrationDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="With An Icon" bordered={true}><WithAnIconDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Other Router Integration" bordered={true}><OtherRouterIntegrationDemo /></Card>
        </Col>
</Row>
<Row gutter={30}>
        <Col span={12}>
        <Card title="Configuring The Separator" bordered={true}><ConfiguringTheSeparatorDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        