import React from 'react';
import { Avatar } from 'antd';
import './mall.scss';

class Mall extends React.Component{
    state ={

    }
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="mallBox">
                <Avatar size={80} icon="frown" style={{ backgroundColor: '#2593fc' }}  />
                <h2>敬请期待</h2>
            </div>
        )
    }
}
export default Mall;
