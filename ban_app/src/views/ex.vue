<template>
    <div>
      <div class="tabs">
          <button @click="curP=0">第一阶段</button>
          <button @click="curP=1">第二阶段</button>
        </div>
        <div v-show="curP==0"  class="tab1" v-for="(item,index) of data1" :key="index+'1'">
             <p>{{item.title}}</p>
             <p>{{item.age}}</p>
        </div>
        <div class="tab2"  
        v-show="curP==1"
        v-for="(item,index) of data2" :key="index">
             <p>{{item.title}}</p>
             <p>{{item.age}}</p>
        </div>
    </div>
</template>
<script>
export default {
   data(){
     return{
       data1:[
         {title:"然然",age:19},
         {title:"东东",age:25}
       ],
       data2:[
         {title:"涛涛",age:30},
         {title:"亮亮",age:40}
       ],
       data3:["第一阶段","第二阶段"],
       curP:0
     }
   },
  methods:{

  }
}
</script>
<style scoped>
   .tabs ul{
     list-style: none;
     display: flex;
    
   }
  .tabs ul>li+li{
    margin-left:5rem
  }
   
</style>

