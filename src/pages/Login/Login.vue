<template>
  <el-row class='loginConteiner'>
      <el-form>
          <el-form-item label='用户名'>
              <el-input v-model='LoginForm.name'  ></el-input>
          </el-form-item>
          <el-form-item label='密码'>
              <el-input v-model='LoginForm.pass'  ></el-input>
          </el-form-item>
          <el-form-item>
              <el-button @click='submitForm'>登录</el-button>
          </el-form-item>
      </el-form>
  </el-row>
</template>
<script>
export default {
  data () {
      return {
          LoginForm: {
              name: '',
              pass: ''
          }
      }
  },
  methods: {
      submitForm () {
          let user = { name: this.LoginForm.name }
          if(this.LoginForm.name !== '') {
              sessionStorage.setItem('user', JSON.stringify(user));
              this.$router.push('/')
          }
      }
  }
}
</script>
<style lang="scss" scoped>

</style>


