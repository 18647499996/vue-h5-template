import baseAxiosManager from "@/axios/BaseAxiosManager";

/**
 * todo 首页金刚位导航
 * @param data
 * @return {*}
 */
export function getHomeNavigationMenu(data) {
    return baseAxiosManager.baseShopServer().get('apiindex/get-navigation-location?', data)
}

/**
 * todo 文章详情数据
 * @param data
 * @return {*}
 */
export function getArticleDetails(data) {
    return baseAxiosManager.baseShopServer().get('apishop/article/list?', data)
}

export default {
    getHomeNavigationMenu,
    getArticleDetails
}
