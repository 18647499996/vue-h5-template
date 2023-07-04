<template>
  <div>
    <iframe v-if="isOffice" class="wrap" :src="wpsUrl" frameborder="0"></iframe>
    <div v-else v-html="vHtml"/>
  </div>

</template>


<script>
import mammoth from "mammoth";

export default {
  // 已加载pdf、xlsx、ppt
  name: "LoginActivity",
  components: {},
  data() {
    return {
      /**
       * https://qn.dazuhang.com/%E9%87%87%E9%9B%86%E4%B8%8E%E6%9F%A5%E8%AF%A2%E4%BD%BF%E7%94%A8%E6%8E%88%E6%9D%83%E4%B9%A6-%E9%A3%8E%E6%8E%A7%E5%AE%9D.doc
       * https://qn.dazuhang.com/5b44b83e0d9bb4d07cb6b751e8534f19.docx
       * https://qn.dazuhang.com/fx_authorization.pdf
       * https://qn.dazuhang.com/amap_poicode.xlsx
       * https://qn.dazuhang.com/test.pptx
       */
      // 微软公共链接
      office: 'https://view.officeapps.live.com/op/view.aspx?src=',
      // Docx开源链接（ 有限期限制 ）
      officeDoc: 'https://view.xdocin.com/xdoc?_xdoc=',
      // PDF开源链接
      officePdf: 'https://www.gjtool.cn/pdfh5/pdf.html?file=',
      wpsUrl: '',
      vHtml: "",
      isOffice: true
    }
  },
  created() {

  },

  methods: {
    // 在线查看word文件
    readExcelFromRemoteFile: function (url) {
      const vm = this;
      const xhr = new XMLHttpRequest();
      xhr.open("get", url, true);
      xhr.responseType = "arraybuffer";
      xhr.onload = function () {
        if (xhr.status === 200) {
          mammoth.convertToHtml({arrayBuffer: new Uint8Array(xhr.response)})
              .then(function (resultObject) {
                vm.$nextTick(() => {
                  const rep = resultObject.value.replaceAll('<img', '<img style="width: ' + document.body.offsetWidth + 'px"')
                      .replaceAll('<table', '<table style="width:100%; border-collapse:collapse;" border="1px"')
                  console.log('html文件：', rep)
                  vm.vHtml = rep
                });
              });
        }
      };
      xhr.send();
    }
  },
  mounted() {
    // this.wpsUrl = this.url[1]
    this.wpsUrl = this.$route.query.url
    if (undefined === this.wpsUrl || '' === this.wpsUrl) {
      this.$toast('文档路径不存在！')
      return
    }
    if (this.wpsUrl.indexOf('.pptx') > -1 || this.wpsUrl.indexOf('.xlsx') > -1) {
      this.isOffice = true
      this.wpsUrl = this.office + this.wpsUrl
    } else if (this.wpsUrl.indexOf('.docx') > -1) {
      this.isOffice = false
      this.readExcelFromRemoteFile(this.wpsUrl)
    } else if (this.wpsUrl.indexOf('.pdf') > -1) {
      this.isOffice = true
      this.wpsUrl = this.officePdf + this.wpsUrl
    } else {
      this.isOffice = true
      this.wpsUrl = this.officeDoc + this.wpsUrl
    }

  }
}
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 800px;
}

</style>
