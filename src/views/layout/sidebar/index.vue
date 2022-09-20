<template>
  <div class="sidebar-container">
    <el-scrollbar>
      <el-menu
        :default-active="active"
      >
        <el-menu-item
          v-for="(item, index) in menus"
          :key="index"
          :index="item.name"
          @click="clickHandle(item)">
          <span>{{item.title}}</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
  import { ref, watchEffect } from 'vue'
  import { useRouter, useRoute } from 'vue-router'

  const router = useRouter()
  const route = useRoute()

  const menus = ref([
    { title: '首页', path: '/home', name: 'home' },
    { title: '日期格式化', path: '/date', name: 'date' },
    { title: 'JSON格式化', path: '/json', name: 'json' },
    { title: 'JS编辑器', path: '/js', name: 'js' },
    { title: 'BASE64', path: '/base64', name: 'base64' },
  ])

  const active = ref('home')

  const routeHandle = argRoute => {
    const name = argRoute.name
    active.value = name
  }

  watchEffect(() => {
    routeHandle(route)
  })

  const clickHandle = ({ name }) => {
    router.push({ name })
  }
</script>

<style lang="scss" scoped>
  .sidebar-container {
    box-shadow: var(--el-box-shadow-light);
    .el-menu {
      border: none;
      ::v-deep(.el-menu-item) {
        padding-right: 20px;
      }
      ::v-deep(.el-menu-item), ::v-deep(.el-sub-menu), ::v-deep(.el-sub-menu__title) {
        display: block;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        & > .el-sub-menu__icon-arrow {
          position: absolute;
          right: 8px;
        }
      }
    }
  }
</style>
