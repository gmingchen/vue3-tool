<template>
  <el-config-provider :locale="locale" :size="size" :z-index="zIndex">
    <router-view v-slot="{ Component }">
      <transition name="el-fade-in" mode="out-in">
        <component :is="Component" class="component flex-item_f-1" />
      </transition>
    </router-view>
  </el-config-provider>
</template>

<script setup>
  import { ref } from 'vue'
  import zhCn from 'element-plus/lib/locale/lang/zh-cn'
  
  const locale = ref(zhCn)
  const size = ref('default')
  const zIndex = ref(3000)
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
  }
</style>
