<template>
  <!--登陆组件-->
  <div class="cbs-index-border">
    <div class="cbs-index-login">
      <div class="cbs-login-box">
        <div class="cbs-inner-header">欢迎登陆</div>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="60" label-position="left">
          <FormItem label="用户名" prop="user" label-position="left">
            <!--clearable:可清空-->
            <Input type="text" v-model="formInline.user" placeholder="Username" clearable>
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem label="密码" prop="password" label-position="left">
            <Input type="password" v-model="formInline.password" placeholder="Password" clearable>
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem label="验证码" prop="identifyCodeInput">
            <Row>
              <Col span="8">
                <Input placeholder="验证码" v-model="formInline.identifyCodeInput" clearable></Input>
              </Col>
              <Col span="2">&nbsp;&nbsp;&nbsp;&nbsp;</Col>
              <Col span="14">
                <!--@事件.native:详情见vue官方文档，此修饰符未必起作用-->
                <Identify :identifyCode="identifyCode" @click.native="refreshCode"></Identify>
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row>
              <Col span="10">
                <Button type="primary" @click="handleSubmit('formInline')">登陆</Button>
              </Col>
              <Col span="4"></Col>
              <Col span="10">
                <Button @click="register">注册</Button>
              </Col>
            </Row>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
  import Identify from './Identify';

  export default {
    data() {
      const validateIdentifyCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else if (value !== this.identifyCode) {
          callback(new Error('验证码不匹配'));
        } else {
          //模拟异步登陆,请求登陆
          setTimeout(() => {
            callback();
          }, 2000);
        }
      };
      return {
        formInline: {
          user: '',
          password: '',
          identifyCodeInput: ''
        },
        ruleInline: {
          user: [
            {required: true, message: '请填写用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
          ],
          identifyCodeInput: [
            {required: true, message: '请填写验证码', trigger: 'blur'},
            {validator: validateIdentifyCode, trigger: 'blur'}
          ]
        },
        identifyCodes: '123456789',
        identifyCode: '',
        identifyCodeInput: ''
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            //this.$Message.success('登陆成功');
            this.$router.push('/home');
          } else {
            this.$Message.error('登陆失败');
          }
        })
      },
      randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },
      refreshCode() {
        this.identifyCode = '';
        this.makeCode(this.identifyCodes, 4);
      },
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
            ];
        }
      },
      register() {
        this.$router.push('/register');
      }
    },
    components: {
      Identify
    },
    mounted() {
      this.identifyCode = '';
      this.makeCode(this.identifyCodes, 4);
    }
  }
</script>
<style scoped lang='less'>
  .cbs-index-border {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('/static/login/login-background.jpg') no-repeat;
    -moz-background-size: 100% 100%;
    background-size: 100% 100%;
    .cbs-index-login {
      border-radius: 3%;
      width: 300px;
      background-color: #e9ecef;
      opacity: 0.7;
      position: fixed;
      left: 50%;
      top: 30%;
      .cbs-login-box {
        height: 300px;
        width: 280px;
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
