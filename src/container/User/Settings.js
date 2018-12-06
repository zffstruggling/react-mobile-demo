import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import './setting.scss';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


class Settings extends React.Component{
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    }

    render() {

        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <div className="setting">
                <header><Link to="/login" className="goBack"><Icon type="left" /></Link>注册</header>
                <div className="settingBox">
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem
                            {...formItemLayout}
                            label="账号"
                        >
                            {getFieldDecorator('userName', {
                                rules: [{
                                    required: true, message: '请输入账号!',
                                }],
                            })(
                                <Input placeholder="请输入账号"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="密码"
                        >
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true, message: '请输入密码!',
                                }, {
                                    validator: this.validateToNextPassword,
                                }],
                            })(
                                <Input type="password" placeholder="请输入密码" />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="确认密码"
                        >
                            {getFieldDecorator('confirm', {
                                rules: [{
                                    required: true, message: '请确认密码!',
                                }, {
                                    validator: this.compareToFirstPassword,
                                }],
                            })(
                                <Input type="password" onBlur={this.handleConfirmBlur} placeholder="请确认密码"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="身份证"
                        >
                            {getFieldDecorator('idNumber', {
                                rules: [{
                                    required: true, message: '请输入身份证!',
                                }],
                            })(
                                <Input placeholder="请输入有效身份证号码"/>
                            )}
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            {getFieldDecorator('agreement', {
                                valuePropName: 'checked',
                            })(
                                <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                            )}
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">立即注册</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}
export default Settings =  Form.create()(Settings);
