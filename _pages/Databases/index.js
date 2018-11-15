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
import { Form, Input, InputNumber, AutoComplete, Select } from 'antd'
const { Column } = Table
const Option = Select.Option
const FormItem = Form.Item

import { databaseRef, addDB, toArray } from "../../_data/firebase"

const collations = [
    "armscii8_bin",
    "armscii8_general_ci",
    "armscii8_general_nopad_ci",
    "armscii8_nopad_bin",
    "ascii_bin",
    "ascii_general_ci",
    "ascii_general_nopad_ci",
    "ascii_nopad_bin",
    "big5_bin",
    "big5_chinese_ci",
    "big5_chinese_nopad_ci",
    "big5_nopad_bin",
    "binary",
    "cp1250_bin",
    "cp1250_croatian_ci",
    "cp1250_czech_cs",
    "cp1250_general_ci",
    "cp1250_general_nopad_ci",
    "cp1250_nopad_bin",
    "cp1250_polish_ci",
    "cp1251_bin",
    "cp1251_bulgarian_ci",
    "cp1251_general_ci",
    "cp1251_general_cs",
    "cp1251_general_nopad_ci",
    "cp1251_nopad_bin",
    "cp1251_ukrainian_ci",
    "cp1256_bin",
    "cp1256_general_ci",
    "cp1256_general_nopad_ci",
    "cp1256_nopad_bin",
    "cp1257_bin",
    "cp1257_general_ci",
    "cp1257_general_nopad_ci",
    "cp1257_lithuanian_ci",
    "cp1257_nopad_bin",
    "cp850_bin",
    "cp850_general_ci",
    "cp850_general_nopad_ci",
    "cp850_nopad_bin",
    "cp852_bin",
    "cp852_general_ci",
    "cp852_general_nopad_ci",
    "cp852_nopad_bin",
    "cp866_bin",
    "cp866_general_ci",
    "cp866_general_nopad_ci",
    "cp866_nopad_bin",
    "cp932_bin",
    "cp932_japanese_ci",
    "cp932_japanese_nopad_ci",
    "cp932_nopad_bin",
    "dec8_bin",
    "dec8_nopad_bin",
    "dec8_swedish_ci",
    "dec8_swedish_nopad_ci",
    "eucjpms_bin",
    "eucjpms_japanese_ci",
    "eucjpms_japanese_nopad_ci",
    "eucjpms_nopad_bin",
    "euckr_bin",
    "euckr_korean_ci",
    "euckr_korean_nopad_ci",
    "euckr_nopad_bin",
    "gb2312_bin",
    "gb2312_chinese_ci",
    "gb2312_chinese_nopad_ci",
    "gb2312_nopad_bin",
    "gbk_bin",
    "gbk_chinese_ci",
    "gbk_chinese_nopad_ci",
    "gbk_nopad_bin",
    "geostd8_bin",
    "geostd8_general_ci",
    "geostd8_general_nopad_ci",
    "geostd8_nopad_bin",
    "greek_bin",
    "greek_general_ci",
    "greek_general_nopad_ci",
    "greek_nopad_bin",
    "hebrew_bin",
    "hebrew_general_ci",
    "hebrew_general_nopad_ci",
    "hebrew_nopad_bin",
    "hp8_bin",
    "hp8_english_ci",
    "hp8_english_nopad_ci",
    "hp8_nopad_bin",
    "keybcs2_bin",
    "keybcs2_general_ci",
    "keybcs2_general_nopad_ci",
    "keybcs2_nopad_bin",
    "koi8r_bin",
    "koi8r_general_ci",
    "koi8r_general_nopad_ci",
    "koi8r_nopad_bin",
    "koi8u_bin",
    "koi8u_general_ci",
    "koi8u_general_nopad_ci",
    "koi8u_nopad_bin",
    "latin1_bin",
    "latin1_danish_ci",
    "latin1_general_ci",
    "latin1_general_cs",
    "latin1_german1_ci",
    "latin1_german2_ci",
    "latin1_nopad_bin",
    "latin1_spanish_ci",
    "latin1_swedish_ci",
    "latin1_swedish_nopad_ci",
    "latin2_bin",
    "latin2_croatian_ci",
    "latin2_czech_cs",
    "latin2_general_ci",
    "latin2_general_nopad_ci",
    "latin2_hungarian_ci",
    "latin2_nopad_bin",
    "latin5_bin",
    "latin5_nopad_bin",
    "latin5_turkish_ci",
    "latin5_turkish_nopad_ci",
    "latin7_bin",
    "latin7_estonian_cs",
    "latin7_general_ci",
    "latin7_general_cs",
    "latin7_general_nopad_ci",
    "latin7_nopad_bin",
    "macce_bin",
    "macce_general_ci",
    "macce_general_nopad_ci",
    "macce_nopad_bin",
    "macroman_bin",
    "macroman_general_ci",
    "macroman_general_nopad_ci",
    "macroman_nopad_bin",
    "sjis_bin",
    "sjis_japanese_ci",
    "sjis_japanese_nopad_ci",
    "sjis_nopad_bin",
    "swe7_bin",
    "swe7_nopad_bin",
    "swe7_swedish_ci",
    "swe7_swedish_nopad_ci",
    "tis620_bin",
    "tis620_nopad_bin",
    "tis620_thai_ci",
    "tis620_thai_nopad_ci",
    "ucs2_bin",
    "ucs2_croatian_ci",
    "ucs2_croatian_mysql561_ci",
    "ucs2_czech_ci",
    "ucs2_danish_ci",
    "ucs2_esperanto_ci",
    "ucs2_estonian_ci",
    "ucs2_general_ci",
    "ucs2_general_mysql500_ci",
    "ucs2_general_nopad_ci",
    "ucs2_german2_ci",
    "ucs2_hungarian_ci",
    "ucs2_icelandic_ci",
    "ucs2_latvian_ci",
    "ucs2_lithuanian_ci",
    "ucs2_myanmar_ci",
    "ucs2_nopad_bin",
    "ucs2_persian_ci",
    "ucs2_polish_ci",
    "ucs2_roman_ci",
    "ucs2_romanian_ci",
    "ucs2_sinhala_ci",
    "ucs2_slovak_ci",
    "ucs2_slovenian_ci",
    "ucs2_spanish2_ci",
    "ucs2_spanish_ci",
    "ucs2_swedish_ci",
    "ucs2_thai_520_w2",
    "ucs2_turkish_ci",
    "ucs2_unicode_520_ci",
    "ucs2_unicode_520_nopad_ci",
    "ucs2_unicode_ci",
    "ucs2_unicode_nopad_ci",
    "ucs2_vietnamese_ci",
    "ujis_bin",
    "ujis_japanese_ci",
    "ujis_japanese_nopad_ci",
    "ujis_nopad_bin",
    "utf16_bin",
    "utf16_croatian_ci",
    "utf16_croatian_mysql561_ci",
    "utf16_czech_ci",
    "utf16_danish_ci",
    "utf16_esperanto_ci",
    "utf16_estonian_ci",
    "utf16_general_ci",
    "utf16_general_nopad_ci",
    "utf16_german2_ci",
    "utf16_hungarian_ci",
    "utf16_icelandic_ci",
    "utf16_latvian_ci",
    "utf16_lithuanian_ci",
    "utf16_myanmar_ci",
    "utf16_nopad_bin",
    "utf16_persian_ci",
    "utf16_polish_ci",
    "utf16_roman_ci",
    "utf16_romanian_ci",
    "utf16_sinhala_ci",
    "utf16_slovak_ci",
    "utf16_slovenian_ci",
    "utf16_spanish2_ci",
    "utf16_spanish_ci",
    "utf16_swedish_ci",
    "utf16_thai_520_w2",
    "utf16_turkish_ci",
    "utf16_unicode_520_ci",
    "utf16_unicode_520_nopad_ci",
    "utf16_unicode_ci",
    "utf16_unicode_nopad_ci",
    "utf16_vietnamese_ci",
    "utf16le_bin",
    "utf16le_general_ci",
    "utf16le_general_nopad_ci",
    "utf16le_nopad_bin",
    "utf32_bin",
    "utf32_croatian_ci",
    "utf32_croatian_mysql561_ci",
    "utf32_czech_ci",
    "utf32_danish_ci",
    "utf32_esperanto_ci",
    "utf32_estonian_ci",
    "utf32_general_ci",
    "utf32_general_nopad_ci",
    "utf32_german2_ci",
    "utf32_hungarian_ci",
    "utf32_icelandic_ci",
    "utf32_latvian_ci",
    "utf32_lithuanian_ci",
    "utf32_myanmar_ci",
    "utf32_nopad_bin",
    "utf32_persian_ci",
    "utf32_polish_ci",
    "utf32_roman_ci",
    "utf32_romanian_ci",
    "utf32_sinhala_ci",
    "utf32_slovak_ci",
    "utf32_slovenian_ci",
    "utf32_spanish2_ci",
    "utf32_spanish_ci",
    "utf32_swedish_ci",
    "utf32_thai_520_w2",
    "utf32_turkish_ci",
    "utf32_unicode_520_ci",
    "utf32_unicode_520_nopad_ci",
    "utf32_unicode_ci",
    "utf32_unicode_nopad_ci",
    "utf32_vietnamese_ci",
    "utf8_bin",
    "utf8_croatian_ci",
    "utf8_croatian_mysql561_ci",
    "utf8_czech_ci",
    "utf8_danish_ci",
    "utf8_esperanto_ci",
    "utf8_estonian_ci",
    "utf8_general_ci",
    "utf8_general_mysql500_ci",
    "utf8_general_nopad_ci",
    "utf8_german2_ci",
    "utf8_hungarian_ci",
    "utf8_icelandic_ci",
    "utf8_latvian_ci",
    "utf8_lithuanian_ci",
    "utf8_myanmar_ci",
    "utf8_nopad_bin",
    "utf8_persian_ci",
    "utf8_polish_ci",
    "utf8_roman_ci",
    "utf8_romanian_ci",
    "utf8_sinhala_ci",
    "utf8_slovak_ci",
    "utf8_slovenian_ci",
    "utf8_spanish2_ci",
    "utf8_spanish_ci",
    "utf8_swedish_ci",
    "utf8_thai_520_w2",
    "utf8_turkish_ci",
    "utf8_unicode_520_ci",
    "utf8_unicode_520_nopad_ci",
    "utf8_unicode_ci",
    "utf8_unicode_nopad_ci",
    "utf8_vietnamese_ci",
    "utf8mb4_bin",
    "utf8mb4_croatian_ci",
    "utf8mb4_croatian_mysql561_ci",
    "utf8mb4_czech_ci",
    "utf8mb4_danish_ci",
    "utf8mb4_esperanto_ci",
    "utf8mb4_estonian_ci",
    "utf8mb4_general_ci",
    "utf8mb4_general_nopad_ci",
    "utf8mb4_german2_ci",
    "utf8mb4_hungarian_ci",
    "utf8mb4_icelandic_ci",
    "utf8mb4_latvian_ci",
    "utf8mb4_lithuanian_ci",
    "utf8mb4_myanmar_ci",
    "utf8mb4_nopad_bin",
    "utf8mb4_persian_ci",
    "utf8mb4_polish_ci",
    "utf8mb4_roman_ci",
    "utf8mb4_romanian_ci",
    "utf8mb4_sinhala_ci",
    "utf8mb4_slovak_ci",
    "utf8mb4_slovenian_ci",
    "utf8mb4_spanish2_ci",
    "utf8mb4_spanish_ci",
    "utf8mb4_swedish_ci",
    "utf8mb4_thai_520_w2",
    "utf8mb4_turkish_ci",
    "utf8mb4_unicode_520_ci",
    "utf8mb4_unicode_520_nopad_ci",
    "utf8mb4_unicode_ci",
    "utf8mb4_unicode_nopad_ci",
    "utf8mb4_vietnamese_ci"
 ]


