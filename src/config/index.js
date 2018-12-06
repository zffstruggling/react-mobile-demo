export const DEV_BASE = 'http://192.168.0.200:8082/teacher-center/web';
export const TEST_BASE = 'http://192.168.0.202:8082/teacher-center/web';
export const PRE_BASE = 'http://116.62.13.200:8097/teacher-center/web';
export const PRO_BASE = 'http://116.62.13.200:8097/teacher-center/web';
export const fileBaseurl = 'http://file-df.veimg.cn/';

export function baseURL() {
    switch (process.env.TC_NODE_ENV) {
        case 'dev':
            return DEV_BASE
        case 'test':
            return TEST_BASE
        case 'pre':
            return PRE_BASE
        case 'pro':
            return PRO_BASE
        default:
            return DEV_BASE
    }
}
