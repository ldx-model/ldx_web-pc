<template>
  <div class="hall">
    <commonheader :showSearch="showSearch"></commonheader>
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="综合" name="first">
          <pasttask :show="show" :pastTaskList="pastTaskList"></pasttask>
        </el-tab-pane>
        <el-tab-pane label="价格" name="second">
          <pasttask :show="show" :pastTaskList="pastTaskList"></pasttask>
        </el-tab-pane>
        <el-tab-pane label="热度" name="third">
          <pasttask :show="show" :pastTaskList="pastTaskList"></pasttask>
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
import pasttask from '@/views/student/pastTask'
import commonfoot from '@/components/common-foot'

export default {
  components: {
    commonheader,
    pasttask,
    commonfoot
  },
  data () {
    return {
      showSearch: true,
      activeName: 'first',
      show: true,
      pastTaskList: [
        {
          company_name: '深圳益康电子',
          industry: '人工智能行业',
          title: '任务标题',
          desc: '平方字体 65pt 宣传折页 +VI',
          design: '设计',
          task_type: '教育培训',
          rest_day: '2019.8.4',
          apply_num: 2
        },
        {
          company_name: '深圳益康电子',
          industry: '人工智能行业',
          title: '任务标题',
          desc: '平方字体 65pt 宣传折页 +VI',
          design: '设计',
          task_type: '教育培训',
          rest_day: '2019.8.4',
          apply_num: 2
        },
        {
          company_name: '深圳益康电子',
          industry: '人工智能行业',
          title: '任务标题',
          desc: '平方字体 65pt 宣传折页 +VI',
          design: '设计',
          task_type: '教育培训',
          rest_day: '2019.8.4',
          apply_num: 2
        },
        {
          company_name: '深圳益康电子',
          industry: '人工智能行业',
          title: '任务标题',
          desc: '平方字体 65pt 宣传折页 +VI',
          design: '设计',
          task_type: '教育培训',
          rest_day: '2019.8.4',
          apply_num: 2
        },
        {
          company_name: '深圳益康电子',
          industry: '人工智能行业',
          title: '任务标题',
          desc: '平方字体 65pt 宣传折页 +VI',
          design: '设计',
          task_type: '教育培训',
          rest_day: '2019.8.4',
          apply_num: 2
        }
      ]
    }
  },
  methods: {
    handleClick () {}
  }
}
</script>
<style lang="scss" scoped>
.hall {
  margin: 0 100px;
  .student_pages--foot {
    margin: 50px 100px 40px 0px;
  }
}
</style>
<style lang="scss">
.hall {
  /deep/.pasttask .pasttask_con[data-v-4b74f6b6] {
    background: #f5f5f5;
  }
}
</style>
