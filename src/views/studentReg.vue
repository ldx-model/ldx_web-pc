<template>
  <div class="student-registe">
    <commonheader></commonheader>
    <div class="registe-step">
      <div class="reset-main">
        <el-steps :active="active">
          <el-step v-for="(item,index) in stepList" :key="index" :title="item.title" />
        </el-steps>
        <div v-if="active === 0">
            <verphone @next="next"/>
        </div>
        <div v-if="active === 1">
           <verstudent @next="next"/>
        </div>
        <div v-if="active === 2">
            3
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import commonheader from '@/components/common-header'
import verphone from '@/views/register/verphone'
import verstudent from '@/views/register/fillStuinfor'

export default {
  components: {
    commonheader,
    verphone,
    verstudent
  },
  data () {
    return {
      active: 0,
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
      if (this.active++ >= 2) this.active = 0
    }
  }
}
</script>
<style lang="scss" scoped>
.student-registe {
  margin: 0 50px;
}
</style>
