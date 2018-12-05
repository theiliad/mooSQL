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
import API_URLS from '../../_data/apis'

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
import { List, Table, Modal } from 'antd';
import { Form, Input, InputNumber, AutoComplete, Select, Checkbox, Collapse } from 'antd'
const { Column } = Table
const Option = Select.Option
const FormItem = Form.Item
const Panel = Collapse.Panel

import { databaseRef, insertData, toArray } from "../../_data/firebase"

const relationships = ["==","<",">","<=",">=","!="]
const customPanelStyle = {
    background: '#eaeaf7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
};

class SearchFormComponent extends React.Component {
    validateThenSubmit = (e) => {
        e.preventDefault()

        this.props.form.validateFields((err, values) => {
            if (err) return

            this.props.onSubmit(values)
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        const { columns } = this.props

        return (
            <Form
                onSubmit={this.validateThenSubmit}
            >
                <Row gutter={32}>
                    <Col xs={24} md={12} lg={5}>
                        <FormItem label='Column'>
                            {getFieldDecorator("column", {
                                rules: [{
                                    required: true,
                                    message: "Please choose a column",
                                }],
                            })(
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a Column"
                                    OptionFilterProp="children"
                                    filterOption={(input, Option) => Option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    initialValue={columns && Object.keys(columns)[0]}
                                >
                                    {columns && Object.keys(columns).filter(column => columns[column].type == "int").map(column =>
                                        <Option value={column} key={`col-${column}`}>{column}</Option>)
                                    }
                                </Select>
                            )}
                        </FormItem>
                    </Col>

                    <Col xs={24} md={12} lg={5}>
                        <FormItem label='Relationship'>
                            {getFieldDecorator("relationship", {
                                rules: [{
                                    required: true,
                                    message: "Please choose a relationship",
                                }],
                            })(
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a Relationship"
                                    OptionFilterProp="children"
                                    filterOption={(input, Option) => Option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    initialValue={relationships[0]}
                                    onChange={val => this.setState({ ...this.state, searchRelationship: val })}
                                >
                                    {relationships.map(relationship =>
                                        <Option value={relationship} key={`col-${relationship}`}>{relationship}</Option>)
                                    }
                                </Select>
                            )}
                        </FormItem>
                    </Col>

                    <Col xs={24} md={12} lg={5}>
                        <FormItem label='Value'>
                            {getFieldDecorator("value", {
                                rules: [{
                                    required: true,
                                    message: "Please specify a value",
                                }],
                            })(
                                <Input autoComplete="false" placeholder="10" />
                            )}
                        </FormItem>
                    </Col>
                </Row>

                <Button type='primary' htmlType="submit" icon="search" onClick={this.props.search}>
                    Search
                </Button>
            </Form>
        )
    }
}

const SearchForm = Form.create()(SearchFormComponent)

class CreateTableComponent extends React.Component {
    state = {}

    validateThenSubmit = (e) => {
        e.preventDefault()

        this.props.form.validateFields((err, values) => {
            if (err) return

            this.props.onSubmit(values)
        })
    }

    render() {
        const { confirmLoading, columns } = this.props // State variables
        const { getFieldDecorator } = this.props.form

        return (
            <Form
                onSubmit={this.validateThenSubmit}
            >
                {columns && Object.keys(columns).map(columnName =>
                    <FormItem label={columnName} key={columnName}>
                        {getFieldDecorator(`${columnName}`, {
                            rules: [{
                                required: columns[columnName].null == false,
                                message: `Please provide a value for ${columnName}`,
                            }],
                        })(
                            <Input autoComplete="false" />
                        )}
                    </FormItem>
                )}

                <div className="alignRight">
                    <Button size='large' style={{ marginRight: 5 }} onClick={this.props.onCancel} disabled={confirmLoading}>
                        Cancel
                    </Button>

                    <Button size='large' type="primary" htmlType="submit" loading={confirmLoading}>
                        Create
                    </Button>
                </div>
            </Form>
        )
    }
}

const CreateTable = Form.create()(CreateTableComponent)

class DatabaseDetails extends React.Component {
    state = {
        visible: false,
        selectedRowKeys: [],
        searchCriteria: null
    };

    componentDidMount() {
        const { dbName, tableName } = this.props.match.params
        this.setState({
            ...this.state,
            dbName,
            tableName
        })

        databaseRef.child(`databases/${dbName}/tables/${tableName}`).once("value", snapshot => {
            this.setState({
                ...this.state,
                tableData: toArray(snapshot.val().data),
                orgTableData: toArray(snapshot.val().data),
                columns: snapshot.val().columns
            })
        })
    }

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    search = values => {
        const searchQuery = `${values.column} ${values.relationship} ${values.value}`
        this.setState({
            ...this.state,
            searchCriteria: searchQuery,
            tableData: this.state.orgTableData.filter(datum => eval(`datum["${values.column}"] ${values.relationship} ${values.value}`))
        })
    }

    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [{
                key: 'all-data',
                text: 'Select All Data',
                onSelect: () => {
                    this.setState({
                        selectedRowKeys: [...Array(46).keys()], // 0...45
                    });
                },
            }, {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }, {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }],
            onSelection: this.onSelection,
        };

        const { tableData, dbName, tableName, columns, searchCriteria } = this.state

        return (
            <div className="with-pattern">
                {tableData &&
                    <div>
                        <h2>
                            <Link to={`/databases/${dbName}`}>{dbName}</Link> > {tableName}
                        </h2>

                        <Layout className="sider-pro">
                            <Content><h4>{tableData.length} Rows{searchCriteria ? ` for search query (${searchCriteria})` : ''}</h4></Content>
                            <Sider>
                                <Button
                                    onClick={e => {
                                        this.setState({
                                            ...this.state,
                                            visible: !this.state.visible
                                        })
                                    }}
                                    size='large' type='primary' icon="plus"
                                >
                                    Insert Data
                                </Button>
                            </Sider>
                        </Layout>
                        
                        <Collapse bordered={false} className="marginTop-15">
                            <Panel header="Search & Filter" key="1" style={customPanelStyle}>
                                <SearchForm onSubmit={this.search} columns={columns} />
                            </Panel>
                        </Collapse>

                        <Card bordered={false} className="top-stats">
                            <Table rowSelection={rowSelection} dataSource={tableData}>
                                {columns && Object.keys(columns).map(columnName =>
                                    <Column
                                        title={columnName}
                                        dataIndex={columnName}
                                        key={columnName}
                                        render={(name, record) => (
                                            <span>
                                                {name}
                                            </span>
                                        )}
                                    />
                                )}
                            </Table>
                        </Card>

                        <Modal
                            title={`Insert Data into ${tableName}`}
                            visible={this.state.visible}
                            footer={null}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <CreateTable
                                columns={this.state.columns}
                                onCancel={this.handleCancel}
                                onSubmit={values => {
                                    this.setState({
                                        visible: false,
                                    }, _ => {
                                        insertData(dbName, tableName, values)
                                            .then(res => {
                                                message.success("Successfully Created")

                                                this.componentDidMount()
                                            })
                                            .catch(e => {
                                                console.log("Error", e)

                                                message.warning("Something went wrong")
                                            })
                                    })
                                }}
                            />
                        </Modal>
                    </div>
                }
            </div>
        )
    }
}

DatabaseDetails.propTypes = {}

export default DatabaseDetails