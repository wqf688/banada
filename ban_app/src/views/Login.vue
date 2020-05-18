<template>
    <div class="login">
       <div class="contain">
          <el-input 
          v-model="uname" 
          placeholder="请输入用户名"
          type="text"
          prefix-icon="el-icon-user"
          ></el-input>
          <el-input 
          class="user"
          v-model="upwd" 
          placeholder="请输入密码"
          show-password
          prefix-icon="el-icon-lock"
          ></el-input>
          <el-checkbox v-model="remember">记住我(请在私人设备上使用此功能)</el-checkbox>
          <hr>
          <!-- 登录按钮 -->
           <el-button class="btn"  type="danger" @click="mylogin">登录</el-button>
           <!-- 注册按钮 -->
           <el-button class="btn btn1" type="danger" plain>注册</el-button>
           <div class="bottom">
           <span >第三方账号登录</span>
           <img :src="qq" style="width:8%;margin-left:0.5rem">
           </div>
       </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data(){
    return{
      uname:"",
      upwd:'',
      remember:false,
      qq:require("../assets/QQ.png")
    }
  },
   methods:{
     mylogin(){
      //  定义正则表达式
      var reg = /^[a-z0-9]{3,9}$/i;
      if(!reg.test(this.uname)){
        this.$message.error({
          message:"用户名格式不正确",
          offset:150
        });
        return;
      }
      if(!reg.test(this.upwd)){
        this.$message.error({
          message:"密码格式不正确",
          offset:150
        })
        return;
      }
      // 发送ajax请求
      this.login({
         uname:this.uname,
         upwd:this.upwd
      }).then(()=>{
        // 点击记住密码时，将用户名保存在localStorange中
        if(this.remember){
          localStorage.setItem("uname",this.uname)
        }else{  //不点击记住密码，将用户名保存在sessionStorage中
          sessionStorage.setItem("uname",this.uname)
        }
        this.$router.push("/")
      })
    },
     ...mapActions(["login"])


   }
}
</script>>
<style scoped>
    .login{
      background: url(../assets/bg.jpg) no-repeat;
      height: 800px;
      /* filter: blur(1px); */
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .login .contain{
      width:37rem;
      height: 38rem;
      background-color: #ffffff;
      box-shadow: 0px 3px 8px 5px #d5d5d5;
      padding: 5rem 7rem;
    }
    .contain>>>input.el-input__inner:focus{
        border-color:rgba(234,126,126,0.8);
    }
    .contain .user{
      margin: 1rem 0;
    }
    .contain .btn{
      width:100%
    }
    .contain .btn1{
       margin:0.5rem 0
    }
    .contain .bottom{
      display: flex;
      align-items: center;
      margin-top:1rem
    }
    .contain .bottom>span{
      font-size: 0.8rem;
      color:#555555
    }
   
   
</style>
