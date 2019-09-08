<template>
  <div class="pasttask">
    <div class="pasttask_add" v-if="show">
      <el-upload
      :on-success="handleAvatarSuccess"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      >
        <div class="Img">
          <img v-if="imgShow" :src="imgSrc" alt />
          <i v-if="!imgShow" class="el-icon-plus" style="font-size:80px;color:#a3a3a3;"></i>
        </div>
      </el-upload>
      <span style="margin-left:20px;">添加任务</span>
    </div>
    <div v-for="(item,index) in pastTaskList" :key="index" class="pasttask_con">
      <div class="left">
        <img :src="headimg" alt class="logo" />
        <p>{{item.company_name}}</p>
        <p>{{item.industry}}</p>
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
        <p v-if="down" class="done">
          <img src="@/assets/imgs/done.png" alt />
        </p>
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
    },
    show: {
      type: Boolean,
      default: false
    },
    pastTaskList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      headimg: require('@/assets/imgs/copy1.png'),
      imgShow: false,
      imgSrc: ''
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imgShow = true
      this.imgSrc = URL.createObjectURL(file.raw)
    }
  }
}
</script>
<style scoped lang="scss">
.pasttask {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;
  font-size: 14px;
  .pasttask_add {
    margin: 20px 0px 20px 0;
    padding: 20px 187px;
    display: flex;
    align-items: center;
    background: #f5f5f5;
    border-radius: 20px;
    .Img {
      // /*! autoprefixer: off */
      // background: -webkit-linear-gradient(right, #af002a, #e5d200);
      // /* autoprefixer: on */
      // background: -moz-linear-gradient(right, #af002a, #e5d200);
      // background: -o-linear-gradient(right, #af002a, #e5d200);
      // background: linear-gradient(right, #af002a, #e5d200);
      border: 3px solid #a3a3a3;
      border-radius: 100px;
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 90px;
        height: 90px;
        border-radius: 100px;
        border: 2px solid #ffffff;
        background: #ffffff;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .pasttask_con {
    position: relative;
    display: flex;
    box-sizing: border-box;
    margin: 20px 0px 20px 0;
    border-radius: 20px;
    background: #fff;
    padding: 15px 20px;
    .left {
      margin-right: 20px;
      text-align: center;
      .logo {
        margin-bottom: 15px;
      }
      p:nth-child(2) {
        font-size: 14px;
      }
      p:nth-child(3) {
        font-size: 12px;
      }
    }
    .center {
      margin-left: 20px;
      margin-right: 50px;
      .title {
        p {
          margin-top: 5px;
        }
        p:nth-child(2) {
          font-size: 12px;
        }
      }
      .type {
        margin: 25px 0;
        span:nth-child(1) {
          background: #c51152;
          color: #fff;
          padding: 5px 15px;
          font-size: 12px;
          border-radius: 5px;
        }
        span:nth-child(2) {
          color: #5d76c0;
          padding: 5px 15px;
          font-size: 12px;
          border-radius: 5px;
          border: 1px solid #5d76c0;
        }
      }
    }
    .right {
      text-align: right;
      margin-left: 50px;
      p {
        margin-top: 5px;
      }
      .el-button {
        background: #c54f8b;
        color: #fff;
        padding: 7px 20px;
        border: none;
        outline: none;
        font-size: 12px;
        margin-top: 70px;
      }
      .done {
        position: absolute;
        right: 60px;
        top: 20px;
        opacity: 0.2;
        img {
          width: 130px;
          height: 130px;
        }
      }
    }
  }
}
</style>
