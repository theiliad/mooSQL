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
import { Form, Input, InputNumber, AutoComplete, Select, Checkbox } from 'antd'
const { Column } = Table
const Option = Select.Option
const FormItem = Form.Item

import { databaseRef, insertData, toArray } from "../../_data/firebase"

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
        selectedRowKeys: []
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

        const { tableData, dbName, tableName, columns } = this.state

        return (
            <div className="with-pattern">
                {tableData &&
                    <div>
                        <h2>
                            <Link to={`/databases/${dbName}`}>{dbName}</Link> > {tableName}</h2>
                        <Layout className="sider-pro">
                            <Content><h4>{tableData.length} Rows</h4></Content>
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