<template>
  <div id="app">
     <navigation> </navigation>
    <index/>
    <router-view></router-view>
  </div>
</template>

<script>
import index from './components/index.vue'
import navigation from './components/templates/navigation.vue'
export default {
  name: 'app',
  components: {
    navigation,
    index
  }
}
</script>

<style lang="scss">
@import '../src/styles/global-variables.scss'
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
