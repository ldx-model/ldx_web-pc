<template>
  <div class="head_details">
    <el-row class="head_details--con">
      <el-col :span="4">
        <img :src="information.image?information.image:headimg" class="logo" alt />
      </el-col>
      <el-col :span="8">
        <div class="name" style="margin-top:15px;">
          <p class="nickname">{{information.nick_name===''?'未添加昵称':information.nick_name}}</p>
          <p>{{(information.school_name==='' || information.company_name ==='') ?'未添加名称':(information.school_name || information.company_name)}}</p>
        </div>
        <div class="aboutUs" style="margin-top:10px;">
          <p>
            {{information.aboutUs||information.desc||'暂无介绍'}}
            <i
              class="el-icon-edit"
              style="margin-left:-24px;"
            ></i>
          </p>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="apply">
          <p style="color:#c54f8b;">{{information.total_payment}}￥</p>
          <p style="margin-top:5px;color:#c54f8b;">{{information.apply_num}}<span style="font-size:12px;color:#2c3e50;">人正在申请</span></p>
          <el-button round>申请任务</el-button>
          <el-button round>取消申请</el-button>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="icon">
          <i style="font-size:35px;margin-top:15px;" class="el-icon-document"></i>
          <p class="total">累计完成</p>
          <p class="num">{{information.task_count||information.task_num || 0}}</p>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="icon">
          <i style="font-size:35px;margin-top:15px;" class="el-icon-document"></i>
          <p class="total">累计报酬</p>
          <p class="num">￥{{information.total_payment}}</p>
        </div>
      </el-col>
    </el-row>
    <div class="task_aboutUs">
        <p>任务简介</p>
        <div>
           标志设计不仅是实用物的设计，也是一种图形艺术的设计。它与其它图形艺术表现手段既有相同之处，又有自己的艺术规律。必须体现前述的特点，才能更好地发挥其功能。由于对其简练、概括、完美的要求十分苛刻，即要完美到几乎找不到更好的替代方案，其难度比之其它任何图形艺术设计都要大得多。其难度比之其它任何图形艺术标志设计不仅是实用物的设计，也是一种图形艺术的设计。它与其它图形艺术表现手段既有相同之处，又有自己的艺术规律。必须体现前述的特点，才能更好地发挥其功能。由于对其简练、概括、完美的要求十分苛刻，即要完美到几乎找不到更好的替代方案，其难度比之其它任何图形艺术设计都要大得多。
        </div>
    </div>
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
.head_details{
.head_details--con {
  align-items: center;
  margin-bottom: 50px;
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
    p {
      font-size: 12px;
      text-indent: 24px;
    }
  }
  .apply{
    .el-button {
      background: #f7c724;
      color: white;
      border: none;
      padding: 7px 20px;
      margin-top: 30px;
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
.task_aboutUs{
      div{
          text-indent: 24px;
          font-size: 12px;
          padding-top: 10px;
           line-height: 20px;
      }
  }
}
</style>
