<template>
  <div class="student_pages--con">
    <el-row>
      <el-col :span="4">
        <img :src="information.image?information.image:headimg" class="logo" alt />
      </el-col>
      <el-col :span="9">
        <div class="name" style="margin-top:15px;">
          <p class="nickname">{{information.nick_name===''?'未添加昵称':information.nick_name}}</p>
          <p>{{(information.school_name==='' || information.company_name ==='') ?'未添加名称':(information.school_name || information.company_name)}}</p>
        </div>
        <div class="aboutUs" style="margin-top:10px;">
          <p>
             {{information.aboutUs||information.desc||'暂无介绍'}}
            <i class="el-icon-edit" style="margin-left:-24px;"></i>
          </p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="icon">
          <i style="font-size:35px;margin-top:15px;" class="el-icon-document"></i>
          <p class="total">累计完成</p>
          <p class="num">{{information.task_count||information.task_num || 0}}</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="icon">
          <i style="font-size:35px;margin-top:15px;" class="el-icon-document"></i>
          <p class="total">累计报酬</p>
          <p class="num">￥{{information.total_payment}}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    information: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      headimg: require('@/assets/imgs/copy1.png')
    }
  }
}
</script>
<style scoped lang="scss">
.student_pages--con {
  align-items: center;
  .logo {
    width: 100px;
    height: 100px;
    border: 5px solid #ffffff;
    background: #ffffff;
    border-radius: 100px;
  }
  p {
    line-height: 20px;
  }
  .nickname {
    font-size: 18px;
  }
  .aboutUs {
    width: 70%;
    display: flex;
    justify-content: flex-end;
    p {
      font-size: 12px;
      text-indent: 24px;
    }
  }
  .icon {
    text-align: center;
    .total {
      font-size: 12px;
    }
    .num {
      margin-top: 10px;
    }
  }
}
</style>
