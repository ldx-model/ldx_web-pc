<template>
  <div class="messagelist">
    <commonheader :showSearch="showSearch"></commonheader>
    <div class="messagelist_con">
      <div v-for="(item,index) in messageList" :key="index" class="con_list">
        <div class="Img">
          <img :src="item.imgSrc" alt />
        </div>
        <p>{{item.name}}</p>
        <p>{{item.remark}}</p>
        <p>{{item.major}}</p>
        <el-button round>联系他</el-button>
      </div>
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
      messageList: [
        {
          imgSrc: require('@/assets/imgs/copy1.png'),
          name: '沙田依莱沙',
          remark: '北京理工大学',
          major: '电子信息物理学'
        },
        {
          imgSrc: require('@/assets/imgs/copy1.png'),
          name: '沙田依莱沙',
          remark: '北京理工大学',
          major: '电子信息物理学'
        },
        {
          imgSrc: require('@/assets/imgs/copy1.png'),
          name: '沙田依莱沙',
          remark: '北京理工大学',
          major: '电子信息物理学'
        },
        {
          imgSrc: require('@/assets/imgs/copy1.png'),
          name: '沙田依莱沙',
          remark: '北京理工大学',
          major: '电子信息物理学'
        },
        {
          imgSrc: require('@/assets/imgs/copy1.png'),
          name: '沙田依莱沙',
          remark: '北京理工大学',
          major: '电子信息物理学'
        },
        {
          imgSrc: require('@/assets/imgs/copy1.png'),
          name: '沙田依莱沙',
          remark: '北京理工大学',
          major: '电子信息物理学'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.messagelist {
  margin: 0 100px;
  .messagelist_con {
    background: #f5f5f5;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: space-around;
  }
  .con_list {
    display: flex;
    align-items: flex-start;
    margin: 10px;
    background: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    .Img {
      /*! autoprefixer: off */
      background: -webkit-linear-gradient(right, #af002a, #e5d200);
      /* autoprefixer: on */
      background: -moz-linear-gradient(right, #af002a, #e5d200);
      background: -o-linear-gradient(right, #af002a, #e5d200);
      background: linear-gradient(right, #af002a, #e5d200);
      border-radius: 100px;
      width: 70px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 60px;
        height: 60px;
        border-radius: 100px;
        border: 2px solid #ffffff;
        background: #ffffff;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    p:nth-child(2){
        margin-left: 30px;
    }
    p:nth-child(3){
        margin-left: 10px;
        font-size: 14px;
        color:#b7b7b7;
    }
    p:nth-child(4){
        margin-left: 10px;
        font-size: 12px;
        color:#b7b7b7;
    }
     .el-button {
      background: #c54f8b;
      color: white;
      border: none;
      padding: 5px 20px;
      font-size: 14px;
      margin:40px 0  0 50px ;
    }
  }
}
</style>
