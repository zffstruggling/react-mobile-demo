import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Icon } from 'antd';
import TaskList from '../TaskList/TaskList';
import './mytasks.scss';

const TabPane = Tabs.TabPane;

class MyTasks extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        };

    }
    render(){
        return(
            <div className="myTaskBox">
                <header><Link to="/home/personal" className="goBack"><Icon type="left" /></Link>我的任务</header>
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<div><p>待回复</p><p>0</p></div>} key="1"><TaskList type="toReply" /></TabPane>
                    <TabPane tab={<div><p>待审核</p><p>0</p></div>} key="2"><TaskList type="toAudit" /></TabPane>
                    <TabPane tab={<div><p>已审核</p><p>0</p></div>} key="3"><TaskList type="approved" /></TabPane>
                    <TabPane tab={<div><p>未通过</p><p>0</p></div>} key="4"><TaskList type="notPass" /></TabPane>
                </Tabs>
            </div>
        )
    }
}
export default MyTasks;
