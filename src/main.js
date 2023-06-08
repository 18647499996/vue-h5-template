import Vue from 'vue'
import App from './App.vue'
import router from './router'
import utils from 'liudonghan'

utils.ConstantManagerUtils.config.mapKey = 'c2868746f6d0d525fc35b1f377e683c2';
utils.ConstantManagerUtils.config.mapSecurityCode = '6a5a69a56b383204455176e1c99c1f75';
utils.ConstantManagerUtils.config.logLevel = 0; // 日志级别
utils.ConstantManagerUtils.config.timSdkId = '1400664826' //正式1400581425 测试 1400664826

new Vue(
    {
        router,
        render: h => h(App)
    })
    .$mount('#app')
