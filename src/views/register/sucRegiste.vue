<template>
  <div class="sucregiste">
    <div class="sucregiste_top">
      <p class="left_title">欢迎加入<br />LEVEL UP</p>
      <p class="left_level">
        level up是一家致力于对接大学生与企业的服务平台，理念<br />是给大学生提供线上的游戏化实习任务。
      </p>
    </div>
    <div class="sucregiste-footer">
      <el-button round @click="publish">发布任务</el-button>
      <el-button round>编辑资料</el-button>
      <p class="footer_p"><sup style="margin-top:-10px">·</sup>微信小程序也具有同样的功能</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    publish () {
      this.$router.push('/firststep')
    }
  }
}
</script>
<style scoped lang="scss">
.sucregiste{
    .sucregiste_top{
       margin: 100px 0;
        .left_title{
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
        color:white;
        border: none;
        padding: 10px 20px;
    }
    .footer_p{
        margin-top:15px;
    }
}
</style>
