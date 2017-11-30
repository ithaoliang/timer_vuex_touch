<template>
      <p>{{time}}</p>
</template>

<script>
   export default{
       data () {
           return {
               time : '',
               flag : false
           }

       },
       mounted () {
           let time = setInterval(()=>{
               if(this.flag == true){
                   clearInterval(time)
               }
               this.timeDown()
           },500)
       },
       props : {
           endTime : {
               type : String
           }
       },
       methods : {
           timeDown () {
               var endTime = new Date((this.endTime).replace(/-/g,"/"))
               var nowTime = new Date();
               var leftTime = Math.floor((endTime.getTime()-nowTime.getTime())/1000)
               var d = Math.floor(leftTime/(24*60*60))
               var h = Math.floor(leftTime/(60*60)%24)
               var m = Math.floor(leftTime/60%60)
               var s = Math.floor(leftTime%60)
               this.time = `${d}天${h}小时${m}分${s}秒`
               if(leftTime <= 0){
                   this.flag = true
                   this.$emit('time-end')
                   this.time="活动已结束"
               }
              
           },
           formate (time) {
               if(time>=10){
                   return time
               }else{
                   return `0${time}`
               }
           }
       }
   }
</script>