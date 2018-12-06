/**
 * Created by zhaolong on 2018/10/25.
 * File description:404页面
 */
import React from 'react';
import './NotFound.css';


class NotFound extends React.Component {

    componentDidMount(){
    }

    render() {
      return (
        <div className="notFound">
          <div className="errText">很抱歉，您要访问的页面不存在！</div>
          <div className="errTips">请检查您访问的网址是否正确。</div>
        </div>
      );
    }
  }

  export default NotFound;
