<template>
  <div id="app">
      <router-link class="btn btn-primary" to="/keepers">Keepers</router-link>
      <router-link class="btn btn-primary" to="/givers">Givers</router-link>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {

  },
  data(){
    return{
      show:false
    }
  },
  methods:{
    hide(){
      show=true;
    }
  }
}
</script>

<style lang="scss">
// @import '../src/styles/global-variables.scss'
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
