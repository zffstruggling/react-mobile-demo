// 验证登录
import { observable, action } from 'mobx';
import agent from '../helper/agent';

class AuthStore {
    @observable inProgress = false;

    @observable errors = undefined;

    @observable authed = false;

    @observable history = null;

    @action login(value) {
        this.inProgress = true;
        this.errors = undefined;
        return agent.Auth.login(value)
            .then((data) => {
                return data;
            })
            .catch(action((err) => {
                console.log(err);
            }))
            .finally(action(() => { this.inProgress = false; }));
    }

    @action isPracticeTeacher(value) {
        this.inProgress = true;
        this.errors = undefined;
        return agent.Auth.isPracticeTeacher(value)
            .then((data) => {
                return data;
            })
            .catch(action((err) => {
                console.log(err);
            }))
            .finally(action(() => { this.inProgress = false; }));
    }

    @action selectByStudentId(value) {
        this.inProgress = true;
        this.errors = undefined;
        return agent.Auth.selectByStudentId(value)
            .then((data) => {
                return data;
            })
            .catch(action((err) => {
                this.errors = err.response && err.response.body && err.response.body.errors;
                throw err;
            }))
            .finally(action(() => { this.inProgress = false; }));
    }

    @action sendVerificationCodeMiddle(value) {
        this.inProgress = true;
        this.errors = undefined;
        return agent.Auth.sendVerificationCodeMiddle(value)
            .then((data) => {
                return data;
            })
            .catch(action((err) => {
                this.errors = err.response && err.response.body && err.response.body.errors;
                throw err;
            }))
            .finally(action(() => { this.inProgress = false; }));
    }

    @action forgetPassword(value) {
        this.inProgress = true;
        this.errors = undefined;
        return agent.Auth.forgetPassword(value)
            .then((data) => {
                return data;
            })
            .catch(action((err) => {
                this.errors = err.response && err.response.body && err.response.body.errors;
                throw err;
            }))
            .finally(action(() => { this.inProgress = false; }));
    }

    @action uploadHeadImgMiddle(value) {
        this.inProgress = true;
        this.errors = undefined;
        return agent.Auth.uploadHeadImgMiddle(value)
            .then((data) => {
                return data;
            })
            .catch(action((err) => {
                this.errors = err.response && err.response.body && err.response.body.errors;
                throw err;
            }))
            .finally(action(() => { this.inProgress = false; }));
    }

    @action changeAuthed(auth){
        this.authed = auth;
    }
}

export default new AuthStore();
