<template>
  <div class="pasttask">
    <div v-for="(item,index) in pastTaskList" :key="index" class="pasttask_con">
      <div class="left">
        <img :src="headimg" alt class="logo" />
        <p >{{item.company_name}}</p>
        <p >{{item.industry}}</p>
      </div>
      <div class="center">
        <div class="title">
          <p>{{item.title}}</p>
          <p>任务要求:{{item.desc}}</p>
        </div>
        <div class="type">
          <span>{{item.design}}</span>
          <span>{{item.task_type}}</span>
        </div>
        <div>截止日期:{{item.rest_day}}</div>
      </div>
      <div class="right">
        <p>总计有{{item.apply_num}}人申请</p>
        <p v-if="down" class="done"><img src="@/assets/imgs/done.png" alt=""></p>
        <el-button round>立即查看</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    down: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      headimg: require('@/assets/imgs/copy1.png'),
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
  }
}
</script>
<style scoped lang="scss">
.pasttask {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: flex-start;
  font-size:14px;
  .pasttask_con:nth-child(odd){
      margin-right: 120px;
  }
  .pasttask_con {
    position: relative;
    display: flex;
    box-sizing: border-box;
    margin: 20px 0px 20px 0;
    border-radius: 20px;
    background: #f5f5f5;
    padding: 15px 20px;
    .left{
        margin-right:20px;
        text-align: center;
        .logo{
           margin-bottom: 15px;
        }
        p:nth-child(2){
            font-size: 14px;
        }
         p:nth-child(3){
            font-size: 12px;
        }
    }
    .center{
        margin-left:20px;
        margin-right:50px;
        .title{
            p{
                margin-top:5px;
            }
            p:nth-child(2){
                font-size: 12px;
            }
        }
        .type{
            margin: 25px 0;
            span:nth-child(1){
                background: #C51152;
                color: #fff;
                padding: 5px 15px;
                font-size: 12px;
                border-radius: 5px;
            }
            span:nth-child(2){
                color: #5D76C0;
                padding: 5px 15px;
                font-size: 12px;
                border-radius: 5px;
                border: 1px solid #5D76C0;
            }
        }
    }
    .right{
        text-align: right;
         margin-left:50px;
        p{
           margin-top:5px;
        }
        .el-button{
            background:  #c54f8b;
            color: #fff;
            padding: 7px 20px;
            border:none;
            outline: none;
            font-size: 12px;
            margin-top: 70px;
        }
        .done{
            position: absolute;
            right:60px;
            top:20px;
            opacity: 0.2;
            img{
                width: 130px;
                height: 130px;
            }
        }
    }
  }
}
</style>
