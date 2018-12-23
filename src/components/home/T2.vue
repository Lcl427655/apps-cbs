<template>
  <Menu width="auto"
        :active-name="activeName"
        :open-names="openNames"
        @on-select="handleSelect"
  >
    <template v-for="item in items">
      <side-menu-item
        v-if="item.children&&item.children.length!==0"
        :parent-item="item"
        :key="'menu-'+item.name"
      >
      </side-menu-item>
      <menu-item v-else
                 :name="item.name"
                 :key="'menu-'+item.name"
      >
        <Icon :type="item.icon" :size="15"/>
        <span>{{ item.title }}</span>
      </menu-item>
    </template>
  </Menu>
</template>

<script>
  import sideMenuItem from './T1'
  export default {
    name: 'sideMenu',
    props: {
      activeName: {
        type: String,
        default: 'auth'
      },
      openNames: {
        type: Array,
        default: () => [
          'other',
          'role',
          'auth'
        ]
      },
      items: {
        type: Array,
        default: () => [
          {
            name : 'system',
            title : '系统管理',
            icon : 'outlet',
            children: [
              { name : 'user', title : '用户管理', icon : 'outlet' }
            ]
          },
          {
            name : 'other',
            title: '其他管理',
            icon : 'outlet',
            children : [
              {
                name : 'role',
                title : '角色管理',
                icon : 'outlet',
                children : [
                  { name : 'auth', title : '权限管理', icon : 'outlet' }
                ]
              }
            ]
          }
        ]
      }
    },
    components: {
      sideMenuItem
    },
    methods: {
      handleSelect(name) {
        this.$emit('on-select', name)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
