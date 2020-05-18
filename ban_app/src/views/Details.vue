<template>
   <div class="detail">
     <div class="bread">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/products' }">产品页</el-breadcrumb-item>
      </el-breadcrumb>
      </div>
      <!-- 商品页面 -->
      <div class="container">
            <el-row>
              <el-col :span="8">
                  <div>
                    <img :src="img" alt="">
                  </div>
                   <ul>
                     <li>
                       <img   class="myimg" :src="img">
                     </li>
                   </ul>
              </el-col>
              <el-col :span="16" v-if="list[0]">
                  <h4>{{list[0].title}}</h4>
                  <div class="line"></div>
                  <p class="price">¥{{list[0].price}}</p>
                  <p class="details">{{list[0].details}}</p>
                  <div class="spec">
                  <span>材质</span>
                  <el-button type="danger" plain >铂900</el-button>
                  <el-button type="danger" plain >黄18k金</el-button>
                  <el-button type="danger" plain >白18k金</el-button>
                  </div>
                   <div class="add">
                      <el-button type="danger" @click="addCart(list[0].lid,list[0].title,list[0].price)">加入购物车</el-button>
                       <el-input-number v-model="num" @change="handleChange()" :min="1" :max="10" label="描述文字"></el-input-number>
                   </div>
              </el-col>
            </el-row>
      </div>
   </div>
</template>
<script>
export default {
   props:["lid"],
   data(){
     return{
       img:require("../assets/pic_1.png"),
       num:1,
       list:[],
      //  
     }
   },
   created(){
     this.getData();
   },
   methods:{
      addCart(lid,lname,price){
        // 1.请求服务器数据的接口地址
        var url="user/addcart";
        //2.设置请求的参数
        var obj={lid,lname,price}
        //3.发送ajax请求
        this.axios.get(url, {
          params: obj
        })
        .then(res => {
          console.log(res.data);
          if(res.data.code==-2){
            this.$message.error("请先登录")
            this.$router.push("/login")
          }else if(res.data.code==1){
            this.$message("已成功添加到购物车，您可到购物车中查看")
          }
        })
        //4.获取的数据进行操作
      },
      handChange(value){
        console.log(value);
      },
      getData(){
        var url="/pro/details";
        var obj={lid:this.lid}
        this.axios.get(url, {
          params:obj
        })
        .then(res => {
          // console.log(res.data.data);
          this.list=res.data.data;
        })
      }
   }
}
</script>
<style scoped>
.myimg{
  width:20%;
}
.add{
  margin:2rem 0rem
}
.add>.el-button{
  margin-right: 1rem;
  width:10rem;
  height: 3rem;
  font-size: 1.2rem;
}
.details{
   width:20rem;
   text-align: justify;
   line-height: 1.8;
   color:#555555;
   margin-bottom: 2rem;
}
.price{
  font-size: 2.5rem;
  margin-left:0rem;
  color:#ea7e7e;
}
.detail>.bread{
   margin: 2rem 0rem 2rem 3rem;
}
.spec>span{
    margin-right: 1rem;
    font-size: 1.2rem;
}
.line{
  width:3rem;
  height: 0.2rem;
  background: #d5d5d5;
  margin:2rem 0rem;
}
</style>