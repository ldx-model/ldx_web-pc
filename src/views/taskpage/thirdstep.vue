<template>
  <div class="thirdstep">
    <commonheader :showSearch="showSearch"></commonheader>
    <div class="thirdstep_top">
      <p class="top_title">
        第三步
        <br />请选择所需软件，和所处。
      </p>
    </div>
    <div class="content-footer">
      <el-button round @click="next">下一步</el-button>
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
      showSearch: true
    }
  },
  methods: {
    next () {
      this.$router.push('/laststep')
    }
  }
}
</script>
<style lang="scss" scoped>
.thirdstep {
  margin: 0 100px;
  .thirdstep_top {
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .top_title {
    font-size: 20px;
    letter-spacing: 2px;
    line-height: 25px;
    margin: 40px 0;
  }
  .content-footer {
      display: flex;
      justify-content: flex-end;
      padding-top: 100px;
    .el-button {
      background: #c54f8b;
      color: white;
      border: none;
      padding: 10px 30px;
    }
  }
}
</style>
