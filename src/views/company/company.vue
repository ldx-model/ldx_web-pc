<template>
  <div class="company_pages">
    <commonheader :showSearch="showSearch"></commonheader>
    <synopsis :information="information"></synopsis>
    <div class="company-con">
      <el-tabs v-model="active" @tab-click="handleClick">
        <el-tab-pane label="进行任务" name="first">
          <pasttask></pasttask>
        </el-tab-pane>
        <el-tab-pane label="过往任务" name="second">
          <pasttask :down="dowm"></pasttask>
        </el-tab-pane>
        <el-tab-pane label="评价" name="third">评价</el-tab-pane>
      </el-tabs>
    </div>
    <div class="company_pages--foot">
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
      dowm: true,
      information: {
        nick_name: '深圳科通有限公司',
        school_name: '人工智能行业',
        aboutUs: '深圳益康电子是一家以人工智能为主要科技创新的新型企业，该企业在行业内一直举足轻重的地位，是中国人工智能行业的领导者。学大二的学生',
        task_num: 10,
        total_payment: 32
      }
    }
  },
  methods: {
    handleClick () {}
  }
}
</script>
<style scoped lang="scss">
.company_pages {
  margin: 0 100px;
  .company-con {
    margin-top: 20px;
  }
  .company_pages--foot{
    margin-top: 50px;
    margin-bottom: 40px;
  }
}
</style>
<style lang="scss">
.company_pages {
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
