<template>
  <div class="hello">
    <el-row>
      <el-button>默认按钮1</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </el-row>
    <ul>
      <li>sddf</li>
      <li>sddf</li>
      <li>sddf</li>
      <li>sddf</li>
      <li>sddf</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  background: #42b983;
  .el-row{
    background: yellow;
    button:nth-child(1){
      font-size: 14px;
    }
  }
}
a {
  color: #42b983;
}
</style>
