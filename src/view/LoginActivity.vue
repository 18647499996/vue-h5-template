<template>
  <van-row>
    <van-row>
      <van-button @click="getLocation">刘冬涵</van-button>
    </van-row>
    <van-row>
      <van-button text="刘冬涵"></van-button>
    </van-row>
  </van-row>


</template>


<script>
import utils from 'liudonghan'
import config from '../../builder/webpack.config'

export default {
  name: "LoginActivity",
  components: {},
  created() {
    utils.ChatMessageUtils.createTimChat()
    utils.LocationManagerUtils.getCurrentLocation(succeed => {
      console.log('定位信息：', succeed)
    })
    console.log("当前环境：", config.getConfig())
  },

  methods: {
    getLocation() {
      this.$router.push('/HomeActivity')

    }
  },

  mounted() {
  }
}
</script>

<style scoped>

</style>
