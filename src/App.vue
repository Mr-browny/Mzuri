<template>
  <div id="app">
    <div id="nav" :style="scrolled == 100 ? 'position: fixed;  width: 100%; top: 2px; z-index: 10;' : '' " >
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <div class="brand_section">
        <span class="abbr">BC</span>
        Boldseams Couture
      </div>
      <div class="user">
        <div class="notification">
          <i class="fa fa-2x fa-bell icon"></i>
          <span class="count">5</span>
        </div>
        <div class="detail">
          <div class="name">Seun James</div>
          <a href="#" >Log out</a>
        </div>
      </div>
    </div>
    <!-- End of Navigation Bar -->

    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col cols="0" sm="1" class="d-none d-sm-block side_brand">
          <div class="title text-center">
            mzuri
          </div>
        </b-col>
        <b-col cols="12" sm="11">
          <div class="header">
            <div>

            <ul class="bc">
              <li><a href="#">Settings</a></li>
              <li><a href="#">User and Business Profile </a></li>
              <li><a href="#"></a></li>
            </ul>
            </div>
            <div class="info_icon">
              <i class="fa fa-2x fa-info-circle"></i>
            </div>
          </div>
          <router-view />  
        </b-col> 
      </b-row>
    </b-container>
  </div>
</template>

<style>
body,html{
  background-color: rgb(250, 249, 249);
  padding: 0;
  margin: 0;
}
#app {
  background-color: rgb(250, 249, 249);
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

/* Navigation bar styling */

#nav{
  box-sizing: border-box;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
  justify-content: space-between;
  background-color: #fff;
  padding: 15px 10px;  
  display: flex;
}
#nav .brand_section{
  margin-top: 10px;
  font-weight: bolder;
}
#nav .brand_section .abbr{
  padding: 1rem;
  background-color: #eeeeee;
  border-radius: 0.9rem;
  font-weight: bold;
}
#nav .user{
  display: flex;
  justify-content: space-between;
}

#nav .user .notification{ 
  position: relative;
  margin-right: 40px;
  color: #2c3e50;
}
#nav .user .notification .count{
  background-color: red;
  border: 1px solid #fff;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  top: -9px;
  left: 10px;
  color: #fff;
  padding: 2px;
  width: 100%;
  height: auto;
}
#nav .user .detail{
  text-align: right;
}
#nav .user .detail a{
  color: blue;
  margin: 6px;
}

/* helper classes */
.text-center{
  text-align: center;
}
.header{
  display: flex;
  justify-content: space-between;
}
 

/* Main content Styling */
.side_brand{
  background-image: linear-gradient(180deg, lightblue, rgb(94, 168, 238));
  position: relative;
  height: 93vh;
}
.side_brand .title{
  position: absolute;
  bottom: 0; 
  left: 0;
  width: 100%;
  padding: 0.5em;
  background-color: #fff !important;
}


/* bc */
.bc { 
  list-style: none; 
  overflow: hidden; 
  font: 18px Helvetica, Arial, Sans-Serif;
  margin: 0;
  margin-left: -14px;
  padding: 0;
}
.bc li { 
  float: left; 
}
.bc li a {
  color: grey;
  text-decoration: none; 
  padding: 10px 0 10px 55px;
  background: rgb(240, 248, 248); 
  position: relative; 
  display: block;
  float: left;
}
.bc li a:after { 
  content: " "; 
  display: block; 
  width: 0; 
  height: 0;
  border-top: 50px solid transparent;           /* Go big on the size, and let overflow hide */
  border-bottom: 50px solid transparent;
  border-left: 30px solid  rgb(240, 248, 248);
  position: absolute;
  top: 50%;
  margin-top: -50px; 
  left: 100%;
  z-index: 2; 
}   
.bc li a:before { 
  content: " "; 
  display: block; 
  width: 0; 
  height: 0;
  border-top: 50px solid transparent;           /* Go big on the size, and let overflow hide */
  border-bottom: 50px solid transparent;
  border-left: 30px solid white;
  position: absolute;
  top: 50%;
  margin-top: -50px; 
  margin-left: 1px;
  left: 100%;
  z-index: 1; 
}   
.bc li:first-child a {
  padding-left: 10px;
}
.bc li:nth-child(2) a{
   background:rgba(197, 194, 194, 0.61); 
}
.bc li:nth-child(2) a:before{
  /* border-left: 30px solid rgba(197, 194, 194, 0.61) ; */ 
}
.bc li:nth-child(2) a:after {
   border-left-color: rgba(197, 194, 194, 0.61); 
}
.bc li:last-child a { 
  display: none; 
}
.bc li:last-child a:after { border: 0; }
.bc li:nth-child(2) a:hover { background: rgba(197, 194, 194, 0.61); }
.bc li:nth-child(2) a:hover:after { border-left-color:rgba(197, 194, 194, 0.61) !important; }

/* info icon */
.info_icon{
  margin-top: 10px;
  color: grey;
}

 

</style>

<script>
export default {
  name: 'App',
  data(){
    return{
      scrolled: 0,
    }
  },
  created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll(){ 
        window.scrollY >= 60 ? this.scrolled = 100 : this.scrolled = 0
      },
    }
}
</script>

