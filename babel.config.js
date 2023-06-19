// 生产环境禁用日志 console 信息
const plugins = process.env.VUE_APP_ENV === 'production' ? ['transform-remove-console'] : []

module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: plugins
}
