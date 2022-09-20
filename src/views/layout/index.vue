<template>
  <div class="layout-container height-full flex-box">
    <Sidebar class="width-250"></Sidebar>
    <div class="flex-item_f-1">
      <el-scrollbar>
        <Headbar></Headbar>
        <router-view v-slot="{ Component }">
          <transition name="el-fade-in" mode="out-in">
            <component :is="Component" class="component padding-10" />
          </transition>
        </router-view>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup>
  import { provide } from 'vue'
  import useClipboard from 'vue-clipboard3'

  import { ElMessage } from 'element-plus'

  import Headbar from './headbar/index.vue'
  import Sidebar from './sidebar/index.vue'
  
  const { toClipboard } = useClipboard()
  provide('copy', (value) => {
    if (value) {
      if (typeof value !== 'string') {
        value = value + ''
      }
      toClipboard(value)
      ElMessage({
        type: 'success',
        message: `已复制到粘贴板`,
      })
    }
  })
</script>

<style lang="scss" scoped>
</style>
