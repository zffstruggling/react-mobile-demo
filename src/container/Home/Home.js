import React from 'react';
import { Carousel, List, Card, Avatar, Tabs, Icon } from 'antd';
import './Home.scss';

class Home extends React.Component{
    state = {
        tabPosition: 'top',
    }

    constructor(props){
        super(props);
    }

    render() {
        const data = [
            {
                title: '总人气',
                number: 243055,
            },
            {
                title: '已发布',
                number: 243055,
            },
            {
                title: '已完成',
                number: 243055,
            },

        ];
        const TabPane = Tabs.TabPane;
        return (
            <div className="worksBox">
                <div className="banner">
                    <Carousel autoplay>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </div>
                <div className="zones">
                    <Avatar size={50}><Icon type="android" style={{width:40}}/></Avatar>
                    <Avatar size={50}><Icon type="apple" style={{width:40}}/></Avatar>
                </div>
                <div className="dataBox">
                    <List
                        grid={{gutter: 16, column: 3}}
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <Card title={item.title}>{item.number}</Card>
                            </List.Item>
                        )}
                    />
                </div>
                <div className="newWorks">
                    <Tabs defaultActiveKey="1" tabPosition={this.state.tabPosition}>
                        <TabPane tab="最新任务" key="1">Content of Tab Pane 1</TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}
export default Home;
