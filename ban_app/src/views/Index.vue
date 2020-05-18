<template>
  <div >
    <div style="background-color:#ffffff">
      <el-carousel :interval="4000" type="card" height="300px" >
    <el-carousel-item v-for="(item,i) of list" :key="i">
     <img :src="url+item.pic" class="myImg">
    </el-carousel-item>
  </el-carousel>
     <!-- BANADA珠宝 -->
     <div class="title">
       <img :src="tiPic" alt="">
       <span>BANADA珠宝</span>
       <div class="line"></div>
     </div>
     <!-- 珠宝展示图片 -->
    <el-row :gutters="20">
       <el-col :span="6" v-for="(item,i) of show" :key="i">
          <div class="zhubao">
              <img :src="url+item.pic">
              <p class="myzhubao">{{item.title}}</p>
              <span class="mydetails">{{item.details}}</span>
          </div>
      </el-col>
    </el-row>
    <!-- BANADA历史  -->
     <div class="title title1">
       <img :src="tiPic" alt="">
       <span>BANADA历史</span>
       <div class="line"></div>
     </div> 
    </div> 
    <!-- 引入组件myIndex -->
    <my-index></my-index>
  </div>
</template>
<script>
import myIndex from "../components/myIndex";
import {mapState} from "vuex";
export default {
  data(){
    return {
      list:[],
      tiPic:require('../assets/car01.png'),
      show:[]
    }
  },
  created(){
    this.getdata();
    this.getShow();
  },
  methods:{
    getdata(){
      var url="pro/carousel";
      this.axios.get(url).then((res)=>{
        // console.log(res.data)
        this.list=res.data.data;
        // console.log(this.list[0].title)
        
      })
    },
    getShow(){
      var url="pro/show";
      this.axios.get(url).then(res=>{
        console.log(res.data)
        this.show=res.data.data;
        console.log(this.show)
      })
    }
   
  },
  computed: {
     ...mapState(["url"])
  },
  components:{myIndex}

}
</script>
<style scoped>
   .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
.myImg{
  width:100%;
  height: 100%;
}
.title{
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  margin-top:4rem;
  margin-bottom: 3rem;
}
.title1{
  margin-top: 2rem;
  margin-bottom: -1rem;
}
.title span{
  display: inline-block;
  font-size:2rem;
  font-weight:200 ;
  margin-top:1rem;

}
.title .line{
  width:11rem;
  border-top: 1px solid #d5d5d5;
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
  display: inline-block;
  font-size: 1.4rem;
  margin-top: 2rem;
  margin-bottom: 0.3rem;
  font-weight: 100;
 
}
.zhubao .mydetails{
  font-family: Arial, Helvetica, sans-serif;
  white-space: 0.1rem;
  letter-spacing: 0.1rem;
}
</style>