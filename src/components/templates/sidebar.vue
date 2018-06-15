<template>
  <div class="col-3 sidebar" :class="{'isHidden':isHidden}" >
      <div class="navbar-brand  user d-flex justify-content-between align-items-center" >
            <div class="d-flex flex-row align-items-center">
                <h4 v-if="show" href="#">Welcome, User</h4>
                <span class="img"></span>
            </div>
          <a href="#" @click="toggleSidebar">X</a>
      </div>
            <ul v-if="show">
                <li><a href="#">Home</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Messages</a></li>
            </ul>
  </div>
</template>

<script>
export default {
    name: 'sidebar',
    data(){
        return{
            isHidden:false,
            show:true
        }
    },
    methods:{

        toggleSidebar(){
          this.isHidden ? this.isHidden = false : this.isHidden=true;
          this.show ? this.show = false : this.show = true;
        }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 @import '../../styles/global-variables.scss';

.sidebar{
    background: $white;
    height:100vh;
    padding:0px 0px;
    transition: 0.5s ease;
    margin:0px;
    border-radius: 10px;
    border:1px solid $light-gray;
    .user{
        margin:0;
        padding:0;
        border-bottom: $border-white;
        background: $light-gray;
        border-radius: 5px;
        transition: 0.5s ease;
        h4{
            margin:0;
            padding:20px 10px;
            font-size: 20px;
            font-weight: bolder;
        }
        a{
            font-size: 15px;
            color:rgba($color: $black, $alpha: 0.5);
            font-weight: bolder;
            padding:20px 10px;
            overflow: hidden;
            background-color: transparent;
            float:right;
            &:hover{
                color:$black;
                text-decoration: none;
            }
        }
    .img{
        height:50px;
        width:50px;
        overflow: hidden;
        border-radius: 50%;
        background-image: url('https://s2.reutersmedia.net/resources/r/?m=02&d=20180613&t=2&i=1272304190&r=LYNXMPEE5C23F&w=1280');
        background-size: cover;
    }   

    }
    a{
        color:$white;
        margin:0px;
        padding:0;
    }
    ul{
        margin:0px;
        padding:0px;
        overflow: hidden;
        li{
            list-style-type: none;
            padding:10px;
   
            &:hover{
                background-color: $orange;
                border-radius: 5px;
                cursor: pointer;
            }
            &:hover > a {
                color:$light-gray;
                border-radius: 5px;
            }
            a{
                color:$black;
                font-weight: bold;
                text-decoration: none;
            }
        }   
    }

}

.isHidden{
        background-color:$orange;
        transition: 0.5s ease;
        max-width: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
}
</style>
