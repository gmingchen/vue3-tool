<template>
  <Panel title="图片 → BASE64">
    <div class="now-box">
      <div class="text-align-center">
        <el-upload
          class="uploader"
          ref="uploader"
          :auto-upload="false"
          :show-file-list="false"
          :on-change="changeHandle"
          accept="image/*">
          <img v-if="image" :src="image" class="image" />
          <span class="plus" v-else>+</span>
        </el-upload>
      </div>
      <div class="margin-10-n text-align-center">
        <el-button type="primary" size="small" @click="parseHandle">转换</el-button>
      </div>
      <el-input v-model="parse" type="textarea" :rows="10" @click="copy(parse)" readonly></el-input>
    </div>
  </Panel>
</template>

<script setup>
  import { inject, ref } from 'vue'
  
  import Panel from '@/components/panel/index.vue'

  import {file2Base64 }from '@/utils'

  const copy = inject('copy')

  const uploader = ref()

  const image = ref('')

  const parse = ref('')

  const changeHandle = async (file) => {
    image.value = await file2Base64(file.raw)
  }

  const parseHandle = () => {
    parse.value = image.value
  } 
</script>

<style lang="scss">
  $size: 150px;

  .uploader {
    .el-upload {
      width: $size;
      height: $size;
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
      &:hover {
        border-color: var(--el-color-primary);
      }
    }
    .image {
      max-height: $size;
      max-width: $size;
      display: block;
    }
    .plus {
      font-size: 28px;
      color: #8c939d;
      width: $size;
      height: $size;
      text-align: center;
      line-height: $size;
    }
  }
</style>