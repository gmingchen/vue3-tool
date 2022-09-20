<template>
  <Panel title="BASE64 → 图片">
    <div class="now-box">
      <el-input v-model="base64" type="textarea" :rows="10" @click="copy(parse)"></el-input>
      <div class="margin-10-n text-align-center">
        <el-button type="primary" size="small" @click="parseHandle">转换</el-button>
      </div>
      <div class="text-align-center" v-if="parse" >
        <img :src="parse">
        <br>
        <el-button type="primary" size="small" @click="downloadHandle">下载</el-button>
      </div>
    </div>
  </Panel>
</template>

<script setup>
  import { inject, ref } from 'vue'
  
  import Panel from '@/components/panel/index.vue'

  import { base642Blob }from '@/utils'

  const copy = inject('copy')

  const base64 = ref('')

  const parse = ref('')

  const blob = ref()

  const parseHandle = () => {
    blob.value = base642Blob(base64.value, 'img')
    parse.value = URL.createObjectURL(blob.value)
  } 

  const downloadHandle = () => {
    let name = 'download'
    const types = blob.value.type.split('/')
    if (types.length > 1) {
      name += `.${types[1]}`
    }
    const a = document.createElement('a')
    a.href = parse.value
    a.download = name
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(parse.value)
  }
</script>

<style lang="scss">
  $size: 150px;
  img {
    width: 80%;
  }
</style>