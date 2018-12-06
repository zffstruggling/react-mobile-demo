// 用户信息
import { observable, action } from 'mobx';
import agent from '../helper/agent';

class UserStore {
    @observable currentUser;

    @observable loadingUser;

    @observable updatingUser;

    @observable updatingUserErrors;

    @action pullUser() {
        this.loadingUser = true;
        return agent.Auth.current()
            .then(action(({ user }) => { this.currentUser = user; }))
            .finally(action(() => { this.loadingUser = false; }))
    }

    @action updateUser(newUser) {
        this.updatingUser = true;
        return agent.Auth.save(newUser)
            .then(action(({ user }) => { this.currentUser = user; }))
            .finally(action(() => { this.updatingUser = false; }))
    }

    @action forgetUser() {
        this.currentUser = undefined;
    }

    @action queryUserNameList(value) {
        return agent.Auth.queryUserNameList(value)
            .catch(action((err) => {
                this.errors = err.response && err.response.body && err.response.body.errors;
                throw err;
            }))
            .finally(action(() => { this.inProgress = false; }));
    }

}

export default new UserStore();
