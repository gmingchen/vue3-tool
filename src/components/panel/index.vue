<template>
  <div class="panel-container">
    <div class="title-box height-22 padding_l-6 font-size-18">{{ title }}</div>
    <div class="content-box padding-10">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      default: () => ''
    }
  })

</script>

<style lang="scss" scoped>
  .panel-container {
    .title-box {
      line-height: 22px;
      border-left: 4px solid var(--el-menu-active-color);
    }
  }
</style>