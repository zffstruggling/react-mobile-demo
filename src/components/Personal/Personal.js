import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Avatar, List, Button, Icon } from 'antd';
import './personal.scss';

const { Meta } = Card;

class Personal extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        };

    }
    render(){
        const data = [
            { content:'我的任务',type:'solution',toIndex:'/home/personal/myTask' },
            { content:'余额提现',type:'money-collect',toIndex:'/home/personal/capital' },
            { content:'账户设置',type:'user',toIndex:'/home/personal/accountSetting' },
            { content:'修改密码',type:'lock',toIndex:'/home/personal/changePW' },
            { content:'资金明细',type:'exception',toIndex:'/home/personal/balanceRecord' },
        ];
        return(
            <div className="personalBox">
                <Card style={{ width: '100%',borderTop: 'none',borderLeft:'none',borderRight:'none',}}>
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
                <div className="userDatas">
                    <section className="perData">
                        <p>余额总数</p>
                        <h5>3066</h5>
                    </section>
                    <section className="perData">
                        <p>已完成任务</p>
                        <h5>30</h5>
                    </section>
                    <section className="perData">
                        <p>剩余活跃度</p>
                        <h5>306</h5>
                    </section>
                </div>
                <div className="grayBg"></div>
                <div className="users">
                    <List
                        size="default"
                        footer={<Button type="primary" style={{width: '100%'}}>注销</Button>}
                        dataSource={data}
                        renderItem={item => (<Link to={`${item.toIndex}`}><List.Item><Icon type={item.type} style={{ float: 'left',marginRight: '.1rem',marginTop:'.05rem' }}/>{item.content}<Icon type="right" style={{ float:'right',marginTop: '0.06rem' }}/></List.Item></Link>)}
                    />
                </div>
            </div>
        )
    }
}
export default Personal;
