import React from 'react';
import { List, Avatar } from 'antd';
import './taskList.scss'

class TaskList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    title: '西游女儿国(安卓)第七期',
                    reply: '果盘-流芳百世-浩然',
                    audit: '2018-09-25 15:34:35'
                },
                {
                    title: '西游女儿国(安卓)第六期',
                    reply: '果盘-流芳百世-浩然',
                    audit: '2018-09-25 15:34:35'
                },
                {
                    title: '西游女儿国(安卓)第五期',
                    reply: '果盘-流芳百世-浩然',
                    audit: '2018-09-25 15:34:35'
                },
                {
                    title: '西游女儿国(安卓)第四期',
                    reply: '果盘-流芳百世-浩然',
                    audit: '2018-09-25 15:34:35'
                },
            ],
            reply: true,
            audit: true
        };

    }
    componentDidMount() {
        const { type } = this.props;
        if(type==='toReply'){
            this.setState({
                reply: false,
                audit: false
            })
        }else if(type==='toAudit'){
            this.setState({
                audit: false,
                reply: true,
            })
        }else if(type==='approved'){
            this.setState({
                reply: true,
                audit: true
            })
        }else {
            this.setState({
                reply: true,
                audit: true
            })
        }
    }
    render(){
        const { data,reply,audit } = this.state;

        return(
            <div className="taskListBox">
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<div><a href="https://ant.design">{item.title}</a><span className="taskMoney" style={{fontSize:'.3rem',color: 'red',float:'right'}}>+7.0</span></div>}
                                description={
                                    <div>
                                        <p style={{marginBottom: 0}}><span>领取时间: </span><span className="theTime"> 2018-09-10 12:23:40</span></p>
                                        <p style={{marginBottom: 0}}><span>审核时间: </span><span className="">{audit ? item.audit : '该任务待审核'}</span></p>
                                        <p style={{marginBottom: 0}}><span>回复内容: </span><span className="">{reply ? item.reply : '该任务待回复'}</span></p>
                                    </div>}
                            />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
export default TaskList;
