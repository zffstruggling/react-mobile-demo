import { message } from 'antd';
import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import Cookies from 'js-cookie';
import CommonStore from '../stores/CommonStore';
import AuthStore from '../stores/AuthStore';
import { baseURL } from '../config';

const superagent = superagentPromise(_superagent, global.Promise);

// var API_ROOT = 'http://192.168.0.202:8082/teacher-center/web';
// var url = window.location.href;
// if(url.indexOf("116.62.13.23")>-1){
//   API_ROOT = 'http://116.62.13.23:8097/teacher-center/web';
// }
const API_ROOT = baseURL();
const handleErrors = err => {
    if (err && err.response && err.response.status === 401) {
        AuthStore.logout();
    }
    return err;
};

const responseBody = res => res.body;

const tokenPlugin = req => {
    if (CommonStore.token) {
        req.set('authorization', `Token ${CommonStore.token}`);
    }
};

const commonParameter = {
    appId: 70, // appid
    terminalType: 'web', // 终端类型
    sysVersion: '1.0.0', // 系统版本
}
const requests = () => {
    const newParams = {
        ...commonParameter,
        nowTime: new Date().getTime(), // 获取当前时间戳
        userId: Cookies.get('ccuserId'), // 用户userId
        token: Cookies.get('token'), // token
    }
    return {
        del: url =>
            superagent
                .del(`${API_ROOT}${url}`)
                .use(tokenPlugin)
                .end(handleErrors)
                .then(responseBody),
        get: url =>
            superagent
                .get(`${API_ROOT}${url}`)
                .use(tokenPlugin)
                .end(handleErrors)
                .then(responseBody),
        put: (url, body) =>
            superagent
                .put(`${API_ROOT}${url}`, body)
                .use(tokenPlugin)
                .end(handleErrors)
                .then(responseBody),
        post: (url, body) =>
            superagent
                .post(`${API_ROOT}${url}`, body)
                .send(newParams)
                .type('form')
                .use(tokenPlugin)
                .end(handleErrors)
                .then(responseBody)
                .catch(err => {
                    message.error(err.msg || '接口请求出错，请检查！', 1)
                    throw err
                }),
        postNoForm: (url, body) =>
            superagent
                .post(`${API_ROOT}${url}`, body)
                .send(newParams)
                .use(tokenPlugin)
                .end(handleErrors)
                .then(responseBody)
                .catch(err => {
                    message.error(err.msg || '接口请求出错，请检查！', 1)
                    throw err
                }),
        postforLogin: (url, body) =>
            superagent
                .post(`${API_ROOT}${url}`, body)
                .type('form')
                .use(tokenPlugin)
                .end(handleErrors)
                .then(responseBody)
                .catch(err => {
                    message.error(err.msg || '接口请求出错，请检查！', 1)
                    throw err
                }),
        postforUpload: (url, body) =>
            superagent
                .post(`${API_ROOT}${url}`, body)
                .use(tokenPlugin)
                .end(handleErrors)
                .then(responseBody)
                .catch(err => {
                    message.error(err.msg || '接口请求出错，请检查！', 1)
                    throw err
                }),
    };
}

const Auth = {
    login: (value) =>
        requests().post('/user/middleLogin', value),
        // requests().put('/user', { user })
};

const Homepage = {
    // getprepareLessions: (value) =>
    //     requests().post('/PerpareClass/getprepareLessions', value),
    // getClassList: (value) =>
    //     requests().post('/class/classByTeacher', value),
    // getClassEvaluation: (value) =>
    //     requests().post('/class/classStatistics', value),
};

const CourseReview = {
    // getTeacherMaterial: (value) =>
    //     requests().post('/courseReview/teacherMaterial', value),
    // getTeacherMaterialDetail: (value) =>
    //     requests().post('/courseReview/classroomStudentScore', value),
    // getListOfStudentsWork: (value) =>
    //     requests().post('/courseReview/getListOfStudentsWork', value),
    // getOperationSituation: (value) =>
    //     requests().post('/courseReview/operationSituation', value),
    // getTaskTypeByClass: (value) =>
    //     requests().post('/courseReview/queryTaskTypeByClass', value),
};

const Message = {
    // getMessageList: (value) =>
    //     requests().post('/message/selectMessagelist', value),
};

export default {
    Auth,
    Homepage,
    CourseReview,
    Message,
    requests,
};
