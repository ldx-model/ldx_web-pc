<template>
  <div class="student_pages">
    <div style="margin:0px 100px;">
      <commonheader :showSearch="showSearch"></commonheader>
      <synopsis :information="information"></synopsis>
    </div>
    <div class="student-con">
      <el-tabs v-model="active" @tab-click="handleClick">
        <el-tab-pane label="个人技能" name="first">
          <div style>用户管理</div>
        </el-tab-pane>
        <el-tab-pane label="过往任务" name="second">
          <pasttask :down="down" style="margin:50px 100px;" :pastTaskList="pastTaskList"></pasttask>
        </el-tab-pane>
        <el-tab-pane label="作品浏览" name="third">
          <el-row style="margin:50px 100px;">
            <el-col :span="15">
              <show-works :imglist="imglist"></show-works>
            </el-col>
            <el-col :span="7" style="margin-left:100px;">
              <filldown :dowmlist="dowmlist" :pastDowmlist="pastDowmlist"></filldown>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="评价" name="fourth">
          <evaluate style="margin:50px 100px;" :evaList="evaList"></evaluate>
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
import showWorks from '@/views/taskdetails/showWorks'
import filldown from '@/views/taskdetails/filldown'
import evaluate from '@/views/student/evaluate'
import commonfoot from '@/components/common-foot'
export default {
  components: {
    commonheader,
    synopsis,
    pasttask,
    showWorks,
    commonfoot,
    filldown,
    evaluate
  },
  data () {
    return {
      showSearch: true,
      active: 'fourth',
      down: true,
      information: {
        nick_name: '沙田伊莱莎',
        school_name: '北京理工大学',
        aboutUs:
          '北京大学大二的学生北京大学大二的学生北京大学大二的学生北京大学大二的学生',
        task_count: 5,
        total_payment: 35
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
      imglist: [
        {
          link: require('@/assets/imgs/img0.png')
        },
        {
          link: require('@/assets/imgs/img1.png')
        },
        {
          link: require('@/assets/imgs/img5.png')
        },
        {
          link: require('@/assets/imgs/img3.png')
        },
        {
          link: require('@/assets/imgs/img4.png')
        }
      ],
      dowmlist: [
        {
          title: '个人作品集.excel'
        },
        {
          title: '易联咨询整体VI介绍.word'
        }
      ],
      pastDowmlist: [
        {
          title: '果子坚销售.excel'
        },
        {
          title: '易联咨询整体VI介绍.word'
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
