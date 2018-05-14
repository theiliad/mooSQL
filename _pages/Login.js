// React-related
import React from "react"

import { Layout } from "antd"
import { Row, Col } from 'antd'
import { Button } from 'antd'
import { Form, Icon, Input, Checkbox } from 'antd'
const FormItem = Form.Item
import { message } from 'antd'

import LOGO from "../img/logo.svg"

const correctCredentials = 'demo-admin'
class LoginPage extends React.Component {
    componentDidMount() {
        this.props.form.setFieldsValue({
            userName: correctCredentials,
            password: correctCredentials
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (values.userName === correctCredentials && values.password === correctCredentials) {
                    message.success('Welcome')


                } else {
                    message.error('Wrong credentials!')
                }
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form

        return (
            <Layout className="layout login-page">
                <Row>
                    <Col span={12}>
                        <div className="absolute-center">
                            <img src={LOGO} className="logo" />

                            <p>Core admin is a premium React application.</p>

                            <p>The dashboard will let you browse through the various features of the Core Admin application.</p>

                            <Button type="primary" className="ghost">Read More</Button>

                            <p className="marginTop-30" style={{ opacity: 0.6 }}>&copy; Copyright 2018. All rights reserved</p>
                        </div>
                    </Col>

                    <Col className="white-bg" span={12}>
                        <div className="absolute-center">
                            <h3 style={{ margin: 0 }}>Welcome!</h3>
                            <p style={{ fontWeight: 'bold', opacity: 0.8 }}>Username & password: {correctCredentials}</p>

                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <FormItem>
                                    {getFieldDecorator('userName', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                    )}
                                </FormItem>

                                <FormItem>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your password!' }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(
                                        <Checkbox>Remember me</Checkbox>
                                    )}

                                    <a className="login-form-forgot" href="">Forgot password</a>

                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                </FormItem>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default Form.create()(LoginPage)