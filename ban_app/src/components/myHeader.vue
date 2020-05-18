<template>
 <div class="header">
   <!-- 页头中的登录注册 -->
  <div class="myheader">
    <span>欢迎访问珠宝商城!</span>
    <!-- 登录状态 -->
      <div class="rig" v-if="uname!==''">
        欢迎回来 {{uname}} | <a @click="logout">退出</a>
      </div>
    <!-- 未登录状态 -->
    <div class="rig"  v-if="uname==''">
      <img :src="loginSrc" alt="">
      <a href="" ><router-link to="/login">登录</router-link></a>
      <img :src="regSrc" alt="">
      <router-link to="/reg"><a href="">注册</a></router-link> 
      <img :src="cartSrc" alt="">
    </div>
  </div>
   <!-- 导航栏目-->
   <div class="tabr">
    <el-menu  class="el-menu-demo" mode="horizontal"  router>
  <el-menu-item index="/">首页</el-menu-item>
  <!-- 产品 -->
  <el-submenu index="/products">
    <template slot="title">产品</template>
    <el-menu-item index="/products" text-color="#ea7e7e">全部</el-menu-item>
    <el-menu-item index="/product2" text-color="#ea7e7e">戒指</el-menu-item>
    <el-menu-item index="2-2">耳饰</el-menu-item>
    <el-menu-item index="2-3">手链</el-menu-item>
    <el-menu-item index="2-4">项链</el-menu-item>
  </el-submenu>
  <!-- 系列 -->
  <el-submenu index="3">
    <template slot="title">系列</template>
    <el-menu-item index="3-1">CAMELLIA系列</el-menu-item>
    <el-menu-item index="3-2">GLIMMER系列</el-menu-item>
    <el-menu-item index="3-3">STARRY系列</el-menu-item>
  </el-submenu>
<!-- logo -->
  <el-menu-item index="4" >
    <img :src="logoSrc02" alt="" class="logPic">
  </el-menu-item>
  <el-menu-item index="5">故事</el-menu-item>
  <el-menu-item index="6">博客</el-menu-item>
  <el-menu-item index="7">联系</el-menu-item>
</el-menu>
</div>
  </div>
</template>
<script>
import {mapState, mapMutations} from "vuex"
export default {
   data(){
     return{
       logoSrc:require('../assets/11.png'),
       loginSrc:require('../assets/login.png'),
       regSrc:require('../assets/reg.png'),
       cartSrc:require('../assets/cart01.png'),
       logoSrc02:require('../assets/logo.png')
  
     }
   },
   
   methods:{
      logout(){
        // 点击退出时，清空uname的值同时将localStorage和sessionStorage保存的值清空，直接调用vuex中setUname，无需请求服务器
          this.setUname("");
          localStorage.clear();
          sessionStorage.clear();
      },
      ...mapMutations(["setUname"])
      // 将vuex中的函数变成组件自己的
      // setUname(uname){this.$store.commit("setUname,uname")}
   },
   mounted(){
      // 当页面加载时，尝试从浏览器的localStorage或sessionStorage中获得uname变量
      // 因为localStorage和sessionStorage不受网页影响的，他们属于浏览器的存储机制
      var uname=localStorage.getItem("uname")||sessionStorage.getItem("uname");
      // 如果在dom树挂载完成后，试着才能够浏览器中获取uname，如果有就给vuex中的setUname，没有就返回空字符串，依旧是未登录状态
      this.setUname(uname||"");
   },
   computed:{
     ...mapState(["uname"])
   }
}
</script>
<style scoped>
  .myheader{
    width:100%;
    display:flex;
    -webkit-display:flex;
    -moz-display:flex;
    -ms-display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0.8rem;
    border-bottom: 0.05rem solid #d5d5d5;
  
  }
.myheader >.rig>img:first-child{
  width:8%;
  margin-right:0.2rem;
}
.myheader >.rig>img:nth-child(3){
  width:8%;
  margin-right:0.2rem;
}
.myheader >.rig>img:last-child{
  width:9%;
}
.myheader .rig{
  display: inline-flex;
  align-items: center;
  width:12rem;

}
.myheader a{
  text-decoration: none;
  color:#555555;
  font-size:0.8rem;
  margin-right:0.8rem
}
.myheader>span{
  font-size:0.8rem;
  margin-left: 2rem;

}
.el-menu {
    /* border-right: solid 1px #e6e6e6; */
    list-style: none;
    position: relative;
    margin-left:3.5rem;
    padding-left: 0;
    background-color: #FFF;
    padding: 1.1rem;
}
.el-menu.el-menu--horizontal{
  border:0;
}
.tabr{
  border-bottom: 0.05rem solid #d5d5d5;
}
.logPic{
  width:15rem;
}
.el-menu--horizontal>.el-menu-item {
    float: left;
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid transparent;
    color: #000000;
    font-size:1rem;
    padding:0 2.8rem;
}
.el-menu--horizontal>.el-menu-item:hover{
  color:#ea7e7e;
}
.el-menu--horizontal>>>.el-submenu__title {
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid transparent;
    color: black;
    font-size:1rem;
    padding:0 2.8rem;
}
.el-menu--horizontal>>>.el-submenu__title:hover{
   color:#ea7e7e;
}

</style>