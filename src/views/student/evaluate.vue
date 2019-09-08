<template>
  <div class="evaluate_list">
    <div v-for="(item,index) in evaList" :key="index" class="li">
      <div class="list-content">
        <div class="big-img">
          <img :src="item.company_img" alt />
        </div>
        <div class="right">
          <p style="margin-left:10px;font-size:12px;">{{item.company_comment}}</p>
          <p class="right_date">{{item.company_comment_time}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    evaList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.evaluate_list {
  .li {
    display: inline-block;
    width:30%;
    margin: 0 100px 20px 0;
    position: relative;
    .list-content {
      display: flex;
      align-items: center;
      .right {
         width: 80%;
        .right_date {
          position: absolute;
          bottom: 0px;
          font-size: 12px;
          color: #b7b7b7;
        }
      }
      .big-img {
        margin-right: 10px;
        width: 20%;
        height: 70px;
        text-align: center;
        img{
            width: 100%;
            height: 100%;;
        }
      }
    }
  }
}
</style>
