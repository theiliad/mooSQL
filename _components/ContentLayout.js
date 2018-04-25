// React-related
import React from 'react'

// Antd
import { Layout } from 'antd'
const { Header, Content, Footer, Sider } = Layout

class ContentLayout extends React.Component {
    render() {
        const { sider, content, contentClass, className } = this.props
        return (
            <Layout className={className}>
                <Sider style={{ width: "300px" }}>
                    {sider}
                </Sider>

                <Layout>
                    <Content className={contentClass}>
                        {content}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}


ContentLayout.propTypes = {}

export default ContentLayout