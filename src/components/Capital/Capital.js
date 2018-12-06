import React from 'react';
import { Link } from 'react-router-dom';
import { Icon,Button } from 'antd';
import './capita.scss';

// const TabPane = Tabs.TabPane;

class Capital extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        };

    }
    render(){
        return(
            <div className="capitalBox">
                <header><Link to="/home/personal" className="goBack"><Icon type="left" /></Link>余额提现</header>
                <div className="capitalForm">
                    <p className="capitalTip">您的余额<span>0.00</span>元，最低提现额度为<span>20.00</span>元</p>
                    <div className="theForm">
                        <p className="tip">提现金额</p>
                        <p className="yuan">元</p>
                        <input type="number" placeholder="请输入数值"/>
                    </div>
                    <p className="capitalTip" style={{textAlign: 'center',marginTop: '.3rem'}}>提现金额&lt;=100手续费2元，&gt;100按2%手续费</p>
                    <Button type="primary" className="submit">提现</Button>
                </div>
            </div>
        )
    }
}
export default Capital;
