import React from 'react'

    import AllComponentsDemo from './AllComponentsDemo.js'
import LocalizationDemo from './LocalizationDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

\`\`\`LocaleProvider\`\`\` provides a uniform localization support for built-in text of components.

## Usage

\`\`\`LocaleProvider\`\`\` takes use of <a href="https://facebook.github.io/react/docs/context.html">context</a>, a feature of React, to accomplish global effectiveness by wrapping the app only once.

\`\`\`jsx import { LocaleProvider } from 'antd'; import fr_FR from 'antd/lib/locale-provider/fr_FR'; import 'moment/locale/fr'; ... return &lt;LocaleProvider locale={fr_FR}&gt;&lt;App /&gt;&lt;/LocaleProvider&gt;;\`\`\`

We provide some locale like English, Chinese, Russian, German, French and etc, all locale packages can be found in <a href="https://github.com/ant-design/ant-design/blob/master/components/locale-provider/">here</a>.

Note: if you need to use antd's UMD dist file, please use \`\`\`antd/dist/antd-with-locales.js\`\`\` and corresponding moment locale:

\`\`\`jsx const { LocaleProvider, locales } = window.antd; ... return &lt;LocaleProvider locale={locales.fr_FR}&gt;&lt;App /&gt;&lt;/LocaleProvider&gt;;\`\`\`

### Add a new language

If you can't find your language, you are welcome to create a locale package based on <a href="https://github.com/ant-design/ant-design/blob/master/components/locale-provider/en_US.tsx">en_US</a> and send us a pull request.

### Other localization needs

This component aims for localization of the built-in text, if you want to support other documents, we recommend using <a href="https://github.com/yahoo/react-intl">react-intl</a>, refer to <a href="http://github.com/ant-design/intl-example">Intl demo 1</a> and <a href="http://yiminghe.me/learning-react/examples/react-intl.html?locale=en-US">Intl demo 2</a>.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| locale | language package setting, you can find the packages in this path: \`\`\`antd/lib/locale-provider/\`\`\` | object | - |
`
const expComponent = () => (
        <div>
            <h4>Locale Provider</h4>
            <p>

`LocaleProvider` provides a uniform localization support for built-in text of components.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="All Components" bordered={true}><AllComponentsDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Localization" bordered={true}><LocalizationDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        