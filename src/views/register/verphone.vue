<template>
  <div class="phone">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="70px"
      class="demo-ruleForm"
    >
      <el-form-item label="联系电话" prop="phone" id="phone-code">
        <el-input v-model="ruleForm.phone" />
        <button
          type="button"
          :disabled="disabled"
          class="phone-code"
          @click="getCode"
          ref="code"
        >获取验证码</button>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="ruleForm.code" />
      </el-form-item>
      <div class="operate-btn">
        <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    var phone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      }
      this.disabled = false
      callback()
    }
    var code = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'))
      }
      this.disabled = false
      callback()
    }
    return {
      disabled: true,
      times: 60,
      ruleForm: {
        phone: '',
        code: ''
      },
      rules: {
        phone: [{ validator: phone, trigger: 'change' }],
        code: [{ validator: code, trigger: 'change' }]
      }
    }
  },
  methods: {
    getCode () {
      this.countDown()
    },
    countDown () {
      if (this.times <= 0) {
        this.$refs['code'].innerHTML = `重新发送`
        this.times = 60
        this.disabled = false
        return false
      }
      this.disabled = true
      this.$refs['code'].innerHTML = `${this.times}s 后重新发送`
      setTimeout(() => {
        this.times--
        this.countDown()
      }, 1000)
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit('next')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped="scoped" lang="scss">
.phone {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  font-size: 12px;
  #phone-code {
    position: relative;
  }
  .phone-code {
    color: white;
    font-size: 12px;
    position: absolute;
    right: 0px;
    top: 5px;
    border: none;
    outline: none;
    background: #c54f8b;
    cursor: pointer;
    padding: 6px;
    border-radius: 0px 5px 5px 0;
  }
  .el-input {
    width: 250px;
  }
  .el-form-item {
    margin-bottom: 10px;
  }
  .operate-btn {
    text-align: center;
    margin-top: 50px;
    .el-button {
      background: #c54f8b;
      border: none;
      padding: 8px 20px;
      border-radius: 15px;
    }
  }
}
</style>
<style lang="scss">
.phone {
  .el-input__inner {
    border: 1px solid #c54f8b;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
  }
    .el-form-item__error {
    padding-top: 0px;
  }
}
</style>
