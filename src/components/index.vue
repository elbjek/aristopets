<template>


    <div class=" index d-flex justify-content-center align-items-center flex-column">

  <div class="d-flex flex-row">    



      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1> 

    </div>
      <router-link class="button" to="/keepers">Keepers</router-link>
      <router-link class="button" to="/givers">Givers</router-link>
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
    // hide(){
    //   show=true;
    // }
  }
}
</script>

<style lang="scss">
@import './src/styles/global-variables.scss';


.index{
  background-color: $white;
  height:80vh;
  // text-align: center;
  background-image:url('../assets/hero.jpg');
  background-size: cover;
  background-position: center;
  .button{
    color:$white;
    padding:20px;
    background-color: transparent;
    border:$border-light;
    border-radius: 50%;
  }

}


</style>
