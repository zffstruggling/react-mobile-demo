import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
// import { AutoComplete, Select } from "antd/lib/index";

import './accountsettings.scss';


// const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class AccountSettings extends React.Component{

    constructor(props){
        super(props);

    }
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
    render(){
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

        return (
            <div className="accountSettingsBox">
                <header><Link to="/home/personal" className="goBack"><Icon type="left" /></Link>账户设置</header>
                <div className="accountSettingsForm">
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem
                            {...formItemLayout}
                            label="昵称"
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
                            label="手机号"
                        >
                            {getFieldDecorator('phone', {
                                rules: [{
                                    required: true, message: '请输入手机号!',
                                }],
                            })(
                                <Input placeholder="请输入手机号"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="提现支付宝姓名"
                        >
                            {getFieldDecorator('payName', {
                                rules: [{
                                    required: true, message: '请输入支付宝姓名!',
                                }, {
                                    validator: this.validateToNextPassword,
                                }],
                            })(
                                <Input placeholder="请输入提现支付宝姓名" />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="提现支付宝账户"
                            extra="支付宝账户作为您提现到账的账户，请认真填写"
                        >
                            {getFieldDecorator('payPhone', {
                                rules: [{
                                    required: true, message: '请输入提现支付宝账户!',
                                }, {
                                    validator: this.compareToFirstPassword,
                                }],
                            })(
                                <Input onBlur={this.handleConfirmBlur} placeholder="请输入提现支付宝账户"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="年龄"
                        >
                            {getFieldDecorator('userAge', {
                                rules: [{
                                    required: true, message: '请输入您的年龄!',
                                }],
                            })(
                                <Input placeholder="请输入您的年龄"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="职业"
                        >
                            {getFieldDecorator('userWork', {
                                rules: [{
                                    required: true, message: '请输入您的职业!',
                                }],
                            })(
                                <Input placeholder="请输入您的职业"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="所在城市"
                        >
                            {getFieldDecorator('city', {
                                rules: [{
                                    required: true, message: '请输入所在城市!',
                                }],
                            })(
                                <Input placeholder="请输入所在城市"/>
                            )}
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" style={{width: '5rem'}}>保存</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}
export default AccountSettings = Form.create()(AccountSettings);
