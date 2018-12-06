import AsyncComponent from './AsyncComponent';

const routers = [
    { path: '/', // 匹配的路由地址
        exact: true, // 只对当前的路由进行匹配
        component: AsyncComponent(() => import('../container/Home/Home')), // 组件名称
        requiresAuth: false, // 需要登陆后才能跳转的页面
    },
    {
        path: '/login',
        exact: true,
        component: AsyncComponent(() => import('../container/User/Login')),
        requiresAuth: false,
    },
    {
        path: '/settings',
        component: AsyncComponent(() => import('../container/User/Settings')),
        requiresAuth: false,
    },
    {
        path: '/forgetPassWord',
        exact: true,
        component: AsyncComponent(() => import('../container/User/ForgetPassWord')),
        requiresAuth: false,
    },
    {
        path: '/home',
        exact: true,
        component: AsyncComponent(() => import('../container/Home/Home.js')),
        requiresAuth: false,
    },
    {
        path: '/home/malls',
        exact: true,
        component: AsyncComponent(() => import('../components/Mall/Mall')),
        requiresAuth: false,
    },
    {
        path: '/home/personal',
        exact: true,
        component: AsyncComponent(() => import('../components/Personal/Personal')),
        requiresAuth: false,
    },
    {
        path: '/home/personal/myTask',
        exact: true,
        component: AsyncComponent(() => import('../components/MyTasks/MyTasks')),
        requiresAuth: false,
    },
    {
        path: '/home/personal/accountSetting',
        exact: true,
        component: AsyncComponent(() => import('../components/AccountSettings/AccountSettings')),
        requiresAuth: false,
    },
    {
        path: '/home/personal/balanceRecord',
        exact: true,
        component: AsyncComponent(() => import('../components/BalanceRecord/BalanceRecord')),
        requiresAuth: false,
    },
    {
        path: '/home/personal/capital',
        exact: true,
        component: AsyncComponent(() => import('../components/Capital/Capital')),
        requiresAuth: false,
    },
    {
        path: '/home/personal/changePW',
        exact: true,
        component: AsyncComponent(() => import('../components/ChangePW/ChangePw')),
        requiresAuth: false,
    },
    {
        path: '*',
        component: AsyncComponent(() => import('../container/NotFound/NotFound')),
        requiresAuth: false,
    },
]
export default routers;