class CreateDatabaseComponent extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form
        console.log(this.props)
        return (
            <Form
                onSubmit={e => {
                    if (e) e.preventDefault()

                    this.props.form.validateFields((err, values) => {
                        if (err) return
                        
                        this.props.onSubmit(values)
                    })
                }}
            >
                <FormItem label='Database Name'>
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true,
                            message: 'Please provide a database name',
                        }],
                    })(
                        <Input autoComplete="false" placeholder="Bayview Secondary School" />
                    )}
                </FormItem>
                
                <FormItem label='Collation'>
                    {getFieldDecorator('collation', {
                        rules: [{
                            required: true,
                            message: 'Please choose a collation',
                        }],
                    })(
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a Collation"
                            OptionFilterProp="children"
                            filterOption={(input, Option) => Option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            {collations.map(collation => <Option value={collation} key={`col-${collation}`}>{collation}</Option>)}
                        </Select>
                    )}
                </FormItem>

                <Button size='large' style={{ marginRight: 5 }} onClick={this.props.onCancel}>
                    Cancel
                </Button>

                <Button size='large' type="primary" htmlType="submit">
                    Create
                </Button>
            </Form>
        )
    }
}

const CreateDatabase = Form.create()(CreateDatabaseComponent)

class Databases extends React.Component {
    state = {
        visible: false,
        selectedRowKeys: []
    };

