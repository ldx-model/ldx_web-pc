<template>
  <div class="student_pages">
    <div style="margin:0px 100px;">
      <commonheader :showSearch="showSearch"></commonheader>
      <synopsis :information="information"></synopsis>
    </div>
    <div class="student-con">
      <el-tabs v-model="active" @tab-click="handleClick">
        <el-tab-pane label="个人技能" name="first">
          <div style="margin:50px  100px;">用户管理</div>
        </el-tab-pane>
        <el-tab-pane label="过往任务" name="second">
          <pasttask :down="down" style="margin:50px 100px;"></pasttask>
        </el-tab-pane>
        <el-tab-pane label="作品浏览" name="third">
          <div style="margin:50px 100px;">用户管理</div>
        </el-tab-pane>
        <el-tab-pane label="评价" name="fourth">
          <div style="margin:50px 100px;">用户管理</div>
        </el-tab-pane>
        <div class="student_pages--foot">
          <commonfoot></commonfoot>
        </div>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import commonheader from '@/components/common-header'
import synopsis from '@/views/taskdetails/synopsis'
import pasttask from '@/views/student/pastTask'
import commonfoot from '@/components/common-foot'
export default {
  components: {
    commonheader,
    synopsis,
    pasttask,
    commonfoot
  },
  data () {
    return {
      showSearch: true,
      active: 'first',
      down: true,
      information: {
        nick_name: '沙田伊莱莎',
        school_name: '北京理工大学',
        aboutUs:
          '北京大学大二的学生北京大学大二的学生北京大学大二的学生北京大学大二的学生',
        task_count: 5,
        total_payment: 35
      }
    }
  },
  methods: {
    handleClick () {}
  }
}
</script>
<style scoped lang="scss">
.student_pages {
  .student-con {
    margin-top: 20px;
  }
  .student_pages--foot {
    margin: 50px 100px 40px 100px;
  }
}
</style>
<style lang="scss">
.student_pages {
  .el-tabs__header {
    margin: 0px;
  }
  .el-tabs__nav {
    margin-left: 100px;
  }
  .el-tabs__content {
    background: #f5f5f5;
    min-height: calc(100vh - 280px);
  }
  .el-tabs__item {
    color: #b7b7b7;
  }
  .el-tabs__item:hover {
    color: #2c3e50;
    cursor: pointer;
  }
  .el-tabs__item.is-active {
    color: #2c3e50;
  }
  .el-tabs__active-bar {
    background-color: #2c3e50;
  }
}
</style>
