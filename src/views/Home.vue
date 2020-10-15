<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
   <div class="text-center app_bar">
      <h1 class="img">BC 
       <i class="fa fa-camera camera_icon"></i>
      </h1>
     <div class="primary brand_title">
       Boldseams Couture
     </div>
   </div>
   <Profile />
   <br>
   <Business />
  </div>
</template>

<style>
.primary{
  color: rgb(94, 168, 238);
}
  .img{
    position: relative;
  }
  .camera_icon{
    font-size: 10px;
    color: grey;
    position: absolute;
    bottom: 0;
  }
  .brand_title{
    font-weight: thin;
    font-size: 20px;
  }
</style>
<style scoped>
.app_bar{
  margin: 70px auto; 
}
</style>

<script>
// // @ is an alias to /src
import Profile from "@/components/Profile.vue";
import Business from "@/components/Business.vue";

export default {
  name: "Home",
  components: {
    Profile,
    Business
  }
};
</script>
