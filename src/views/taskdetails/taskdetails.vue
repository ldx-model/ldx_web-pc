<template>
  <div class="task_detail">
    <commonheader :showSearch="showSearch"></commonheader>
    <heads :information="information" style="margin-top:10px;"></heads>
    <div style="margin-top:50px;" class="task_btn">
      <p>任务进度</p>
      <el-button round class="confirm" @click="dialogClick">进行阶段确认</el-button>
      <el-button round class="deliver" @click="taskpay">任务交付</el-button>
      <el-button round class="deliver" @click="taskpay">确认任务完成</el-button>
    </div>
    <el-row style="margin-top:50px;">
      <el-col :span="15">
        <p style="margin-bottom:10px;">任务要求</p>
        <show-works :imglist="imglist"></show-works>
      </el-col>
      <el-col :span="7" style="margin-left:100px;">
        <p style="margin-bottom:10px;">任务文件分享</p>
        <filldown :dowmlist="dowmlist" :pastDowmlist="pastDowmlist"></filldown>
      </el-col>
    </el-row>
    <div style="display:flex;justify-content:center;margin-top:10px;" class="task_btn">
      <el-button round class="confirm">取消发布</el-button>
      <el-button round class="confirm">再次编辑</el-button>
      <el-button round class="confirm">确认申请人</el-button>
    </div>
    <div class="student_pages--foot">
      <commonfoot></commonfoot>
    </div>
  </div>
</template>
<script>
import commonheader from '@/components/common-header'
import heads from './head'
import showWorks from '@/views/taskdetails/showWorks'
import filldown from '@/views/taskdetails/filldown'
import commonfoot from '@/components/common-foot'

export default {
  components: {
    commonheader,
    heads,
    showWorks,
    filldown,
    commonfoot
  },
  data () {
    return {
      showSearch: true,
      information: {
        nick_name: '沙田伊莱莎',
        school_name: '北京理工大学',
        aboutUs:
          '北京大学大二的学生北京大学大二的学生北京大学大二的学生北京大学大二的学生',
        apply_num: 18,
        task_count: 5,
        total_payment: 35
      },
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
      ]
    }
  },
  methods: {
    dialogClick () {},
    taskpay () {}
  }
}
</script>
<style lang="scss">
.task_detail {
  margin: 0 100px;
  .student_pages--foot {
    margin: 50px 100px 40px 0px;
  }
  .task_btn {
    .el-button {
      background: #c54f8b;
      color: white;
      border: none;
      padding: 7px 20px;
      margin-top: 30px;
    }
  }
}
</style>
