import baseAxiosManager from "@/axios/BaseAxiosManager";

export function getHomeNavigationMenu(data){
    return baseAxiosManager.baseShopServer().get('apiindex/get-navigation-location?',data)
}

export default {
    getHomeNavigationMenu
}
