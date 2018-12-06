import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import './changpw.scss';

// const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class ChangePw extends React.Component{

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
            callback('输入的两个密码不一致!');
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
        return(
            <div className="changePWBox">
                <header><Link to="/home/personal" className="goBack"><Icon type="left" /></Link>修改密码</header>
                <div className="changePWForm">
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem
                            {...formItemLayout}
                            label="旧密码"
                        >
                            {getFieldDecorator('oldPassword', {
                                rules: [{
                                    required: true, message: '请输入原来的密码!',
                                }],
                            })(
                                <Input type="password" placeholder="请输入旧密码"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="新密码"
                        >
                            {getFieldDecorator('payName', {
                                rules: [{
                                    required: true, message: '请输入新密码!',
                                }, {
                                    validator: this.validateToNextPassword,
                                }],
                            })(
                                <Input type="password" placeholder="请输入新密码" />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="确认新密码"
                        >
                            {getFieldDecorator('confirm', {
                                rules: [{
                                    required: true, message: '请确认您的新密码!',
                                }, {
                                    validator: this.compareToFirstPassword,
                                }],
                            })(
                                <Input type="password" placeholder="请确认您的新密码"  onBlur={this.handleConfirmBlur}/>
                            )}
                        </FormItem>

                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" style={{width: '5rem'}}>确认修改</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}
export default ChangePw = Form.create()(ChangePw);
