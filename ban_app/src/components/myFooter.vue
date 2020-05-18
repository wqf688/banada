<template>
   <div class="myfooter">
       <el-row class="first" >
         <el-col :span="6">
           <el-row style="padding:0rem 2rem">
             <el-col :span="6">
               <img :src="car" alt="">
             </el-col>
             <el-col :span="18" style="margin-top:-0.3rem">
               <p style="color:#ea7e7e;margin:0rem;font-weight:600">满1000全包邮</p>
               <span style="font-size:0.8rem;color:#eaa1a1">全场订单满1000包邮</span>
             </el-col>
           </el-row>
         </el-col>
         <el-col :span="6">
           <el-row :gutter="20" style="padding:0rem 2rem" >
             <el-col :span="5">
               <img :src="pre" alt="">
             </el-col>
             <el-col :span="19" style="margin-top:-0.3rem">
               <p style="color:#ea7e7e;margin:0rem;font-weight:600">下单送精美礼品</p>
               <span style="font-size:0.8rem;color:#eaa1a1;">本店购买任意商品赠送精美礼品</span>
             </el-col>
           </el-row>
         </el-col>
          <el-col :span="6">
            <el-row :gutter="20" style="padding:0rem 2rem">
             <el-col :span="5">
               <img :src="ren" alt="">
             </el-col>
             <el-col :span="19" style="margin-top:-0.3rem">
               <p style="color:#ea7e7e;margin:0rem ;font-weight:600">
                  贴心的售后服务</p>
               <span style="font-size:0.8rem;color:#eaa1a1">7x24小时售后随时为您服务</span>
             </el-col>
           </el-row>
          </el-col>
         <el-col :span="6">
           <el-row :gutter="20" style="padding:0rem 2rem">
             <el-col :span="5">
               <img :src="mon" alt="">
             </el-col>
             <el-col :span="19" style="margin-top:-0.3rem">
               <p style="color:#ea7e7e;margin:0rem;font-weight:600">店铺优惠劵</p>
               <span style="font-size:0.8rem;color:#eaa1a1">每日整点可领取限量优惠劵</span>
             </el-col>
           </el-row>
         </el-col>
       </el-row>
       <hr class="line">
        <el-row  :gutter="10" class="bo">
          <el-col :span="6" >
             <p class="p1">关于产品</p>
             <span class="p2"> about product</span>
             <p class="p3">所有商品均为实物拍摄，各浏览器显示有所不同，对此要求高的买家慎拍</p>
          </el-col>
          <el-col :span="6" >
             <p class="p1">关于产品</p>
             <span class="p2"> about product</span>
             <p class="p3">所有商品均为实物拍摄，各浏览器显示有所不同，对此要求高的买家慎拍</p>
          </el-col>
          <el-col :span="6" >
             <p class="p1">关于产品</p>
             <span class="p2"> about product</span>
             <p class="p3">所有商品均为实物拍摄，各浏览器显示有所不同，对此要求高的买家慎拍</p>
          </el-col>
          <el-col :span="6" >
             <p class="p1">关于产品</p>
             <span class="p2"> about product</span>
             <p class="p3">所有商品均为实物拍摄，各浏览器显示有所不同，对此要求高的买家慎拍</p>
          </el-col>
        </el-row>
        <hr class="line">
        <el-row  >
          <el-col :span="24" type="flex" justify="center" align="middle">
            <p class="copy">Copyright  © 2018  珠宝商城模板  All rights reserved</p>
          </el-col>
        </el-row>
        
   </div>
</template>
<script>
export default {
   data(){
     return {
       car:require('../assets/che.png'),
       pre:require('../assets/pre.png'),
       ren:require('../assets/ren.png'),
       mon:require('../assets/mon.png'),
     }
   }
}
</script>>
<style scoped>
  .myfooter{
    background-color: #fde6e6;
  }
  .myfooter>.first{
    padding:3rem 2rem;
  }
  .myfooter .line{
    color:#eaa1a1;
  }
  .myfooter .pro{
    width:50rem;
  }
  .myfooter  .p1{
    color:#ea7e7e;
    margin-bottom: 0rem;
  }
   .myfooter .p2{
      color:#eaa1a1;
      font-size:0.7rem
   }
   .myfooter .p3{
     color:#eaa1a1;
     font-size:0.7rem;
     margin-top:0.5rem;
     line-height: 1.8;
     width:60%;
    
   }
   .myfooter .bo{
     padding:2rem 1rem 1rem 6rem
   }
   .myfooter .copy{
     color:#eaa1a1;
     font-size:0.7rem;
   }
</style>