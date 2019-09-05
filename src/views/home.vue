<template>
  <div class="home-content">
    <commonheader :showLogin="showLogin"></commonheader>
    <div class="content-left">
      <p v-if="activename==='student'" class="left_title">
        这是一个<br />为学生创造价值的平台。
      </p>
      <p v-if="activename==='level'" class="left_title">
        注册成功<br/>欢迎加入LEVEL UP
      </p>
      <p class="left_level">
        level up是一家致力于对接大学生与企业的服务平台，理念<br />是给大学生提供线上的游戏化实习任务。
      </p>
    </div>
    <div class="content-footer">
      <el-button round>下载移动端</el-button>
      <el-button round>使用网页版</el-button>
      <p class="footer_p"><sup>·</sup> 微信小程序也具有同样的功能</p>
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
      activename: '',
      showLogin: true
    }
  },
  methods: {},
  mounted () {
    this.activename = this.$route.params.id
  },
  watch: {
    $route (val) {
      this.activename = val.params.id
    }
  }
}
</script>
<style scoped lang="scss">
.home-content {
  margin: 0 100px;
  .content-left {
    margin: 150px 0;
    .left_title {
      font-size: 24px;
      letter-spacing: 2px;
      line-height:28px
    }
    .left_level{
      line-height:25px;
      margin-top:15px;
    }
  }
  .el-button {
    background: #c54f8b;
    color: white;
    border: none;
    padding: 10px 20px;
  }
  .footer_p{
   margin-top:15px;
  }
}
</style>