    componentDidMount() {
        databaseRef.child("databases").once("value", snapshot => {
            this.setState({
                ...this.state,
                tableData: toArray(snapshot.val(), "tables")
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

        const { tableData } = this.state

        return (
            <div className="with-pattern">
                {tableData &&
                    <div>
                        <Layout className="sider-pro">
                            <Content><h4>{tableData.length} Databases</h4></Content>
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
                                    New Database
                                </Button>
                            </Sider>
                        </Layout>

                        <Card bordered={false} className="marginTop-15">
                            <Table rowSelection={rowSelection} dataSource={tableData}>
                                <Column
                                    title="Name"
                                    dataIndex="keyName"
                                    key="name"
                                    render={(name, record) => (
                                        <span>
                                            <Link to={`/databases/${record.keyName}`}>
                                                {name}
                                            </Link>
                                        </span>
                                    )}
                                />

                                <Column
                                    title="# of Tables"
                                    dataIndex="numCount"
                                    key="tables"
                                    render={(tables, record) => (
                                        <span>
                                            <Link to={`/databases/${record.keyName}`}>
                                                {tables}
                                            </Link>
                                        </span>
                                    )}
                                />
                            </Table>
                        </Card>

                        <Modal
                            title="Create a New Database"
                            visible={this.state.visible}
                            footer={null}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <CreateDatabase
                                onCancel={this.handleCancel}
                                onSubmit={values => {
                                    this.setState({
                                        visible: false,
                                    }, _ => {
                                        // const oldData = tableData
                                        // oldData.push({
                                        //     key: oldData[oldData.length - 1].key + 1,
                                        //     name: values.name,
                                        //     tables: 0
                                        // })

                                        addDB(values.name, values.collation)
                                            .then(res => {
                                                // this.setState({
                                                //     ...this.state,
                                                //     oldData
                                                // }, () => {
                                                    message.success("Successfully Created")
        
                                                    this.componentDidMount()
                                                // })
                                            })
                                            .catch(e => {
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

Databases.propTypes = {}

export default Databases