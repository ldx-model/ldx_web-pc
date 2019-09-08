<template>
  <div class="secstep">
    <commonheader :showSearch="showSearch"></commonheader>
    <div class="secstep_top">
      <p class="top_title">
        第二步
        <br />请填写任务标题和详细说明。
      </p>
      <!-- <div> -->
        <div class="top_title-con">
          <el-input class="top_title-input" v-model="form.title" placeholder="标题 输入吸引热度的标题"></el-input>
          <div style="display:inline;">
            <ul class="top_title-ul" v-for="(item,index) in btnlist" :key="item.type">
              <li
                :style="{background:item.colors}"
                :class="{'active':item.disable}"
                @click="tabclick(item,index)"
              >{{item.name}}</li>
            </ul>
          </div>
        </div>
        <el-input
          type="textarea"
          :rows="6"
          placeholder="请详细介绍任务需求，描述的越详细，越容易找到学生"
          v-model="form.textarea"
          style="margin-top:20px;"
        ></el-input>
      <!-- </div> -->
    </div>
    <div class="content-footer">
      <el-button round @click="next">下一步</el-button>
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
      showSearch: '',
      form: {
        title: '',
        textarea: '',
        tabname: ''
      },
      btnlist: [
        {
          name: 'LOGO设计',
          type: '1',
          colors: '#1B9EA7',
          disable: false
        },
        {
          name: '海报传单类',
          type: '2',
          colors: '#F79D33',
          disable: false
        },
        {
          name: '字体设计类',
          type: '3',
          colors: '#00E38B',
          disable: false
        },
        {
          name: '其他',
          type: '4',
          colors: '#FF9A12',
          disable: false
        }
      ]
    }
  },
  methods: {
    tabclick (data, index) {
      this.btnlist.map(item => {
        item.disable = false
      })
      this.btnlist[index].disable = true
      this.form.tabname = this.btnlist[index].type
    },
    next () {
      if (
        this.form.title !== '' &&
        this.form.textarea !== '' &&
        this.form.tabname !== ''
      ) {
        this.$router.push('/thirdstep')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.secstep {
  margin: 0 100px;
  .secstep_top {
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .top_title {
    font-size: 20px;
    letter-spacing: 2px;
    line-height: 25px;
    margin: 40px 0;
  }
  .content-footer {
    text-align: right;
    padding-top: 100px;
    .el-button {
      background: #c54f8b;
      color: white;
      border: none;
      padding: 10px 30px;
    }
  }
  .top_title-con {
    display: inline;
    .top_title-input {
      width: 30%;
      margin-right: 20px;
    }
    .top_title-ul {
      display: inline;
      color: #f5f5f5;
      li {
        display: inline;
        margin-right: 10px;
        padding: 8px 10px;
        border-radius: 10px;
        font-size: 12px;
      }
    }

  }
  .active {
    color: #2c3e50;
    background-color: #fff !important;
    border: 1px solid #f79d33;
  }
}
</style>
<style lang="scss">
.secstep {
  .el-input__inner {
    background: #f5f5f5;
    border: none;
  }
  .el-textarea__inner {
    background: #f5f5f5;
    border: none;
  }
}
</style>
