<template>
  <div @click="getLocation">刘冬涵</div>
</template>


<script>
import utils from 'liudonghan'
import config from '../../vue.config.js'

export default {
  name: "LoginActivity",
  created() {
    utils.ChatMessageUtils.createTimChat()
    this.getLocation()
    console.log("当前环境：" + config.httpUrl)
  },

  methods: {
    getLocation() {
      utils.LocationManagerUtils.getCurrentCityLocation(succeed => {
        console.log('定位信息：', succeed)
      })
    }
  },

  mounted() {
    this.getLocation()
  }
}
</script>

<style scoped>

</style>
