<template>
  <div class="student_pages">
    <commonheader :showSearch="showSearch"></commonheader>
    <synopsis :information="information"></synopsis>
    <div class="student-con">
      <el-tabs v-model="active" @tab-click="handleClick">
        <el-tab-pane label="个人技能" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="过往任务" name="second">
          <pasttask :down="down"></pasttask>
        </el-tab-pane>
        <el-tab-pane label="作品浏览" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="评价" name="fourth">评价</el-tab-pane>
      </el-tabs>
    </div>
    <div class="student_pages--foot">
      <commonfoot></commonfoot>
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
  margin: 0 100px;
  .student-con {
    margin-top: 20px;
  }
  .student_pages--foot{
    margin-top: 50px;
    margin-bottom: 40px;
  }
}
</style>
<style lang="scss">
.student_pages {
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
