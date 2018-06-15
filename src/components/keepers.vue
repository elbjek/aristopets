<template>
  <div>
  <sidebar/>

 

  </div>
</template>

<script>
import sidebar from '../components/templates/sidebar.vue'
export default {
  name: 'app',
  components: {
    sidebar
  }
}
</script>

<style lang="scss">
// @import '../../src/styles/global-variables.scss'
;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: $orange;
  // margin-top: 60px;
}
</style>
