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
import { Avatar } from 'antd';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const data = [
  { name: 'Page A', uv: 4000, pv: 4800, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 3800, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4800, amt: 2100 },
]

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
                        <Card bordered={false}>
                            <AreaChart
                                width={730} height={250} data={data}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                            >
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2196F3" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="#6c78e4" stopOpacity={0}/>
                                    </linearGradient>
                                    
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ff9a8d" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="#ff6f90" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>

                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#2196F3" fillOpacity={1} strokeWidth={2} fill="url(#colorUv)" />
                                <Area type="monotone" dataKey="pv" stroke="#ff9a8d" fillOpacity={1} strokeWidth={2} fill="url(#colorPv)" />
                            </AreaChart>
                        </Card>
                    </Col>

                    <Col className="gutter-row" span={6}>
                        <Link to={'/'}>
                            <Card bordered={false} className="hoverable gradient-primary circle-figure">
                                <div className="circle light">
                                    <span>23</span>

                                    <Icon type="right" />
                                </div>

                                <div className="content">
                                    <h3>Comments</h3>

                                    <p>From xuvaa61, mike23 and 7 others</p>
                                </div>
                            </Card>
                        </Link>

                        <Link to={'/'}>
                            <Card bordered={false} className="hoverable gradient-secondary circle-figure marginTop-15">
                                <div className="circle light">
                                    <span>77</span>

                                    <Icon type="right" />
                                </div>

                                <div className="content">
                                    <h3>New Jobs</h3>

                                    <p>By Hooli, Pied Piper and 63 others</p>
                                </div>
                            </Card>
                        </Link>
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