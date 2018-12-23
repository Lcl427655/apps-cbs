<template>
  <!--注册组件-->
  <div class="cbs-index-border">
    <div class="cbs-index-register">
      <div class="cbs-register-box">
        <div class="cbs-inner-header">欢迎注册</div>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="70" label-position="left">
          <FormItem label="用户名" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入用户名" clearable></Input>
          </FormItem>
          <FormItem label="密码" prop="passwd">
            <Input type="password" v-model="formValidate.passwd" placeholder="请输入密码" clearable></Input>
          </FormItem>
          <FormItem label="确认密码" prop="passwdCheck">
            <Input type="password" v-model="formValidate.passwdCheck" placeholder="请确认密码" clearable></Input>
          </FormItem>
          <FormItem label="邮箱" prop="mail">
            <Input v-model="formValidate.mail" placeholder="请输入邮箱" clearable></Input>
          </FormItem>
          <FormItem label="手机号码" prop="phone">
            <Input v-model="formValidate.phone" placeholder="请输入手机号码" clearable></Input>
          </FormItem>
          <FormItem label="性别" prop="gender">
            <RadioGroup v-model="formValidate.gender">
              <Radio label="male">男</Radio>
              <Radio label="female">女</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem>
            <Row>
              <Col span="10">
                <Button type="primary" @click="handleSubmit('formValidate')">注册</Button>
              </Col>
              <Col span="4"></Col>
              <Col span="10">
                <Button @click="handleReset('formValidate')" style="margin-left: 8px">清空</Button>
              </Col>
            </Row>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      const tel = /^1[345789]\d{9}$/;
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.formValidate.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formValidate.validateField('passwdCheck');
          }
          callback();
        }
      };
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.formValidate.passwd) {
          callback(new Error('两次输入的密码不匹配'));
        } else {
          callback();
        }
      };
      const validatePhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('电话不能为空'))
        }
        if (!tel.test(value)) {
          callback(new Error('请正确填写电话号码'))
        } else {
          callback()
        }
      };
      return {
        formValidate: {
          name: '',
          mail: '',
          gender: '',
          passwd: '',
          passwdCheck: '',
          phone: ''
        },
        ruleValidate: {
          name: [
            {required: true, message: '用户名不能为空', trigger: 'blur'}
          ],
          mail: [
            {required: true, message: '邮箱不能为空', trigger: 'blur'},
            {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
          ],
          gender: [
            {required: true, message: '性别不能为空', trigger: 'change'}
          ],
          passwd: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {validator: validatePass, trigger: 'blur'}
          ],
          passwdCheck: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {validator: validatePassCheck, trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '手机号码不能为空', trigger: 'blur'},
            {validator: validatePhone, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('注册成功');
          } else {
            this.$Message.error('注册失败');
          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>
<style scoped lang="less">
  .cbs-index-border {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('/static/login/login-background.jpg') no-repeat;
    -moz-background-size: 100% 100%;
    background-size: 100% 100%;
    .cbs-index-register {
      border-radius: 3%;
      width: 360px;
      background-color: #e9ecef;
      opacity: 0.7;
      position: fixed;
      left: 50%;
      top: 20%;
      .cbs-register-box {
        height: 450px;
        width: 340px;
        margin: 0 auto;
        background-color: #e9ecef;
        opacity: 0.7;
        .cbs-inner-header {
          text-align: center;
          font-size: 20px;
          height: 50px;
          line-height: 50px;
        }
      }
    }
  }
</style>
