<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import utils from 'liudonghan'
import config from "../builder/webpack.config";

export default {
  name: 'App',
  components: {},
  created() {
    console.warn("current develop environment：", config.getConfig())
    utils.EventBusManagerUtils.register('TOKEN', succeed => {
      // todo 全局登录监听钩子
      this.$router.push('LoginActivity')
    })
  },
  methods: {},
}
</script>

<style>

</style>
