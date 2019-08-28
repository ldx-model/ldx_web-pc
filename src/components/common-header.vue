<template>
  <div class="header-box">
    <el-row :gutter="20">
      <el-col :span="6">
        <div>logo</div>
      </el-col>
      <el-col :span="12">
        <div class="box-title">
          <span @click="concern">关于我们</span>
          <span @click="support">软件服务于支持</span>
          <span @click="contact">联系我们</span>
        </div>
      </el-col>
      <el-col :span="6" class="box_title-btn">
        <div class="box-btn">
          <span class="btn" @click="login">登录</span>
          <span class="btn" @click="registe">注册</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    concern () {},
    support () {},
    contact () {},
    login () {
      console.log(111)
    },
    registe () {
      console.log(222)
    }
  }
}
</script>>
<style scoped lang="scss">
.header-box{
  height: 100px;
  line-height: 100px;
  margin: 10px 0;
  span{
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
    margin-left: 10px;
  }
  .box_title-btn{
    text-align: right;
  }
  .box-btn span{
    border: 1px solid;
    border-radius: 10px;
    font-size: 14px;
  }
}
</style>
