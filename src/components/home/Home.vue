<style scoped lang="less">
  .layout {
    /*固定定位，让整个div铺满页面*/
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #d7dde4;
    border-radius: 4px;
    /*头像*/
    .layout-logo {
      width: 100px;
      height: 30px;
      background-color: #22FF4E;
      border-radius: 3px;
      float: left;
      position: relative;
      top: 15px;
      left: 20px;
    }
    /*一级导航*/
    .layout-nav {
      width: 600px;
      margin: 0 20px 0 auto;
    }
    .cbs-slider {
      background-color: #22FF4E;
    }
    /*组件最外层div*/
    .ivu-layout {
      height: 100%;
      /*头部导航*/
      .ivu-layout-header {
        background-color: #22FF4E;
        /*一级导航*/
        .ivu-menu {
          background-color: #22FF4E;
          /*ul标签*/
          .ivu-menu-item-active {
            background-color: #F82ACE;
          }
        }
      }
      /*Slider样式*/
      .ivu-layout-sider {
        height: 100%;
        overflow: auto;
        /*Slider背景层*/
        .ivu-menu {
          background-color: #22FF4E;
          /*Slider选中层*/
          .ivu-menu-item-active:not(.ivu-menu-submenu) {
            color: #0000ff;
            background-color: #F82ACE;
          }
        }
      }
      /*最外层内容区域*/
      .ivu-layout {
        /*页签*/
        .ivu-breadcrumb {

        }
        /*内容区域*/
        .ivu-layout-content {
          overflow: auto;
        }
      }
    }
  }
</style>
<template>
  <div class="layout" ref="layout">
    <Layout>
      <!--一级导航-->
      <Header>
        <Menu mode="horizontal" :active-name="activeName" @on-select="dictionaryMenuSelect">
          <div class="layout-logo">头像区域</div>
          <div class="layout-nav">
            <MenuItem v-for="mh in menuHeader" :name="mh.menuCode" :key="mh.menuId">
              <Icon :type="mh.menuType"></Icon>
              {{mh.menuName}}
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <!--二级导航-->
        <Sider hide-trigger class="cbs-slider">
          <Menu theme="light" width="auto" :accordion="true" @on-open-change="ooc">
            <Submenu :name="ms.menuCode" v-for="ms in menuSilders" :key="ms.menuId"
                     v-show="ms.menuParentCode === activeName">
              <template slot="title">
                <Icon :type="ms.menuType"></Icon>
                {{ms.menuName}}
              </template>
              <MenuItem :name="m.menuCode" v-for="m in ms.menuSlider" :key="m.menuId"
                        :to="{'path':m.menuRouter,'expandFlag':expandFlag}">
                {{m.menuName}}
              </MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <!--内容区-->
        <Layout :style="{padding: '0 24px 24px'}">
          <!--面包屑-->
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <!--内容-->
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view>
            </router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        openNames: [],
        menuHeader: [
          {
            menuId: 1,
            menuName: '与我有关',
            menuCode: 'myInfo',
            menuType: 'ios-navigate',
          },
          {
            menuId: 2,
            menuName: '基础表格',
            menuCode: 'baseTable',
            menuType: 'ios-navigate',
          },
          {
            menuId: 3,
            menuName: '报表管理',
            menuCode: 'formsManager',
            menuType: 'ios-navigate',
          },
          {
            menuId: 4,
            menuName: '系统配置',
            menuCode: 'systemManager',
            menuType: 'ios-navigate',
          }
        ],
        expandFlag: false,
        menuSilders: [
          {
            menuId: 101,
            menuName: '与我有关101',
            menuCode: 'myInfo101',
            menuType: 'ios-navigate',
            menuParentCode: 'myInfo',
            menuRouter: '/home/myInfo101',
            menuSlider: [
              {
                menuId: 10101,
                menuName: '与我有关10101',
                menuCode: 'myInfo10101',
                menuType: 'ios-navigate',
                menuRouter: '/home/myInfo101/myInfo10101',
              },
              {
                menuId: 10102,
                menuName: '与我有关10102',
                menuCode: 'myInfo10102',
                menuType: 'ios-navigate',
                menuRouter: '/home/myInfo101/myInfo10102',
              },
              {
                menuId: 10103,
                menuName: '与我有关10103',
                menuCode: 'myInfo10103',
                menuType: 'ios-navigate',
                menuRouter: '/home/myInfo101/myInfo10103',
              }
            ]
          },
          {
            menuId: 111,
            menuName: '与我有关111',
            menuCode: 'myInfo111',
            menuType: 'ios-navigate',
            menuParentCode: 'myInfo',
            menuRouter: '/myInfo111',
            menuSlider: [
              {
                menuId: 10111,
                menuName: '与我有关10111',
                menuCode: 'myInfo10111',
                menuType: 'ios-navigate',
              },
              {
                menuId: 10112,
                menuName: '与我有关10112',
                menuCode: 'myInfo10112',
                menuType: 'ios-navigate',
              },
              {
                menuId: 10113,
                menuName: '与我有关10113',
                menuCode: 'myInfo10113',
                menuType: 'ios-navigate',
              }
            ]
          },
          {
            menuId: 401,
            menuName: '系统配置401',
            menuCode: 'systemManager401',
            menuType: 'ios-navigate',
            menuParentCode: 'systemManager',
            menuSlider: [
              {
                menuId: 40101,
                menuName: '系统配置40101',
                menuCode: 'systemManager10101',
                menuType: 'ios-navigate',
              },
              {
                menuId: 40102,
                menuName: '系统配置40102',
                menuCode: 'systemManager10102',
                menuType: 'ios-navigate',
              },
              {
                menuId: 40103,
                menuName: '系统配置40103',
                menuCode: 'systemManager40103',
                menuType: 'ios-navigate',
              }
            ]
          }
        ],
        activeName: ''
      }
    },
    methods: {
      dictionaryMenuSelect(name) {
        this.activeName = name;
      },
      ooc(arr) {
        this.expandFlag = arr.length > 0 ? true : false;
      }
    },
    created() {
      this.activeName = 'myInfo';
    }
  }
</script>
