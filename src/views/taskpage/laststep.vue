<template>
  <div class="laststep">
    <commonheader :showSearch="showSearch"></commonheader>
    <div class="laststep_top">
      <p class="top_title">
        最后一步
        <br />请设置奖励金额和截止日期及支付方式。
      </p>
      <div class="top_con">
        <el-input class="top_title-input" suffix-icon="el-icon-goods" v-model="money"></el-input>
        <el-date-picker class="top_title-input" type="date" v-model="date"></el-date-picker>
        <div style="margin-top:20px;">
          <ul>
            <li v-for="(item,index) in paylist" :key="index" @click="changeClick(item,index)">
              <img :src="item.payImg" />
            </li>
          </ul>
        </div>

        <p class="top_con--p">
          支付金额由平台暂时保管
          <br />并按照任务进度付款给学生
        </p>
      </div>
    </div>
    <div class="content-footer">
      <el-button round @click="next">完成</el-button>
    </div>
  </div>
</template>
<script>
import commonheader from '@/components/common-header'
export default {
  components: {
    commonheader
  },
  data () {
    return {
      showSearch: true,
      money: '',
      date: '',
      paytype: '',
      paylist: [
        {
          label: '支付宝',
          bgColor: '#00A2E9',
          payImg: require('@/assets/imgs/zhifubao.svg')
        },
        {
          label: '银联',
          bgColor: '#EB6578',
          payImg: require('@/assets/imgs/yinlian.svg')
        },
        {
          label: '微信',
          bgColor: '#0DAB4F',
          payImg: require('@/assets/imgs/weixin.svg')
        }
      ]
    }
  },
  methods: {
    changeClick (data, index) {
      this.paytype = this.paylist[index].label
      console.log(this.paytype, 8888)
    },
    next () {
      if (this.money !== '' && this.date1 !== '' && this.paytype !== '') {
        // this.$router.push('/laststep')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.laststep {
  margin: 0 100px;
  .laststep_top {
    margin-top: 10px;
    margin-bottom: 30px;
    .top_title-input {
      display: block;
      width: 20%;
      margin-top: 20px;
    }
  }
  .top_title {
    font-size: 20px;
    letter-spacing: 2px;
    line-height: 25px;
    margin: 40px 0;
  }
  .top_con {
    display: block;
    ul {
      display: inline;
      margin-left: -18px;
      li {
        display: inline;
      }
    }
    .top_con--p {
      //   color: white;
      font-size: 10px;
      margin-top: 10px;
    }
  }
  .content-footer {
    text-align: right;
    .el-button {
      background: #c54f8b;
      color: white;
      border: none;
      padding: 10px 30px;
    }
  }
}
</style>
<style lang="scss">
.laststep {
  /deep/.el-input__inner {
    background: #f5f5f5;
    border: none;
    border-radius: 15px;
    height: 30px;
    line-height: 30px;
  }
  /deep/.el-input__icon {
    line-height: 30px;
  }
}
</style>
