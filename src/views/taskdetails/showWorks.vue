<template>
  <div class="imgworks">
    <el-row :gutter="30">
      <el-col :span="11">
        <img :src="firstsrc" alt class="bigimg" />
        <ul>
          <li v-for="(item,index) in imglist" :key="index" @click="changs(index)">
            <div class="img_con">
              <span :class="{'active':imgIndex===index}"></span>
              <img :src="item.link" class="small_img" alt />
            </div>
          </li>
        </ul>
      </el-col>
      <el-col :span="13">
        <div class="img_right">
          <div v-for="(item,index) in imglist" :key="index" class="showimg">
            <img :src="item.link" class="img_show" alt />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    imglist: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      firstsrc: '',
      imgIndex: 0
    }
  },
  methods: {
    changs (index) {
      this.firstsrc = this.imglist[index].link
      this.imgIndex = index
    }
  },
  watch: {
    imglist (val) {
      console.log(val, 99999)
    }
  },
  mounted () {
    this.changs(0)
  }
}
</script>
<style lang="scss" scoped>
.imgworks {
  .bigimg {
    width: 100%;
    height: 250px;
    margin-bottom: 10px;
    display: block;
  }
  li {
    display: inline;
  }
  .img_con {
    width: 20%;
    display: inline-block;
    border: 3px solid transparent;
    box-sizing: border-box;
    position: relative;
  }
  .small_img {
    width: 100%;
    height: 60px;
  }
  .active {
    background-image: url("../../assets/imgs/imgBorder.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .img_right {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .showimg:nth-child(odd) {
    width: 60%;
    box-sizing: border-box;
    padding-right: 5px;
    padding-bottom: 5px;
    .img_show {
      width: 100%;
      height: 130px;
    }
  }
  .showimg:nth-child(even) {
      padding-bottom: 5px;
    width: 40%;
    .img_show {
      width: 100%;
      height: 130px;
    }
  }
  }

}
</style>
