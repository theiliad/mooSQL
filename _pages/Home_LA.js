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
import API_URLS from '../_data/apis'

// Antd
import { Layout, Icon } from 'antd'
const { Header, Content, Footer, Sider } = Layout
import { Menu, Dropdown, Button } from 'antd'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
import { Spin, Progress, message } from 'antd'
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Avatar } from 'antd';
import { List, Table, Carousel } from 'antd'

// Charts
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Legend
} from 'recharts'

// Misc
import { formatNumbers } from '../_data/Tools.js'

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    filters: [{
      text: 'Joe',
      value: 'Joe',
    }, {
      text: 'Jim',
      value: 'Jim',
    }, {
      text: 'Submenu',
      value: 'Submenu',
      children: [{
        text: 'Green',
        value: 'Green',
      }, {
        text: 'Black',
        value: 'Black',
      }],
    }],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
  }, {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  }, {
    title: 'Address',
    dataIndex: 'address',
    filters: [{
      text: 'London',
      value: 'London',
    }, {
      text: 'New York',
      value: 'New York',
    }],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
}];
  
const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
}];
  
function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
}  

class HomePageLA extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: {
                stocksQuotes: true,
                cryptoQuotes: true
            }
        }
    }

    componentDidMount() {
        this.fetchStockQuotes()
    }

    fetchStockQuotes = () => {
        const quotesParser = (data) => {
            const result = []
            data.map(stock => {
                const keys = Object.keys(stock)
                result.push({
                    name: stock[keys[0]],
                    price: stock[keys[1]],
                    up: Math.random() >= 0.5
                })
            })

            return result
        }

        const updateState = (result) => {
            this.setState({
                ...this.state,
                quotes: {
                    ...this.state.quotes,
                    stocksQuotes: result
                },
                isLoading: {
                    ...this.state.isLoading,
                    stocksQuotes: false
                }
            })
        }

        axios.get(API_URLS.quotes.stocks)
        .then(response => {
            console.log(response.data)
            
            updateState(quotesParser(response.data["Stock Quotes"]))
        })
        .catch(error => {
            console.log(error)

            updateState(quotesParser(API_URLS.quotes.stocksMock["Stock Quotes"]))
        })
    }

    render() {
        const { isLoading, quotes } = this.state
        return (
            <div>
                <h4>Quick Statistics</h4>

                <Card bordered={false} className="top-stats">
                    <Row gutter={16} style={{ margin: 0 }}>
                        <Col className="gutter-row" xs={24} md={12} lg={8}>
                            <Link to=''>
                                <Avatar size="large" icon="safety" className="success" />

                                <div>
                                    <h5>Operational</h5>
                                    <p>72 systems</p>
                                </div>
                            </Link>
                        </Col>

                        <Col className="gutter-row" xs={24} md={12} lg={8}>
                            <Link to=''>
                                <Avatar size="large" icon="api" />

                                <div>
                                    <h5>API Usage</h5>
                                    <p>{formatNumbers(31759)}</p>
                                </div>
                            </Link>
                        </Col>

                        <Col className="gutter-row" xs={24} md={12} lg={8}>
                            <Link to=''>
                                <Avatar size="large" icon="calendar" />

                                <div>
                                    <h5>Sales</h5>
                                    <p>{formatNumbers(17213)} this month</p>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Card>

                <Card bordered={false} className="marginTop-30">
                    <Row gutter={16}>
                        <Col className="gutter-row" xs={24} md={24} lg={24}>
                            <Table columns={columns} dataSource={data} onChange={onChange} />
                        </Col>
                    </Row>
                </Card>

                {/*
                    Stock Quotes
                */}
                <h4 className="marginTop-60 marginBottom-20">Top Performing Tech Stocks</h4>
                <Spin spinning={isLoading.stocksQuotes}>
                    <div className="widget-core-links">
                        <Row gutter={16}>
                            {quotes && quotes.stocksQuotes.map((quote, index) =>
                                <Col key={`stockQuote-${index}`} className="gutter-row" xs={24} sm={12} md={8}>
                                    <div className="diamond-logo">
                                        <img src={require(`../img/demo_assets/logos/${quote.name}.svg`)} />
                                    </div>
                                    
                                    <div className="content">
                                        <p className="title">{quote.name} <Icon type={quote.up ? 'caret-up' : 'caret-down'} /></p>
                                        <p>${formatNumbers(quote.price)}</p>
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </div>
                </Spin>

                {/*
                    Crypto Quotes
                */}
                <h4 className="marginTop-30 marginBottom-20">Top Performing Cryptocurrencies</h4>
                <Spin spinning={isLoading.stocksQuotes}>
                    <div className="widget-core-links">
                        <Row gutter={16}>
                            {quotes && quotes.stocksQuotes.map((quote, index) =>
                                <Col key={`stockQuote-${index}`} className="gutter-row" xs={24} sm={12} md={8}>
                                    <div className="diamond-logo">
                                        <img src={require(`../img/demo_assets/logos/${quote.name}.svg`)} />
                                    </div>
                                    
                                    <div className="content">
                                        <p className="title">{quote.name} <Icon type={quote.up ? 'caret-up' : 'caret-down'} /></p>
                                        <p>${formatNumbers(quote.price)}</p>
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </div>
                </Spin>

                <Row gutter={16} className="marginTop-60">
                    <Col className="gutter-row" xs={24} md={12} lg={8}>
                        <h4 className="marginBottom-20">Post Views</h4>
                        
                        <Card
                            bordered={false}
                            className="widget bordered"
                            title={
                                <div className="head-container">
                                    <div className="title center-vertical">
                                        <a href="#">
                                            Change goal
                                        </a>
                                    </div>

                                    <div className="actions">
                                        <Button type='primary' size='large'>
                                            View Goal
                                        </Button>
                                    </div>
                                </div>
                            }
                        >
                            <Carousel className="light goals marginTop-30" autoplay>
                                <div>
                                    <Progress type="circle" percent={75} />

                                    <p>Total views today</p>
                                    <h4>{formatNumbers(2700)}</h4>
                                </div>

                                <div>
                                    <Progress type="circle" percent={90} />

                                    <p>Total views this week</p>
                                    <h4>{formatNumbers(17000)}</h4>
                                </div>
                            </Carousel>
                        </Card>
                    </Col>

                    {/* <Col className="gutter-row" xs={24} md={12} lg={8}>
                        <h4 className="marginBottom-20">Follow Trends</h4>
                        
                        <Card
                            title={
                                <div className="head-container">
                                    <div className="title">
                                        <Dropdown overlay={
                                            <Menu>
                                                <Menu.Item key="0">
                                                    <a href="http://www.alipay.com/">1st menu item</a>
                                                </Menu.Item>

                                                <Menu.Item key="1">
                                                    <a href="http://www.taobao.com/">2nd menu item</a>
                                                </Menu.Item>

                                                <Menu.Divider />
                                                
                                                <Menu.Item key="3">3rd menu item</Menu.Item>
                                            </Menu>
                                        } trigger={['click']}>
                                            <a className="ant-dropdown-link" href="#">
                                                December 2017 <Icon type="down" />
                                            </a>
                                        </Dropdown>
                                    </div>

                                    <div className="actions">
                                        <Dropdown overlay={widgetActionsMenu} placement="bottomRight" trigger={['click']}>
                                            <a className="ant-dropdown-link" href="#">
                                                <Icon type="setting" />
                                            </a>
                                        </Dropdown>
                                    </div>
                                </div>
                            }
                            bordered={false}
                            className="widget bordered"
                        >
                            <ResponsiveContainer width="100%" height={200}>
                                <BarChart
                                    width={500} height={300} data={followersData}
                                >
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />

                                    <Bar dataKey="follow" stackId="a" fill="#353d81" />
                                    <Bar dataKey="unfollow" stackId="a" fill="rgba(53, 61, 129, 0.6)" />
                                </BarChart>
                            </ResponsiveContainer>

                            <div className="spaced">
                                <p>
                                    <Icon type="sync" style={{ marginRight: 5 }} /> Just updated
                                </p>
                            </div>
                        </Card>
                    </Col> */}

                    <Col className="gutter-row" xs={24} md={12} lg={16}>
                        <h4 className="marginBottom-20">Sales</h4>
                        
                        <Card
                            bordered={false} style={{ height: 332 }}
                            className="gradient-primary center-absolute narrow dark marginTop-15"
                        >
                            <h3>Congragulations Mike</h3>

                            <p>You have gone 30% over your quotas this month! You've been added to this month's top agents page</p>

                            <Button size='large'>
                                Check it out
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

HomePageLA.propTypes = {}

export default
    compose(
        connect(
            (state) => ({
                auth: state.auth,
                localization: state.localization,
            }),
            // mapDispatchToProps
        )
    )(HomePageLA)