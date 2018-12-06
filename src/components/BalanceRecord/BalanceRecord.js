import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Icon } from 'antd';
import BalanceList from '../BalanceList/BalanceList';
import './balanceRecord.scss';

const TabPane = Tabs.TabPane;

class BalanceRecord extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        };

    }
    render(){
        return(
            <div className="balanceRecordBox">
                <header><Link to="/home/personal" className="goBack"><Icon type="left" /></Link>余额记录</header>
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<div><p>全部记录</p><p>0</p></div>} key="1"><BalanceList/></TabPane>
                    <TabPane tab={<div><p>任务收益</p><p>0</p></div>} key="2"><BalanceList/></TabPane>
                    <TabPane tab={<div><p>提现记录</p><p>0</p></div>} key="3"><BalanceList/></TabPane>
                    <TabPane tab={<div><p>充值记录</p><p>0</p></div>} key="4"><BalanceList/></TabPane>
                </Tabs>
            </div>
        )
    }
}
export default BalanceRecord;
