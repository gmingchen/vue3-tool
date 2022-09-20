<template>
  <Panel title="时间戳 → 时间日期格式">
    <div class="now-box">
      <div class="text-align-center">
        <el-input-number :min="0" v-model="time" :controls="false"></el-input-number>
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
  import { parseDate2Str } from '@/utils'

  const copy = inject('copy')

  const time = ref(+new Date())

  const parse = ref()

  const parseHandle = () => {
    if (time.value != '') {
      parse.value = parseDate2Str(new Date(time.value))
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