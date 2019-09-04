<template>
  <div class="success_step">
    <commonheader></commonheader>
    <div class="success_step_top">
      <div class="step_top--img">
        <img :src="taskImg" alt="">
        <p>发布成功</p>
        </div>
        <ul class="step_top--ul">
          <li v-for="(item,index) in btnlist" :key="index">
              <el-button round @click="item.fun">{{item.label}}</el-button>
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
          label: '查看',
          fun: data => {
            return this.check(data)
          }
        },
        {
          label: '返回',
          fun: data => {
            return this.bcak(data)
          }
        }
      ]
    }
  },
  methods: {
    check () {

    },
    back () {

    }
  }
}
</script>
<style lang="scss" scoped>
.success_step {
  margin: 0 100px;
  .success_step_top {
    width: 30%;
    text-align: center;
   margin: 30px 0 0 0;
    .el-button {
      background: #c54f8b;
      color: white;
      border: none;
      padding: 8px 40px;
    }
  }
  .step_top--img{
    p{
      margin-top: 10px;
      color:#1B9EA7;
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
