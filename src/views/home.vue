<template>
  <div class="home-content">
    <commonheader></commonheader>
    <div class="content-left">
      <p class="left_title">这是一个</p>
      <p class="left_title">为学生创造价值的平台。</p>
      <p class="left_level">level up是一家致力于对接大学生与企业的服务平台，理念是给大学生提供线上的游戏化实习任务。</p>
    </div>
    <div class="content-footer">
      <el-button round>下载移动端</el-button>
      <el-button round>使用网页版</el-button>
      <p>微信小程序也具有同样的功能</p>
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
    return {}
  },
  methods: {}
}
</script>
<style scoped lang="scss">
.home-content {
  margin:0 50px;
  .content-left {
     margin:150px 0;
    .left_title{
      font-size: 24px;
      margin:0;
    }
    .left_level{
      width: 30%;
    }
  }
  .el-button {
    background: #c54f8b;
    color:white;
    border: none;
    padding: 10px 20px;
  }
}

</style>
