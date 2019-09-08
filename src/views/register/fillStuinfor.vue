<template>
  <div class="student_news">

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForms"
      label-width="100px"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="学校" prop="school_name">
        <el-input v-model="ruleForm.school_name" />
      </el-form-item>
      <el-form-item label="年级" prop="grade">
        <el-input v-model="ruleForm.grade" />
      </el-form-item>
      <el-form-item label="登录用户名" prop="username">
        <el-input v-model="ruleForm.username" />
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
    var name = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('姓名不能为空'))
      }
      callback()
    }
    var schoolName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('学校不能为空'))
      }
      callback()
    }
    var grade = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年级不能为空'))
      }
      callback()
    }
    var username = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
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
        name: '',
        school_name: '',
        grade: '',
        username: '',
        password: '',
        confirm_password: ''
      },
      rules: {
        name: [{ validator: name, tigger: 'change' }],
        school_name: [{ validator: schoolName, tigger: 'change' }],
        grade: [{ validator: grade, tigger: 'change' }],
        username: [{ validator: username, tigger: 'change' }],
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
.student_news {
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
.student_news {
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
