<template>
  <div class="firststep">
    <commonheader :showSearch="showSearch"></commonheader>
      <div class="content_top">
        <p class="top_title">
          第一步
          <br />请选择涉及知识领域。
        </p>
        <ul class="top_title-ul">
          <li v-for="(item,index) in maplist" :key="index" @click="hanleclick(item,index)">
            <img :src="item.icons" alt />
            <p :class="{'active':item.disable}">{{item.name}}</p>
          </li>
        </ul>
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
      showSearch: true,
      type: '',
      maplist: [
        {
          name: '文案',
          disable: false,
          type: '7',
          icons: require('@/assets/imgs/copy1.png')
        },
        {
          name: '设计',
          disable: false,
          type: '8',
          icons: require('@/assets/imgs/copy1.png')
        },
        {
          name: '代码',
          disable: false,
          type: '9',
          icons: require('@/assets/imgs/copy1.png')
        },
        {
          name: '手绘',
          disable: false,
          type: '10',
          icons: require('@/assets/imgs/copy1.png')
        },
        {
          name: 'PPT',
          disable: false,
          type: '11',
          icons: require('@/assets/imgs/copy1.png')
        }
      ]
    }
  },
  methods: {
    hanleclick (data, index) {
      console.log(data)
      this.maplist.map(item => {
        item.disable = false
      })
      this.maplist[index].disable = true
      this.type = this.maplist[index].type
    },
    next () {
      if (this.type !== '') {
        this.$router.push('/secstep')
      } else {

      }
    }
  },
  mounted () {
    this.hanleclick({type: 7}, 0)
  }
}
</script>
<style scoped lang="scss">
.firststep {
  margin: 0 100px;
  .content_top {
    margin-top: 10px;
    margin-bottom: 30px;
    .top_title {
      font-size: 20px;
      letter-spacing: 2px;
      line-height: 25px;
      margin: 40px 0;
    }
    .top_title-ul {
      margin: 80px 0;
      li{
        display: inline-block;
        text-align: center;
         margin-right:50px;
      }
      p {
        margin: 10px 0;
      }
    }
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
  .active {
    color: #c54f8b;
  }
}
</style>
