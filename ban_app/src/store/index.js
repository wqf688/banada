import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 注册vue中
Vue.use(ElementUI);

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //  图片绝对路径
    url: "http://127.0.0.1:5050/",
    uname:"",
    cartCount:0
  },
  mutations: {   //专门修改state中的变量
    // 不能放异步请求
      setUname(state,uname){
        state.uname=uname;
      },
      setCount(state,n){state.cartCount=n},
      clearCount(state){state.cartCount=0}
  },
  getters:{   //获取state中的数据
    urlData(state) {
      return state.url;
    },
    countData(state){return state.cartCount;}

  },
  actions: {//专门负责发送异步ajax请求，从服务器端获取数据
      login(context,user){
        axios.get("/user/login",{params:user})
        .then(res=>{
          if(res.data.code==-1){
           alert('用户名或密码输入有误，请重新输入')
          }else if(res.data.code==1){
            alert('登录成功')
          }
          console.log(res.data.data[0].uname)
          context.commit('setUname', res.data.data[0].uname);
        })
      // context.commit('setUname',)
        // .catch(err=>{console.log(err)})
      }
  },
  modules: {
  }
})
