<template>
  <div class="error_step">
    <commonheader></commonheader>
    <div class="error_step_top">
      <div class="step_top--img">
        <img :src="taskImg" alt="">
        <p>发布失败</p>
        <p class="step_img--p">可能是因为网络原因</p>
        </div>
        <ul class="step_top--ul">
          <li v-for="(item,index) in btnlist" :key="index">
              <el-button round @click="back">{{item.label}}</el-button>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
import commonheader from '@/components/common-header'
export default {
  components: {
    commonheader
  },
  data () {
    return {
      taskImg: require('@/assets/imgs/copy1.png'),
      btnlist: [
        {
          label: '返回'
        }
      ]
    }
  },
  methods: {
    back () {

    }
  }

}
</script>
<style lang="scss" scoped>
.error_step {
  margin: 0 100px;
  .error_step_top {
    width: 30%;
    text-align: center;
    margin: 30px 0 0 0;
    .el-button {
      background: #1B9EA7;
      color: white;
      border: none;
      padding: 8px 40px;
    }
  }
  .step_top--img{
    p{
      margin-top: 10px;
      color:#c54f8b;
    }
    .step_img--p{
        font-size: 12px;
    }
  }
  .step_top--ul{
    margin-top: 30px;
    li{
      margin-top: 10px;
    }
  }

}
</style>
