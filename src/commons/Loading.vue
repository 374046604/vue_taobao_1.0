<template>
  <div class="loading" v-show="showOk">
      <div class="time_sun">{{timer}}</div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      timer:3,
      showOk:true
    }
  },
  created:function(){
    let _this=this;
    setTimeout(function(){
      _this.showOk=false;
    },3000)
    for(var i=0;i<3;i++){
      setTimeout(function(){
        _this.timer--
      },i*1000)
    }
  }
}
</script>

<style scoped>
.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url('../assets/img/loading.jpg') no-repeat;
  background-size: 100% 100%;
  z-index: 10;
}
.loading .time_sun {
  display: inline-block;
  float: right;
  margin-right: 0.19rem;
  margin-top: 0.2rem;
  font-size: 0.2rem;
  color: red;
}

</style>
