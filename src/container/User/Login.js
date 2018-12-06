import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.css';

const FormItem = Form.Item;

class Login extends React.Component{
    state = {

    }

    constructor(props){
        super(props);

    }

    componentWillUnmount() {
        const { form } = this.props;
        form.resetFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // this.
            }
        });
    };

    render() {
        const { form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <div className="loginBox">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入您的账号!' }],
                        })(
                           <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入您的密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住</Checkbox>
                        )}
                        <Link to="/forgetPassWord" className="login-form-forgot">忘记密码?</Link>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        <br />
                        <Link to="/settings">立即注册</Link>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
export default Login =  Form.create()(Login);
