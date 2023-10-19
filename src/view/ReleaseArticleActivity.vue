<template>
  <van-row>
    <van-field name="uploader" label="图片上传">
      <template #input>
        <van-uploader v-model="images" multiple :after-read="afterRead" @delete="beforeDelete"/>
      </template>
    </van-field>
    <van-field
        v-model="user.text"
        is-link
        readonly
        name="picker"
        label="选择用户"
        @click="showPicker = true"/>
    <van-popup v-model:show="showPicker" position="bottom">
      <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"/>
    </van-popup>

    <van-field
        v-model="title"
        name="文章标题"
        label="文章标题"
        placeholder="输入文章标题"/>

    <van-field
        v-model="content"
        rows="1"
        autosize
        label="文章内容"
        type="textarea"
        maxlength="10000"
        placeholder="请输入文章内容"
        show-word-limit
    />

    <van-button type="info" size="large" @click="onClickSubmit">提交</van-button>

  </van-row>
</template>

<script>
import shopApiManager from "@/axios/ShopApiManager"
import utils from 'liudonghan'
import COS from "cos-js-sdk-v5";

export default {
  name: "ReleaseArticleActivity",
  data() {
    return {
      user: {
        text: '刘冬涵',
        value: 1,
        token: '',
        userid: ''
      },
      images: [],
      imageUrl: [],
      goods: [{
        "activity_id": 0,
        "goods_mains_id": "7261364",
        "goods_sku_id": 0,
        "profit": "0",
        "type": 0
      }, {
        "activity_id": 0,
        "goods_mains_id": "140183636",
        "goods_sku_id": 0,
        "profit": "0",
        "type": 0
      }, {
        "activity_id": 0,
        "goods_mains_id": "7263474",
        "goods_sku_id": 0,
        "profit": "0",
        "type": 0
      }, {
        "activity_id": 0,
        "goods_mains_id": "140093009",
        "goods_sku_id": 0,
        "profit": "0",
        "type": 0
      }, {
        "activity_id": 0,
        "goods_mains_id": "140208982",
        "goods_sku_id": 0,
        "profit": "0",
        "type": 0
      }],
      content: '在这个瞬息万变的现代社会中，我们生活在一个追求创新、变革和进步的时代。新技术、新潮流和新理念不断涌现，引领着我们踏上前所未有的道路。然而，在这个前行的过程中，我们是否曾经停下脚步，回望过去，审视并学习我们祖先的智慧和经验呢？\\n\\n在这个喧嚣和忙碌的时代，我们往往忽略了我们祖先积累下来的宝贵财富，他们的智慧和经验值得我们深思。而其中一句古老的谚语“菜不摆三，筷不成五，席不成六”正是一盏指引我们的明灯。\\n\\n\\n中国的餐桌文化源远流长，其中一个有趣而引人深思的方面就是古代人们对于菜肴数量的讲究。有一句古老的谚语说道：“菜不摆三”，这似乎有些与众不同，引起了人们的好奇心。究竟为什么古代人们不喜欢在餐桌上摆放三个菜肴呢？\\n\\n古代的人们相当迷信，他们认为数字三是一个不吉利的数字，因为在汉语中，“三”与“散”谐音，意味着散伙或离散。因此，摆放三个菜肴可能会让人们联想到分散或别离，不符合团聚和吉祥的意义。古代人们尤其重视团结和家庭的完整，因此在餐桌上摆放三个菜肴是被视为不吉利的。\\n\\n中国人喜欢好事成双，这在餐桌上也有所体现。我们经常可以看到餐桌上摆放的菜碟数量总是双数。这是因为双数在中国文化中被认为是吉祥和幸运的象征。摆放双数的菜肴可以给人们带来好运和喜庆的寓意。无论是在家庭聚会还是重要节日，人们都会注意保持菜肴数量的双数，以期待好运和幸福。\\n\\n古代时候摆放三个菜肴的场合通常是祭祀。在古代中国，祭祀是一项非常重要的仪式活动，人们通过祭祀来表达对已经仙去的亲人或供奉的神明的敬意和纪念。在这样的场合，人们会摆放三个菜肴，这是一种祭祀仪式的规定，具有特殊的象征意义。通过祭祀，人们希望与祖先或神明建立联系，祈求平安和祝福。\\n\\n这些文化和餐桌习俗背后蕴含着中国古代人们对于家庭团结、吉祥和敬神的重视。菜不摆三的习俗，虽然在现代社会逐渐淡化，但它带给我们了解和思考的机会。它提醒着我们去探索古代文化和传统价值观。\\n\\n\\n中国的餐桌礼仪中有着独特的文化传统，其中一个重要的方面就是对于筷子的使用和摆放的讲究。在这个礼仪之中，有一句古老的谚语说道：\\"筷不成五\\"。\\n\\n\\"筷不成五\\"并不是指筷子不能摆放五根，而是强调在款待客人时，不应该给他们准备长度不一的筷子。这样的摆放会给人一种\\"三长两短\\"的感觉，而在中国文化中，\\"三长两短\\"被视为特别不吉利的象征。\\n\\n因此，合理、协调地摆放筷子，不仅是一种餐桌礼仪的细节，',
      title: '菜不摆三，筷不成五，席不成六”是什么意思？老祖宗的经验之谈',
      showPicker: false,
      columns: [
        {
          text: '刘冬涵',
          value: 1,
          token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjcyRENCNzE2RTE3NzAzMjQxQjM5QzU4NTlCQjNDNDI5IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2ODk4MzEwMzcsImV4cCI6MTY5MDY5NTAzNywiaXNzIjoiaHR0cHM6Ly9sb2dpbi5sYXd4cC5jb20iLCJjbGllbnRfaWQiOiJhcHAiLCJzdWIiOiIyMTAzMzQyODc3OTk5IiwiYXV0aF90aW1lIjoxNjg5ODMxMDM3LCJpZHAiOiJsb2NhbCIsIlVzZXJJZCI6IjIxMDMzNDI4NzciLCJuYW1lIjoiMTc2NDgxNDYzNTgiLCJnaXZlbl9uYW1lIjoi5aS05YOPIiwiZW1haWwiOiIxNzY0ODE0NjM1OCIsImp0aSI6IkMwQzlCNUFCMUU3MTk3RERCRjBGMTY5NUVGODhFQjJDIiwiaWF0IjoxNjg5ODMxMDM3LCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImN1c3RvbSJdfQ.DfKlwMaOyDSdBjQU2ezzQVd4dCV7KhcngJ5MsPWF8OhPL5g9onS8OgXSlxy9i9-8num55RlCjSyq1Y1-3lu_zuSa-bAQ2-G9-CySgmJKwrkrmy2cqPkmm5-2WtecyYQfsUB7gjtGFxRgqVaKof9X5C4w_gwfWLNtQ2UAxlfKLyi4-QJdb1hjK4R0gSFBPuBODRVwZv5liEAFBBQt3-q1lZHtvJnBMqjWWC4YF-wJUMoOW-wGouSqsOC0agJTNLD94Bib0lJ-kITNV1H3-e2W27TxmrEd22ZFXimQej9J52LuTpotgPvmMuHZdy8Ld5juN3IbNq8JYEAi3cRFCNrhfQ',
          userid: ''
        },
        {
          text: '马云芳',
          value: 2,
          token: '',
          userid: ''
        }
      ]
    }
  },
  methods: {
    onConfirm(e) {
      console.log('选择用户：', e)
      this.showPicker = false
      this.user = e
      utils.StorageManagerUtils.saveCookies('USER', this.user)
    },
    afterRead(file,details) {
      console.log('图片：', file)
      // this.uploadImage(file)
    },
    beforeDelete(file,details){
      // console.log('删除图片：',details)
      this.images.splice(details.index,details.index)
      this.imageUrl.splice(details.index,details.index)
      // delete this.imageUrl[details.index]
      // delete this.images[details.index]
      console.log('图片列表：',this.details)
      // console.log('本地图片列表：',this.images)
    },

    uploadImage(params) {
      let that = this;
      if (params.file) {
        let cos = new COS({
          //腾讯云的id和密码
          SecretId: "",
          SecretKey: ""
        });
        // 执行上传操作
        cos.putObject(
            {
              Bucket: 'shops-1307611133', // 存储桶
              Region: "ap-beijing", // 地域
              Key: 'H5/Image/' + Math.ceil(Math.random() * 10000) + new Date().getTime() + '.png', // 文件名
              Body: params.file, // 要上传的文件对象
              StorageClass: "STANDARD", // 上传的模式类型 直接默认 标准模式即可
            },
            (err, data) => {
              if (!err && data.statusCode === 200) {
                console.log("OSS地址：", data);
                that.imageUrl.push({url: 'https://' + data.Location})
              }
            }
        );
      }
    },
    onClickSubmit() {
      shopApiManager.releaseArticle({
        ipv4: '130.130.5.18',
        is_case: '0',
        article_id: '',
        token: this.user.token,
        content: this.content,
        type: '0',
        title: this.title,
        source: '',
        goods_ids: JSON.stringify(this.goods),
        is_original: '1',
        address: '北京市',
        imgs: JSON.stringify(this.imageUrl)
      }).then(succeed => {

      }).catch(error => {

      })
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
