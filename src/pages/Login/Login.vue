<template>
  <el-row class='loginConteiner'>
      <p>
          <button @click='switchLang' >{{buttonText}}</button>
      </p>
      <el-form :model="LoginForm" :rules="rules" ref='loginForm' >
          <el-form-item :label='$t("message.loginNameLabel")' prop='name' >
              <el-input v-model='LoginForm.name'  ></el-input>
          </el-form-item>
          <el-form-item :label='$t("message.loginPassLabel")' prop='pass' >
              <el-input v-model='LoginForm.pass'  ></el-input>
          </el-form-item>
          <el-form-item>
              <el-button @click='submitForm'> {{$t('message.submitText')}} </el-button>
          </el-form-item>
      </el-form>
  </el-row>
</template>
<script>
export default {
  data () {
      return {
          buttonText: 'en',
          lang: true,  // true 为中文
          LoginForm: {
              name: '',
              pass: ''
          },
        //   rules: {
        //       name: [
        //           { required: true, message: this.userNameMessage, trigger: 'blur' }
        //       ],
        //       pass: [
        //           { required: true, message: '请输入密码', trigger: 'blur' }
        //       ]
        //   }
      }
  },
  computed: {
      rules () {
          return {
              name: [
                  { required: true, message: this.$t('message.usernameInputMessage'), trigger: 'blur' }
              ],
              pass: [
                  { required: true, message: this.$t('message.userpassInputMessage'), trigger: 'blur' }
              ]
          }
      },
      
  },
  methods: {
      submitForm () {
          this.$refs['loginForm'].validate((valid) => {
              if(valid) {
                  let user = { name: this.LoginForm.name }
                    if(this.LoginForm.name !== '') {
                        sessionStorage.setItem('user', JSON.stringify(user));
                        this.$router.push('/')
                    }
              } else {
                  console.log('err');
                  return false;
              }
          })
          
      },
      switchLang() {
          this.$i18n.locale = this.lang  ? 'en' : 'cn'
          this.buttonText = this.lang ? 'cn' : 'en'
          this.lang = !this.lang
      }
  },
  mounted() {
      console.log(this.$t('message.hello'))
  }
}
</script>
<style lang="scss" scoped>

</style>


