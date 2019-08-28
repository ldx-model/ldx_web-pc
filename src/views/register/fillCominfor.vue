<template>
  <div class="company_news">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForms"
      label-width="100px"
    >
      <el-form-item label="公司名称" prop="company_name">
        <el-input v-model="ruleForm.company_name" />
      </el-form-item>
      <el-form-item label="工商编号" prop="code">
        <el-input v-model="ruleForm.code" />
      </el-form-item>
      <el-form-item label="联系人" prop="contact_person">
        <el-input v-model="ruleForm.contact_person" />
      </el-form-item>
      <el-form-item label="联系邮箱" prop="email">
        <el-input v-model="ruleForm.email" />
      </el-form-item>
      <el-form-item label="登录密码" prop="password">
        <el-input v-model="ruleForm.password" />
      </el-form-item>
      <el-form-item label="确认登录密码" prop="confirm_password">
        <el-input v-model="ruleForm.confirm_password" />
      </el-form-item>
      <div class="operate-btn">
        <el-button type="primary" @click="submitForm('ruleForms')">下一步</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    var companyName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('公司名称不能为空'))
      }
      callback()
    }
    var code = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('工商编号不能为空'))
      }
      callback()
    }
    var contactPerson = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('联系人不能为空'))
      }
      callback()
    }
    var email = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮箱不能为空'))
      }
      callback()
    }
    var password = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      }
      callback()
    }
    var confirmPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('确认密码不能为空'))
      } else if (value !== this.ruleForm.password) {
        return callback(new Error('两次输入密码不一致!'))
      }
      callback()
    }
    return {
      ruleForm: {
        company_name: '',
        code: '',
        contact_person: '',
        email: '',
        password: '',
        confirm_password: ''
      },
      rules: {
        company_name: [{ validator: companyName, tigger: 'change' }],
        code: [{ validator: code, tigger: 'change' }],
        contact_person: [{ validator: contactPerson, tigger: 'change' }],
        email: [{ validator: email, tigger: 'change' }],
        password: [{ validator: password, tigger: 'change' }],
        confirm_password: [{ validator: confirmPassword, tigger: 'change' }]
      }
    }
  },
  methods: {
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
<style lang="scss" scoped>
.company_news {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  font-size: 12px;
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
.company_news {
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
