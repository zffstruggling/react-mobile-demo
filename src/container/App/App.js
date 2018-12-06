// 项目入口文件
import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { Icon } from 'antd';
import renderRoutes from '../../utils/renderRoutes';
import routers from '../../routers';
import './App.scss';

class App extends React.Component{
    state = {
        first: true,
        second:false,
        third: false,
    }

    constructor(props){
        super(props);

    }
    changeClass = (number)=>{
        if(number === 1){
            this.setState({
                first: true,
                second:false,
                third: false,
            })
        }else if(number === 2){
            this.setState({
                first: false,
                second: true,
                third: false,
            })
        }else {
            this.setState({
                first: false,
                second: false,
                third: true,
            })
        }
    }
    render() {
        const url = window.location.href;
        let hideHeaderandFoot = false;
        if(url.includes('/login') || url.includes('/settings') || url.includes('/forgetPassWord')){
            hideHeaderandFoot = true;
        }
        if(hideHeaderandFoot) {
            return (
                <div className="container">
                    <div className="showBox">
                        <Switch>
                            {renderRoutes(routers)}
                        </Switch>
                    </div>
                </div>
            );
        }else {
            const { first,second,third } = this.state;
            return (
                <div className="container">
                    <div className="showBox">
                        <Switch>
                            {renderRoutes(routers)}
                        </Switch>
                    </div>
                    <div className="mask" id="mask">
                        <Link to="/home" className={ first ? 'active' : '' } onTouchStart={()=>this.changeClass(1)}>
                            <p><Icon type="bars" /></p>
                            <p>抢任务</p>
                        </Link>
                        <Link to="/home/malls" className={ second ? 'active' : '' } onTouchStart={()=>this.changeClass(2)}>
                            <p><Icon type="home" /></p>
                            <p>商城</p>
                        </Link>
                        <Link to="/home/personal" className={ third ? 'active' : '' } onTouchStart={()=>this.changeClass(3)}>
                            <p><Icon type="user" /></p>
                            <p>我的</p>
                        </Link>
                    </div>
                </div>
            );
        }
  }
}
export default App;
