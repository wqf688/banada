<template>
   <div class="container">
       <!-- 商品列表 -->
        <div class="pro">
           <div class="pro_list" v-for="(item,i) of rout" :key="i">
                <img :src="$store.getters.urlData+item.pic" >
                <p class="hand">{{item.title}}</p>
                <p class="money">￥{{item.price}}</p>
                <router-link to="/">
                  <el-button type="danger" plain>查看详情</el-button>
                </router-link>
           </div>
        </div>
   </div>
</template>
<script>
export default {
  data(){
    return {
      ti:require('../assets/car01.png'),
      img:require('../assets/pic_1.png'),
      rout:[],
      
    }
  },
  created(){
      this.loadeMore();
  },
  methods:{
      loadeMore(){
        var url="/pro/rout";
        this.axios.get(url)
        .then(res => {
          console.log(res.data.data);
          // 多页数据追加操作
          this.rout=res.data.data;
        })
      }
  },
  
}
</script>
<style scoped>
.tab{
   color:#ea7e7e;

}
.pro .page ul{
   list-style: none;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-left: 20rem;
   margin-top: 5rem;
}
.pro .page ul>li+li{
  margin-left: 2rem;
}
.container .title{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
  /* border-bottom:1px solid #d5d5d5; */
  padding:0.5rem 0;
}
.container .title>p{
   font-size: 2rem;
   margin-top: 0.5rem;
   font-weight: 300;
}
.container .title>div{
   width:8rem;
   height: 0.1rem;
   background-color: #d5d5d5;
   margin-top:-0.5rem
}
.container .list>ul{
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
}
.container .list>ul>li+li{
    margin-left: 4.5rem;
}
.container .list>ul>li:first-child{
  font-size: 1.1rem;
  color:#ea7e7e;
  font-weight: bold;
}
.container li{
  color:gray;
  cursor: pointer;
}
.container .pro{
  display: flex;
  /* justify-content: space-around; */
  flex-wrap: wrap;
}
.container .pro .pro_list{
    width:22rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fcf4f4;
    margin: 0.5rem;
    padding: 1rem;
}
.pro_list>img{
  margin-bottom: 2rem;
  transition:all 1s ease-out;
  cursor: pointer;
}
.pro_list>img:hover{
  transform: scale(1.1);
}
.pro_list>.hand{
  font-size: 1.2rem;
  cursor: pointer;
}
.pro_list>.money{
  font-size: 1.2rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
}
.container .leave{
  width:2rem;
  height: 10rem;
}
</style>
