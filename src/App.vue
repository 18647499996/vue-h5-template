<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import utils from 'liudonghan'
export default {
  name: 'App',
  components: {},
  created() {
    utils.EventBusManagerUtils.register('TOKEN',succeed => {
      this.$router.push('LoginActivity')
    })
  },
  methods: {},
}
</script>

<style>

</style>
