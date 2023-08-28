import baseManager from 'liudonghan'
import config from '../../builder/webpack.config'

const user = baseManager.StorageManagerUtils.getCookiesObject('USER')

/**
 * todo 获取Axios引用
 */
export function baseAxiosServer() {
    return baseManager.AxiosManagerUtils.createAxiosServer();
}

/**
 * todo 用户服务
 * @return {*}
 */
export function baseAuthServer() {
    return baseManager.AxiosManagerUtils
        .createAxiosServer()
        .baseApi(config.getConfig().baseUserUrl)
        .addHeaders()
        .addLogcatInterceptors()
        .addCodeInterceptors(code => {
            // todo 根据服务器业务需求配置"code"码拦截
            return baseCodeInterceptors(code)
        })
        .addParamsInterceptors(params => {
            // todo 根据服务器业务配置公共请求参数及参数加工处理
            return params
        })
}

/**
 * todo 商城服务
 * @return {*}
 */
export function baseShopServer() {
    return baseManager.AxiosManagerUtils
        .createAxiosServer()
        .baseApi(config.getConfig().baseShopUrl)
        .addHeaders({
            token:undefined !== user ? user.token : ''
        })
        .addLogcatInterceptors()
        .addCodeInterceptors(code => {
            // todo 根据服务器业务需求配置"code"码拦截
            return baseCodeInterceptors(code)
        })
        .addParamsInterceptors(params => {
            // todo 根据服务器业务配置公共请求参数及参数加工处理
            return params
        })
}

/**
 * todo 服务器code码统一配置
 * @param code
 * @return {Promise<never>|Promise<unknown>}
 */
function baseCodeInterceptors(code) {
    switch (code.data.code) {
        // 成功code码
        case 0:
        case 1:
        case 200:
        case 10000:
            return Promise.resolve(code.data)
        case 2:
        case 401:
            // token过期，以及服务器返回token失效等操作 这里通过设置全局
            baseManager.EventBusManagerUtils.post('TOKEN','')
            return Promise.reject({
                'code': code.data.code,
                'msg': '请重新登录'
            })
        default:
            return Promise.reject({
                'code': code.data.code,
                'msg': code.data.msg
            })
    }
}

/**
 * todo 服务器配置清单（ 多服务配置 ）
 *      baseAuthServer（ 用户中心 ）
 *      baseShopServer（ 商城服务 ）
 *
 */
export default {
    baseAxiosServer,
    baseAuthServer,
    baseShopServer
}

