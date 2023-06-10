function getConfig() {
    switch (process.env.VUE_APP_ENV) {
        case 'development':
            return {
                mode: 'development',
                name: '开发环境',
                baseUserUrl: 'https://xxx.xxxxx.xxx',
                baseShopUrl: 'https://xxx.xxxxx.xxx'
            }
        case 'production':
            return {
                mode: 'production',
                name: '生产环境',
                baseUserUrl: 'https://xxx.xxxxx.xxx',
                baseShopUrl: 'https://xxx.xxxxx.xxx'
            }
        case 'test':
            return {
                mode: 'test',
                name: '测试环境',
                baseUserUrl: 'https://xxx.xxxxx.xxx',
                baseShopUrl: 'https://xxx.xxxxx.xxx'
            }
    }
}

export default {
    getConfig
}
