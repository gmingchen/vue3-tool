<template>
  <Panel title="时间日期格式 → 时间戳">
    <div class="now-box">
      <div class="text-align-center">
        <el-date-picker
          v-model="date"
          type="datetime"
          placeholder="Pick a Date"
          format="YYYY/MM/DD HH:mm:ss"
        />
      </div>
      <div class="margin_t-10 text-align-center">
        <el-button type="primary" size="small" @click="parseHandle">转换</el-button>
      </div>
      <div class="margin_t-10 text-align-center" @click="copy(parse)">
        {{ parse }}
      </div>
    </div>
  </Panel>
</template>

<script setup>
  import { inject, ref } from 'vue'
  
  import Panel from '@/components/panel/index.vue'

  const copy = inject('copy')

  const date = ref(new Date())

  const parse = ref()

  const parseHandle = () => {
    if (date.value) {
      parse.value = +date.value
    }
  }
</script>

<style lang="scss" scoped>
  .now-box {
    & > div {
      min-width: 400px;
    }
  }
</style>