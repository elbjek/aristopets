<template>
  <div class="col-2 sidebar" >
<a href="#" class="navbar-brand">Welcome, User</a>
<ul>
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

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 @import '../../styles/global-variables.scss';
.sidebar{
    background: $orange;
    a{
        color:$white;
    }
    ul{
        li{
            list-style-type: none;
         
        }
    }
}

</style>
