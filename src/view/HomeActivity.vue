<template>
  <div @click="onClick">刘大拿</div>
</template>

<script>
import utils from 'liudonghan'
export default {
  name: "HomeActivity",
  methods:{
    onClick(){
      utils.EventBusManagerUtils.post('TOKEN','')
    }
  }
}
</script>

<style scoped>

</style>
