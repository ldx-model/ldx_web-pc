<template>
  <div class="student-registe">
    <commonheader :showLogin="showLogin"></commonheader>
    <div class="registe-step">
      <div class="reset-main">
        <el-steps :active="active">
          <el-step v-for="(item,index) in stepList" :key="index" :title="item.title" />
        </el-steps>
        <div v-if="active === 1">
          <verphone @next="next" />
        </div>
        <div v-if="active === 2">
          <verstudent @next="next" />
        </div>
        <div v-if="active === 3">
          <sucregiste></sucregiste>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import commonheader from '@/components/common-header'
import verphone from '@/views/register/verphone'
import verstudent from '@/views/register/fillStuinfor'
import sucregiste from '@/views/register/sucRegiste'

export default {
  components: {
    commonheader,
    verphone,
    verstudent,
    sucregiste
  },
  data () {
    return {
      showLogin: true,
      active: 1,
      stepList: [
        {
          title: '设置登录名'
        },
        {
          title: '填写账户信息'
        },
        {
          title: '注册成功'
        }
      ]
    }
  },
  methods: {
    next () {
      if (this.active++ >= 3) this.active = 0
    }
  }
}
</script>
<style lang="scss" scoped>
.student-registe {
  margin: 0 100px;
}
</style>
