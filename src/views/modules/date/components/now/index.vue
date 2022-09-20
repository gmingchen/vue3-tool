<template>
  <Panel title="当前时间">
    <div class="now-box">
      <div class="text-align-center" @click="copy(now)">{{ now }}</div>
      <div class="margin_t-10 text-align-center" @click="copy(nowString)">{{ nowString }}</div>
      <div class="margin_t-10 text-align-center" @click="copy(nowTime)">{{ nowTime }}</div>
    </div>
  </Panel>
</template>

<script setup>
  import { computed, inject, onBeforeMount, ref } from 'vue'
  
  import Panel from '@/components/panel/index.vue'
  import { parseDate2Str } from '@/utils'

  const copy = inject('copy')

  const now = ref()

  const nowString = computed(() => {
    return parseDate2Str(now.value)
  })

  const nowTime = computed(() => {
    return now.value.getTime()
  })

  onBeforeMount(() => {
    now.value = new Date()
    setInterval(() => {
      now.value = new Date()
    }, 1000)
  })
</script>

<style lang="scss" scoped>
  .now-box {
    & > div {
      min-width: 400px;
    }
  }
</style>