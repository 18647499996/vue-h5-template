import Router from 'vue-router'
import Vue from 'vue';
import LoginActivity from "@/view/LoginActivity";
import HelloWorld from "@/components/HelloWorld";
import HomeActivity from "@/view/HomeActivity";
import ReleaseArticleActivity from "@/view/ReleaseArticleActivity";
import GenerateFileActivity from "@/view/GenerateFileActivity";

Vue.use(Router)
const routes = [
    {
        path: '/',
        name: 'HomeActivity',
        component: HomeActivity,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/LoginActivity',
        name: 'LoginActivity',
        component: LoginActivity,
        meta: {
            title: '登录',
        }
    },
    {
        path: '/ReleaseArticleActivity',
        name: 'ReleaseArticleActivity',
        component: ReleaseArticleActivity,
        meta: {
            title: '登录',
        }
    },
    {
        path: '/GenerateFileActivity',
        name: 'GenerateFileActivity',
        component: GenerateFileActivity,
        meta: {
            title: 'PDF生成'
        }
    }
]

function getRouter() {
    return new Router({
        mode: 'history',
        scrollBehavior: () => ({y: 0}),
        routes
    })
}

const router = getRouter()

export default router
