// React-related
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    IndexRoute,
    Redirect
} from 'react-router-dom'
import PropTypes from 'prop-types'
import { instanceOf } from 'prop-types'
import { compose } from 'redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Networking
import axios from 'axios'

// Antd
import { Layout, Icon } from 'antd'
const { Header, Content, Footer, Sider } = Layout
import { Menu, Dropdown, Button } from 'antd'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
import { Spin, message } from 'antd'
import ContentLayout from './ContentLayout'
import { Card } from 'antd';
import { Row, Col } from 'antd';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h4>Comments</h4>

                <Card bordered={false}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

                <Row gutter={16} className="marginTop-30">
                    <Col className="gutter-row" span={18}>
                        <div className="gutter-box">col-9</div>
                    </Col>

                    <Col className="gutter-row" span={6}>
                        <Card bordered={false}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

HomeComponent.propTypes = {}

export default
    compose(
        connect(
            (state) => ({
                auth: state.auth,
                localization: state.localization,
            }),
            // mapDispatchToProps
        )
    )(HomeComponent)