const development = {
    mode: 'development',
    name: '开发环境',
    baseUserUrl: 'https://xxx.xxxxx.xxx',
    baseShopUrl: 'https://csapi1.xinfushenghuo.cn/',
    level: 0,
    isDebug: true
}

const production = {
    mode: 'production',
    name: '生产环境',
    baseUserUrl: 'https://xxx.xxxxx.xxx',
    baseShopUrl: 'https://api1.xinfushenghuo.cn/',
    level: 1,
    isDebug: false
}

const test = {
    mode: 'test',
    name: '测试环境',
    baseUserUrl: 'https://xxx.xxxxx.xxx',
    baseShopUrl: 'https://api1.xinfushenghuo.cn/',
    level: 2,
    isDebug: true
}

function getConfig() {
    switch (process.env.VUE_APP_ENV) {
        case 'development':
            return development
        case 'production':
            return production
        case 'test':
            return test
    }
}

export default {
    development,
    production,
    test,
    getConfig
}
