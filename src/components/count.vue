<template>
        <div v-tap="{fn:vuetap,name:'点击'}" 
  v-longtap="{fn:vuetap,name:'长按'}" 
  v-swipeleft="{fn:vuetap,name:'左滑'}"
  v-swiperight="{fn:vuetap,name:'右滑'}"
  v-swipeup="{fn:vuetap,name:'上滑'}"
  v-swipedown="{fn:vuetap,name:'下滑'}"  style="height:100%">
            <h2>{{msg}}</h2>
            <hr/>
            <h3>{{$store.state.count}}</h3>
            <p>
               <button @click="$store.commit('add',10)">+</button>
              <button @click="reduce">-</button>
            </p>

              剩余时间<timer @time-end="message = '倒计时结束'" :endTime='endTime'></timer>
               <p style="color:red;font-size:25px;">{{name}}</p>
        </div>
    

    </template>
    <script>
        import { mapState,mapMutations } from 'vuex';
        import store from '@/vuex/store'
        import timer from '@/common/timer/timer'
        import vuetouch from '@/common/touch/vue-touch.js'
        export default{
            data(){
                return{
                    msg:'Hello Vuex',
                    endTime : '2017-12-2 00:00:00',
                    name:'开始'

                }
            },
             components : {
                    timer
             },
            store,
        computed:{
            ...mapState({
            count:state=>state.count  //理解为传入state对象，修改state.count属性
        })
        },
         methods:{
            ...mapMutations([
            'add','reduce'
                ]),
             vuetap:function(s){
                this.name=s.name;
              }
            }
        }
    </script>