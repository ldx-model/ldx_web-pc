<template>
  <div>
    <div class="filldown">
      <p>查看学生作品文件</p>
      <div v-for="(item,index) in dowmlist" :key="index" class="filldown-con">
        <div class="span">
          <i class="el-icon-document"></i>
          <span>{{item.title}}</span>
        </div>
        <el-button round>点击下载</el-button>
      </div>
    </div>
    <div class="filldown">
      <p>查看学生过往任务文件</p>
      <div v-for="(item,index) in pastDowmlist" :key="index" class="filldown-con">
        <div class="span">
          <i class="el-icon-document"></i>
          <span>{{item.title}}</span>
        </div>
        <el-button round>点击下载</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dowmlist: {
      type: Array,
      default: () => []
    },
    pastDowmlist: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.filldown {
  font-size: 12px;
  padding: 10px;
  border-radius: 10px;
  background: #e9e7e7;
  margin-bottom: 20px;
  .filldown-con {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  i {
    font-size: 40px;
    vertical-align: middle;
  }
  .el-button {
    background: #18acb6;
    color: white;
    border: none;
    padding: 5px 20px;
    font-size: 12px;
  }
}
</style>
