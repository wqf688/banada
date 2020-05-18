<template>
   <div class="container cart">
     <div class="selAll"><input v-model="allcb" @change="selectAll" type="checkbox">全选</div>
     <el-row class="title">
       <el-col :xs="5" :sm="5" :md="5" :lg="10" >
         <span>商品</span>
       </el-col>
       <el-col class="price" :xs="9" :sm="8" :md="8" :lg="8">
         <span>价格</span>
         <span>数量</span>
       </el-col>
       <el-col class="count" :xs="9" :sm="10" :md="10" :lg="5">
         <span>合计</span>
         <span>操作</span>
       </el-col>
     </el-row>
     <!--  -->
     <el-row v-for="(item, index) in list" :key="index" class="title title1" type="flex"  align="middle" >
       <el-col :offset="1" :xs="5" :sm="5" :md="5" :lg="10" >
         <input type="checkbox" v-model="item.cb" @change="changeItem">
         <p>{{item.lname}}</p>
         <p class="detail">{{item.lname}}</p>
       </el-col>
       <el-col class="price price1" :xs="9" :sm="8" :md="8" :lg="8">
         <span>¥{{item.price.toFixed(2)}}</span>
          <ul>
            <li @click="mins(index)">-</li>
            <li><span>{{item.count}}</span></li>
            <li @click="add(index)">+</li>
          </ul>
       </el-col>
       <el-col class="count" :xs="9" :sm="10" :md="10" :lg="5">
         <span>¥{{item.price*item.count}}</span>
         <span @click="del(item.id)">删除</span>
       </el-col>
     </el-row>
     <!-- 按钮组 -->
       <el-row class="title">
       <el-col :span="10" >
         <div style="display:flex;align-items:center">
          <input type="checkbox" v-model="allcb" @change="selectAll">全选
          <el-button type="danger" style="margin-left:2rem" @click="clearCart">清空购物车</el-button>
          </div>
       </el-col>
       <el-col class="price" :span="6">
         <div style="display:flex;align-items:center">
         <span>已选商品</span>
         <span style="font-size:1.5rem;color:#F56C6C">{{cartCount}}</span>
         </div>
       </el-col>
       <el-col class="count" :span="8" >
         <div style="display:flex;align-items:center;justify-content:space-around">
         <p style="margin-bottom:0rem">总计:￥{{total}}</p>
         <el-button type="danger">结算</el-button>
         </div>
       </el-col>
     </el-row>
   </div>
</template>

<script>
export default {
    data(){
      return{
        // 1需要一个空的数组来接收获取的购物车商品的信息
        list:[],
        count:1,
        allcb:false
      }
    },
    created() {
       this.loadMore();
    },
     methods: {
        mins(i){
           this.list[i].count--;
           if(this.list[i].count<1) this.list[i].count=1;
        },
        add(i){
          this.list[i].count++;
        },
         // 功能一：当页面加载时，显示购物车的商品列表
        loadMore(){
          this.axios.get("user/findcart").then(res=>{
            console.log(res.data);
            // 将服务器中的购物车列表保存在临时变量rows中
            var rows=res.data.data;
            // 遍历每一个商品并且添加cb,表示商品的选中状态
            for(var item of rows){
              item.cb=false;
            }
            // 将新数组赋值给list
            this.list=rows;
            //  // 修改全局的数据，
            // var sum=0;
            // for(var item of this.list){
            //   sum+=item.count;
            //   }
            // this.$store.commit("setCount",sum)
          }).catch(err=>{
            console.log(err);
          })
        },
         // 功能二，删除单个商品
          del(id){
            //1.判断时候要删除此商品
          this.$confirm('确定删除此商品', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.get("user/del", {
            params: {
              id:id
            }
          })
          .then(res => {
            console.log(res.data);
            if(res.data.code==1){
            this.$message({
            type: 'success',
            message: '删除成功!'
          });
            //删除成功之后，再次更新购物车页面
            this.loadMore();
            }
          })       
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
                 
          },
        // 功能三：点全选下方全选，取消下方某一个会改变全选的状态
        selectAll(){
          // 全选控制下方,获取全选按钮的状态
          var cb=this.allcb;
          // 创建循环遍历所有商品的状态
          for(var item of this.list){
            item.cb=cb;
          }
        },
        changeItem(){
          // 修改商品的状态
          // 累加商品的状态为true，然后判断商品总数量等于true的总数量
          var sum=0;
          for(var item of this.list){
            if(item.cb) sum++
          }
          if(this.list.length==sum){
            this.allcb=true;
          }else{
            this.allcb=false;
          }
        },
        // 功能四：清空购物车
        clearCart(){
            // 先判断有没有需要清空的商品
            if(this.list.length==0){
              this.$message("您没有需要清空的商品")
              return;
            }
            
            var str="";
            for(var item of this.list){
              str+=item.id+",";
            }
            // 截取全部的商品id
          str=str.slice(0,-1);
           console.log(str);
          //  
          this.$confirm('确定清空购物车', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.get("user/delm", {
            params: {
              id:str
            }
          })
          .then(res => {
            console.log(res.data);
            if(res.data.code==1){
            this.$message({
            type: 'success',
            message: '已清空购物车!'
          });
            //删除成功之后，再次更新购物车页面
            this.loadMore();
            }
          })       
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消清空'
          });          
        });
           
          },      
     },
     computed: {
      //  计算总计，因为总计需要通过其他商品的价格数量来计算
          total(){
            var total=0;
            for(var item of this.list){
              if(item.cb){total+=item.price*item.count;}
             
            }
            return total;
           
          },
          // 选中商品的数量需要通过单个商品数量累计
          cartCount(){
              var sum=0;
              for(var item of this.list){
                if(item.cb){
                  sum+=item.count;
                }
              }
              return sum;
          }
     },

}
</script>

<style scoped>
.cart .selAll{
  margin:4rem 0rem  0rem 0rem;
}
.cart .title1 .detail{
  font-size: 0.9rem;
}
.cart .title1 .price1 ul{
   margin: 0;
   padding: 0.5rem 0.8rem;
   list-style: none;
   display: inline-flex;
   border: 0.01rem solid #d5d5d5;
   
}
.cart .title1 .price1 ul>li:first-child,.cart .title1 .price1 ul>li:last-child{
  cursor: pointer;
}
.cart .title1 .price1 ul li span{
  margin: 0.8rem;
}
   .cart .title .price span,.cart .title .count span{
      display: inline;
      box-sizing: border-box;
      margin:0 1rem;
   }
   .cart .title span{
     font-size: 1.1rem;
   }
   .cart .title{
     width:100%;
     padding: 0.5rem;
     border: 0.05rem solid #d5d5d5;
     margin: 1rem 10rem 2rem 0;
   }
   .cart .title1{
      margin-top: 1rem;
   }
</style>


</style>