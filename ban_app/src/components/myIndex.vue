<template>
  <div class="myindex" >
    <div style="background-color:#ffffff">
    <table ></table>
    <!-- BANADA历史 -->
     <div class="show">
       <div class="show_1"><img :src="$store.getters.urlData+pic_1" alt=""></div>
       <div class="show_2">
         <p>BANADA</p>
         <p>爱情的每一个瞬间都值得被珍藏</p>
       </div>
     </div>
     <!-- 品牌故事 -->
      <el-row  type="flex" justify="center" class="row_bg" :gutter="20" style="margin-top:20rem">
        <el-col :span="15">
          <img :src="$store.getters.urlData+pic_2">
        </el-col>
        <el-col :span="9">
          <h4>品牌故事</h4>
          <p>从一九四七年巴黎蒙田大街30号New Look的展出开始，Dior就成为高级女装的代名词, 继承了法国高级女装的传统，始终保持华丽的设计路线，做工精细，迎合上流社会成熟女性的审美品味，象征着法国时装文化的最高精神。</p>
          <img :src="logo">
        </el-col>
      </el-row>
      <!-- 大图片 -->
      <el-row>
        <el-col :span="24">
          <img class="big" :src="$store.getters.urlData+pic_3">
        </el-col>
      </el-row>
     <!-- Four Leaf Clover -->
     <el-row class="leaf">
       <el-col :span="12">
           <div class="four">
              <h3>Four Leaf Clover</h3>
              <span>四叶草戒指</span>
              <div class="line"></div>
              <p>个性简约 释放活力</p>
           </div>
           <div class="pro" v-if="pids[0]">
              <div>
                 <img :src="$store.getters.urlData+pids[0].pic">
                 <span>￥{{pids[0].price}}</span>
                 <el-button type="danger" plain>立即购买</el-button>
              </div>
               <div>
                 <img :src="$store.getters.urlData+pids[1].pic" alt="">
                 <span>￥{{pids[1].price}}</span>
                 <el-button type="danger" plain>立即购买</el-button>
              </div>
           </div>
       </el-col>
       <el-col :span="12">
          <img class="animated slideInRight" :src="$store.getters.urlData+pic_4" alt="">
       </el-col>
     </el-row>
     <!--  -->
     <div class="title">
       <span>CAMELLIA 系列</span>
       <div class="line"></div>
     </div>
     <!-- CAMELLIA 系列产品 -->
       <el-row class="cam">
         <!-- 商品1 -->
         <el-col :span="6">
            <div class="zhubao" v-if="pids[2]">
              <img  :src="$store.getters.urlData+pids[2].pic">
              <p class="myzhubao">{{pids[2].title}}</p>
              <p class="myprice">￥{{pids[2].price}}</p>
            </div>
         </el-col>
       <!-- 商品2 -->
        <el-col :span="6">
            <div class="zhubao" v-if="pids[3]">
              <img  :src="$store.getters.urlData+pids[3].pic">
              <p class="myzhubao">{{pids[3].title}}</p>
              <p class="myprice">￥{{pids[3].price}}</p>
            </div>
         </el-col>
         <!-- 商品3 -->
         <el-col :span="6">
            <div class="zhubao" v-if="pids[4]">
              <img  :src="$store.getters.urlData+pids[4].pic">
              <p class="myzhubao">{{pids[4].title}}</p>
              <p class="myprice">￥{{pids[4].price}}</p>
            </div>
         </el-col>
         <!-- 商品4 -->
          <el-col :span="6">
            <div class="zhubao" v-if="pids[5]">
              <img  :src="$store.getters.urlData+pids[5].pic">
              <p class="myzhubao">{{pids[5].title}}</p>
              <p class="myprice">￥{{pids[5].price}}</p>
            </div>
         </el-col>
       </el-row>
     <!--  -->
       
       <div class="title title01">
       <span>STYAAR SKY系列</span>
       <div class="line"></div>
     </div>
     <!-- CAMELLIA 系列产品 -->
       <el-row class="sky">
         <!-- 商品1 -->
         <el-col :span="6">
            <div class="zhubao" v-if="pids[9]">
              <img  :src="$store.getters.urlData+pids[9].pic">
              <p class="myzhubao">{{pids[9].title}}</p>
              <p class="myprice">￥{{pids[9].price}}</p>
            </div>
         </el-col>
       <!-- 商品2 -->
        <el-col :span="6">
            <div class="zhubao" v-if="pids[10]">
              <img  :src="$store.getters.urlData+pids[10].pic">
              <p class="myzhubao">{{pids[10].title}}</p>
              <p class="myprice">￥{{pids[10].price}}</p>
            </div>
         </el-col>
         <!-- 商品3 -->
         <el-col :span="6">
            <div class="zhubao" v-if="pids[11]">
              <img  :src="$store.getters.urlData+pids[11].pic">
              <p class="myzhubao">{{pids[11].title}}</p>
              <p class="myprice">￥{{pids[11].price}}</p>
            </div>
         </el-col>
         <!-- 商品4 -->
          <el-col :span="6">
            <div class="zhubao" v-if="pids[12]">
              <img  :src="$store.getters.urlData+pids[12].pic">
              <p class="myzhubao">{{pids[12].title}}</p>
              <p class="myprice">￥{{pids[12].price}}</p>
            </div>
         </el-col>
       </el-row>
       </div>
       <!-- 固定图片 -->
       <img :src="xia" class="xia">
       <!-- 底部图片二维码 -->
       <el-row >
         <el-col :span="24" type="flex" justify="center" align="middle">
             <img :src="pri" style="margin-top:8rem">
             <p style="margin-bottom:3rem;margin-top:1rem;color:rgb(169, 89, 89);letter-spacing:0.2rem">私人定制服务</p>
             <div style="border-top:1px solid #666666;border-bottom:1px solid #666666;width:28rem;margin-bottom:30rem">
               <p style="font-size:2rem;letter-spacing:0.4rem;font-weight:200;padding-top:1rem">为特别的你定特别的美丽</p>
             </div>
         </el-col>
       </el-row>
  </div>
