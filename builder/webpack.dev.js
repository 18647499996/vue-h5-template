module.exports = {
    httpUrl:'我是服务器域名',
    /**
     * todo devServer
     * 在dev环境下，webpck-dev-server的相关配置
     */
    devServer: {
        port: 43999, //开发环境运行时的端口
        https: false,//是否启用HTTPS协议
        open: true, //项目运行成功后是否直接打开浏览器
        hot: true,//是否开启热加载
        overlay: true //当出现编译错误或警告时，在浏览器中显示全屏覆盖。
    },
}
