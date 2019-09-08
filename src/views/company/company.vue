<template>
  <div class="company_pages">
    <div style="margin:0 100px;">
      <commonheader :showSearch="showSearch"></commonheader>
    <synopsis :information="information"></synopsis>
    </div>
    <div class="company-con">
      <el-tabs v-model="active" @tab-click="handleClick">
        <el-tab-pane label="进行任务" name="first">
          <pasttask :pastTaskList="pastTaskList" style="margin:50px  100px;"></pasttask>
        </el-tab-pane>
        <el-tab-pane label="过往任务" name="second">
          <pasttask :down="dowm" :pastTaskList="pastTaskList" style="margin:50px  100px;"></pasttask>
        </el-tab-pane>
        <el-tab-pane label="评价" name="third">
          <evaluate style="margin:50px 100px;" :evaList="evaList"></evaluate>
        </el-tab-pane>
         <div class="company_pages--foot">
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
import evaluate from '@/views/student/evaluate'

import commonfoot from '@/components/common-foot'
export default {
  components: {
    commonheader,
    synopsis,
    pasttask,
    evaluate,
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
      },
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
      ],
      evaList: [
        {
          company_img: require('@/assets/imgs/copy1.png'),
          company_comment:
            '很认真决了不少难题，时间观念强，且不拖稿。赞赞,很认真负责的同学，做事效率高!很厉害的同学，帮我们解决了不少难题，时间观念强，且不拖稿。赞赞',
          company_comment_time: '2019-3-4'
        },
        {
          company_img: require('@/assets/imgs/copy1.png'),
          company_comment: '很厉害的同学_帮我们解决了不少难题_时间观念强_且不拖稿',
          company_comment_time: '2019-3-4'
        },
        {
          company_img: require('@/assets/imgs/copy1.png'),
          company_comment: '很认真负责',
          company_comment_time: '2019-3-4'
        },
        {
          company_img: require('@/assets/imgs/copy1.png'),
          company_comment:
            '很认真负责的同学，做事效率高!很厉害的同学，帮我们解决了不少难题，时间观念强，且不拖稿。赞赞',
          company_comment_time: '2019-3-4'
        },
        {
          company_img: require('@/assets/imgs/copy1.png'),
          company_comment: '很厉害的同学_帮我们解决了不少难题_时间观念强_且不拖稿',
          company_comment_time: '2019-3-4'
        }
      ]
    }
  },
  methods: {
    handleClick () {}
  }
}
</script>
<style scoped lang="scss">
.company_pages {
  .company-con {
    margin-top: 20px;
  }
  .company_pages--foot{
    margin: 50px 100px 40px 100px;
  }
}
</style>
<style lang="scss">
.company_pages {
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
