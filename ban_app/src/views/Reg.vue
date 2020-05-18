<template>
   <div class="reg">
       <div class="contain">
         <!-- 用户名输入框 -->
          <el-input 
          v-model="uname" 
          placeholder="请输入用户名"
          type="text"
          prefix-icon="el-icon-user"
          @blur="uname_blur"
          ></el-input>
          <div :style="{display:uname_display}"  :class="{success:isUname==true,name_fail:isUname==false}">{{uname_msg}}</div>
          <!-- 密码输入框 -->
          <el-input 
          class="user"
          v-model="upwd" 
          placeholder="请输入密码"
          show-password
          prefix-icon="el-icon-lock"
          @blur="upwd_blur"
          ></el-input>
          <div :style="{display:upwd_display}"  :class="{success:isUpwd==true,name_fail:isUpwd==false}">{{upwd_msg}}</div>
          <!-- 确认密码 -->
          <el-input 
          v-model="upwd2" 
          placeholder="请再次输入密码"
          show-password
          prefix-icon="el-icon-lock"
          @blur="upwd2_blur"
          ></el-input>
           <div :style="{display:upwd2_display}"  :class="{success:isUpwd2==true,name_fail:isUpwd2==false}">{{upwd2_msg}}</div>
          <!-- 手机号码输入框 -->
          <el-input 
          class="user"
          v-model="phone" 
          placeholder="请输入手机号码"
          type="text"
          prefix-icon="el-icon-phone-outline"
          @blur="phone_blur"
          ></el-input>
          <div :style="{display:phone_display}"  :class="{success:isPhone==true,name_fail:isPhone==false}">{{phone_msg}}</div>
          <!-- 记住 -->
          <el-checkbox v-model="agreen">我同意《用户手册》和《保密条款》</el-checkbox>
          <hr>
          <!-- 登录按钮 -->
           <el-button class="btn"  type="danger" @click="myreg">注册</el-button>
           <!-- 注册按钮 -->
           <router-link to="/login">
           <el-button class="btn btn1" type="danger" plain>已经有账号？请登录</el-button>
           </router-link>
           <div class="bottom">
           <span >第三方账号登录</span>
           <img :src="qq" style="width:8%;margin-left:0.5rem">
           </div>
       </div>
    </div>
</template>
<script>
export default {
   data(){
     return{
       qq:require("../assets/QQ.png"),
       uname:"",
       upwd:"",
       upwd2:"",
       phone:"",
       agreen:false,
       uname_msg:"",
       isUname:false,
       uname_display:"none",
       upwd_msg:"",
       isUpwd:false,
       upwd_display:"none",
       upwd2_msg:"",
       isUpwd2:false,
       upwd2_display:"none",
       phone_msg:"",
       isPhone:false,
       phone_display:"none"

     }
   },
   methods:{
      myreg(){
        if(this.isUname&&this.isUpwd&&this.isUpwd2&&this.isPhone&&this.agreen){
             
        }else{
          this.$message.error('信息有误，请重新输入');
          //如果信息不正确就停止向下执行
          return;
        }
        var url="/user/reg";
        var obj={uname:this.uname,upwd:this.upwd,phone:this.phone};
        // 发送ajax请求
        this.axios.get(url,{params:obj})
        .then(res => {
          console.log(res.data)
          if(res.data.code==1){
            alert('注册成功')
            this.$router.push('/login')
          }else{
            alert('注册失败')
          }
        })
        .catch(err => {
          console.error(err); 
        })
      },
      // 当用户名输入框失去焦点时候，提示消息为用户名不能为空，并且让div显示
      uname_blur(){
         if(this.uname==""){
           this.uname_msg="用户名不能为空";
           this.uname_display="block"
         } 
      },
      upwd_blur(){
        if(this.upwd==""){
          this.upwd_msg="密码不能为空";
          this.upwd_display="block"
        }
      },
      upwd2_blur(){
        if(this.upwd2==""){
          this.upwd2_msg="密码不能为空";
          this.upwd2_display="block"
        }
      },
      phone_blur(){
         if(this.phone==""){
           this.phone_msg="手机号不能为空";
           this.phone_display="block"
         }
      }
   },
   watch:{
     uname(){
       //  定义正则表达式
        var reg = /^[a-z0-9]{3,9}$/i;
        this.isUname=reg.test(this.uname)
        // 如果用户输入正确，就让消息提示消息为空，并且应用success的样式，同时让div显示
        if(this.isUname){
          // 这里需要在后台查询下是否有相同的用户名，如果有相同的就显示占用，没有就继续执行
          this.uname_msg=""
          this.uname_display="block"
        }else{
          // 如果输入不正确，就提示消息 3~9位数字或字母，并且应用name_fail的样式，同时让div显示
          this.uname_msg="3~9位数字或字母";
          this.uname_display="block"
        }
     },
      upwd(){
       //  定义正则表达式
        var reg = /^[a-z0-9]{3,9}$/i;
        this.isUpwd=reg.test(this.upwd)
        
        if(this.isUpwd){
          this.upwd_msg=""
          this.upwd_display="block"
        }else{
          this.upwd_msg="3~9位数字或字母";
          this.upwd_display="block"
        }
     },
     upwd2(){
        if(this.upwd==this.upwd2){
          this.isUpwd2=true
          this.upwd2_msg=""
          this.upwd2_display="block"
        }else{
            this.isUpwd2=false;
            this.upwd2_msg="请保持密码输入一致";
            this.upwd2_display="block"
        }
     },
     phone(){
        //  定义正则表达式
        var reg=/^1[3-8]\d{9}$/;
        this.isPhone=reg.test(this.phone);
        if(this.isPhone){
          this.phone_msg="";
          this.phone_display="block"
        }else{
          this.phone_msg="请输入正确的手机格式";
          this.phone_display="block"
        }
     }
   }
}
</script>>
<style scoped>
    .reg{
      background: url(../assets/bg.jpg) no-repeat;
      height: 800px;
      /* filter: blur(1px); */
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .reg .contain{
      width:37rem;
      height: 38rem;
      background-color: #ffffff;
      box-shadow: 0px 3px 8px 5px #d5d5d5;
      padding: 5rem 7rem;
    }
    .reg .contain>>>input.el-input__inner:focus{
        border-color:rgba(234,126,126,0.8);
    }
   .reg  .contain .user{
      margin: 1rem 0;
    }
    .reg .contain .btn{
      width:100%
    }
    .reg .contain .btn1{
       margin:0.5rem 0
    }
    .reg .contain .bottom{
      display: flex;
      align-items: center;
      margin-top:1rem
    }
    .reg .contain .bottom>span{
      font-size: 0.8rem;
      color:#555555
    }
     .name_fail{
        background-color: #d14242;
        height: 2rem;
        margin: 0rem;
        margin-top: 0.5rem;
        width:80%;
        border-radius: 0.4rem;
        padding:0.2rem 0 0 1rem;
        color:#ffffff;
        font-size:0.9rem;  
    }
    .success{
      background: url(../assets/past.png) no-repeat;
      width:4rem;
      height: 1.8rem;
      margin-top:0.4rem
    }
    .uname_app{
      display: none;
    }
</style>
