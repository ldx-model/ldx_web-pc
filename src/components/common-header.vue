<template>
  <div class="header-box">
    <el-row :gutter="20">
      <el-col :span="6">
        <div>logo</div>
      </el-col>
      <el-col :span="10">
        <div class="box-title">
          <span @click="concern">关于我们</span>
          <span @click="support">软件服务于支持</span>
          <span @click="contact">联系我们</span>
        </div>
      </el-col>
      <el-col :span="8" class="box_title-btn">
        <div v-if="showLogin" class="box-btn">
          <span class="btn" @click="login">登录</span>
          <span class="btn" @click="registe">注册</span>
        </div>
        <div v-if="showSearch" class="level-btn" style="display:flex;justify-content:flex-end;">
          <el-input placeholder="在level上搜索你想要的" class="btn" v-model="search" prefix-icon="el-icon-search"></el-input>
          <p>登录成功，欢迎你 {{name}}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    showLogin: {
      type: Boolean,
      default: false
    },
    showSearch: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      search: '',
      name: 'Cici'
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
      this.$router.push({name: 'studentReg'})
    }
  }
}
</script>>
<style scoped lang="scss">
.header-box{
  height: 100px;
  line-height: 100px;
  padding: 10px 0;
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
  .level-btn{
    .btn{
      width: 45%;
    }
    p{
      font-size: 12px;
      margin-left: 20px;
    }
  }
}
</style>
<style lang="scss">
.header-box {
    /deep/.el-input__inner {
      background: transparent;
      border-radius:15px;
      height: 25px;
      line-height: 25px;
      border: 1px solid;
      font-size: 12px;
    }
}
</style>