</template>
<script>
export default {
  data(){
    return{
      pic_1:"",
      pic_2:"",
      pic_3:"",
      pic_4:"",
      pic_5:"",
      pic_6:"",
      pic_7:"",
      pic_8:"",
      logo:require('../assets/11.png'),
      xia:require("../assets/pc7.jpg"),
      pids:[],
      pri:require("../assets/car02.png")
    }
  },
  created(){
      this.getImg();
      this.getPro();
  },
  methods:{
    getImg(){
      var url="pro/pic";
      this.axios.get(url).then(res=>{
        // console.log(res.data.data)
        this.pic_1=res.data.data[0].pic_1;
        this.pic_2=res.data.data[0].pic_2;
        this.pic_3=res.data.data[0].pic_3;
        this.pic_4=res.data.data[0].pic_4;
        this.pic_5=res.data.data[0].pic_5;
        this.pic_6=res.data.data[0].pic_6;
        this.pic_7=res.data.data[0].pic_7;
        this.pic_8=res.data.data[0].pic_8;
        console.log(this.pic_8)

      })
    },
    getPro(){
      var url="pro/index_pro";
      this.axios.get(url).then(res=>{
        // 遍历数组中的每个对象，然后添加到数组中
        for(var item of res.data.data){
          this.pids.push(item);
        }
        console.log(this.pids)
      })
    }
  }
}
</script>
<style scoped>
 .myindex .show{
   position: relative;
   margin-top: 10rem;
   margin-bottom:10rem ;
 }
 .myindex .show .show_1{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
 }
 .myindex .show .show_2{
   position: absolute;
   z-index: 2;
   top:-3rem;
   right: 18rem;
 }
 .myindex .show .show_2>p:nth-child(1){
   font-size: 2rem;
   margin-bottom:0.1rem;
   letter-spacing: 0.3rem;
 }
 .myindex .show .show_2>p:nth-child(2){
   letter-spacing: 0.2rem;
   color: #666666;
 }
 .row_bg{
   margin-top: 17rem;
   margin-bottom: 2rem;
   padding: 0px 2rem 0px;
 }
 .row_bg img{
   width:100%;
 }
 .row_bg>.el-col:last-child{
    padding-top: 5rem;
    margin-left: 2rem;
    margin-right: 5rem;
 }
 .row_bg>.el-col:last-child>h4{
   margin-bottom: 1rem;
   font-weight: 100;
 }
 .row_bg>.el-col:last-child>p{
    text-align: justify;
    line-height: 1.8rem;
    letter-spacing: 0.1rem;
    color:#777777;
    font-size: 0.9rem;
 }
 .row_bg>.el-col:last-child>img{
   width:30%;
 }
 .myindex .big{
   width:100%;
   margin-top:2rem;
 }
 /* Four Leaf Clover */
 .myindex .leaf{
    margin:4rem 3rem 2rem;
 }
 .myindex .leaf>.el-col:last-child>img{
   width:100%;
 }
 .myindex .leaf .four{
   text-align: center;
   
 }
 .myindex .leaf .four .line{
   width:5rem;
  border-top: 2px solid rgb(234, 126, 126);
  margin-top:0.5rem;
  margin-left: 15.8rem;
 }
  .myindex .leaf .four>p{
    margin-top: 0.8rem;
    font-size: 0.9rem;
    color:lightslategray;
    font-weight: 100;

  }
  .myindex .leaf .pro{
    display: flex;
  }
  .myindex .leaf .pro>div:nth-child(1){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  }
  .myindex .leaf .pro>div:nth-child(1)>img{
    width:18rem;
    margin-top: -3rem;
    
  }
  .myindex .leaf .pro>div:nth-child(1)>.el-button{
    margin-top: 1rem;
    width: 8rem;
  } 
  .myindex .leaf .pro>div:nth-child(2){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  }
  .myindex .leaf .pro>div:nth-child(2)>img{
    width:18rem;
    margin-top: -3rem;
  }
  .myindex .leaf .pro>div:nth-child(2)>.el-button{
    margin-top: 1rem;
    width: 8rem;
  }
  .myindex .title{
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  margin-top:3rem;
  margin-bottom: 3rem;
  
}
  .myindex .title01{
  margin-top:-2rem;
  
  
}
.myindex .title span{
  display: inline-block;
  font-size:1.6rem;
  font-weight:500;
  margin-top:1rem;

}
.myindex .title .line{
  width:5rem;
  border-top: 2px solid rgb(234, 126, 126);;
  margin-top:0.5rem;
}
.zhubao{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
 
}
.zhubao .myzhubao{
  font-size: 1.1rem;
  margin-top: 0rem;
  margin-bottom: 0.3rem;
}
.zhubao .myzhubao:hover{
  color:coral;
}
.zhubao .myprice{
   font-size: 1.1rem;
   font-weight: 500;
   margin-top: 0.3rem;
   margin-left: -0.5rem;
}
.zhubao>img:nth-child(1){
   transition: 1s ease-out;
}
.zhubao>img:nth-child(1):hover{
   transform: scale(1.1);
   cursor: pointer;
}
.myindex .cam{
  padding: 2rem;
  
}
/* .myindex{
   background: url("../assets/pc7.jpg") no-repeat;
   position: fixed;
   bottom: 2rem;
} */
.myindex .xia{
  width:100%;
  position: fixed;
  bottom: -10rem;
  z-index: -1;
}

</style>