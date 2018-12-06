import React from 'react';
import { List } from 'antd';
import './balanceList.scss'

class BalanceList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: [
                {time: '2018-09-29 18:20:39',des: '提现手续费',money:'-2.00'},
                {time: '2018-09-29 18:20:39',des: '提现手续费',money:'-2.00'},
                {time: '2018-09-29 18:20:39',des: '提现手续费',money:'-2.00'},
                {time: '2018-09-29 18:20:39',des: '提现手续费',money:'-2.00'},
                {time: '2018-09-29 18:20:39',des: '提现手续费',money:'-2.00'}
            ]
        };

    }
    componentDidMount() {

    }
    render(){
        const { data } = this.state;

        return(
            <div className="balanceListBox">
                <List
                    // header={<div>Header</div>}
                    // footer={<div>Footer</div>}
                    dataSource={data}
                    renderItem={item => (<List.Item>{
                        <div className="balanceShow">
                            <div className="desBox">
                                <p>{item.time}</p>
                                <p>{item.des}</p>
                            </div>
                            <div className="moneyBox">
                                <p>{item.money}</p>
                            </div>
                        </div>}</List.Item>)}
                />
            </div>
        )
    }
}
export default BalanceList;
