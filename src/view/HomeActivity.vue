<template>
  <van-row>
    <van-row class="van-top-hover">打开信富生活客户端 观看更流畅更清晰</van-row>
    <van-row>
      <van-col v-for="(item,index) in data.img" :key="index">
        <van-image class="van-image-banner" :src="item" fit="cover" radius="5px"/>
      </van-col>
    </van-row>
    <van-row>
      <van-swipe class="swipe-goods" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in data.goods" :key="index">
          <van-cell>
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <template #title>
              <van-col>
                <van-image :src="item.images" width="100px" height="100px" fit="cover" radius="5px"/>
              </van-col>
              <van-col>
                <van-row style="padding: 10px 0 20px 8px">{{item.name}}</van-row>
                <van-row >￥{{item.price_sell}}</van-row>
              </van-col>
            </template>
            <template #right-icon>
              <van-row style="display: flex;align-items: center">
                <van-image :src="require('../assets/logo.png')" width="35px" height="35px"></van-image>
              </van-row>
            </template>
          </van-cell>
        </van-swipe-item>
      </van-swipe>
    </van-row>
  </van-row>
</template>

<script>

import shopApiManager from "@/axios/ShopApiManager";


export default {
  name: "HomeActivity",
  data() {
    return {
      articleId: '1724',
      data: {}
    }
  },
  created() {
    shopApiManager.getArticleDetails({
      'article_id': this.articleId,
    }).then(succeed => {
      this.data = succeed.data.list[0]
    }).catch(error => {

    })
    shopApiManager.getArticleDetails({
      'article_id': this.articleId,
    }).then(succeed => {

    }).catch(error => {

    })
  },
  methods: {}
}
</script>

<style scoped>
.van-top-hover {
  position: absolute;
  color: #ffffff;
  width: 100%;
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;
  background: rgba(32, 37, 40, 0.8);
  z-index: 1;
}

.van-image-banner {
  width: 125px;
  height: 125px;
  margin: 3px 5px 0 0;
}

.swipe-goods {
  background: white;
}

.van-col-goods-right {
  text-align: center;
  height: 100px;
}
</style>
