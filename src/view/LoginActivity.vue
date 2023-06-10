<template>
  <van-row>
    <van-row>
      <van-button type="primary" @click="getLocation">刘冬涵</van-button>
    </van-row>
    <van-row>
      <van-button type="warning">{{ address }}</van-button>
    </van-row>
  </van-row>


</template>


<script>
import utils from 'liudonghan'
import config from '../../builder/webpack.config'
import shopApi from '../axios/ShopApiManager'

export default {
  name: "LoginActivity",
  data() {
    return {
      address: '',
    }
  },
  created() {
    shopApi.getHomeNavigationMenu({
      is_index: 1,
      device: 1
    }).then(succeed => {

    }).catch(error => {

    })
    utils.ChatMessageUtils.createTimChat()
    utils.LocationManagerUtils.getCurrentLocation(succeed => {
      this.address = succeed.regeocode.formattedAddress
      console.log('定位信息：', succeed.regeocode.formattedAddress)
    })
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
