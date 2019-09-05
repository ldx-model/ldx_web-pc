<template>
  <div class="common_foot">
    <p>
      <sup>*</sup>微信小程序也有同样的功能
    </p>
    <div class="pages_ul">
      <ul>
        <li>页面</li>
        <li>学生端</li>
        <li>pc端</li>
        <li>发布任务&接收任务</li>
        <li>个人信息</li>
      </ul>
      <ul>
        <li>联系我们</li>
        <li>学生端</li>
        <li>pc端</li>
        <li>发布任务&接收任务</li>
        <li>个人信息</li>
      </ul>
      <ul>
        <li>提出意见</li>
        <li>学生端</li>
        <li>pc端</li>
        <li>发布任务&接收任务</li>
        <li>个人信息</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.common_foot {
    p{
      color: #b7b7b7;
      margin-bottom: 10px;
      font-size: 15px;
    }
  .pages_ul {
    display: flex;
    ul {
      margin: 0 100px;
      display: flex;
      flex-direction: column;
    }
    ul > li {
      font-size: 12px;
      margin-top: 5px;
      color: #b7b7b7;
    }
    li:nth-child(1) {
      font-size: 15px;
      margin: 10px 0;
      color: #2c3e50;
    }
  }
}
</style>
