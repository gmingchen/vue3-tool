<template>
  <div class="json-container">
    <el-input v-model="code" type="textarea" :rows="10"></el-input>
    <div class="margin-10-n text-align-center">
      <el-button type="primary" size="small" @click="jsonHandle">JSON格式化</el-button>
      <!-- <el-button type="primary" size="small" @click="jsHandle">JavaScript格式化</el-button> -->
    </div>
    <Codemirror class="codemirror" v-model:value="parse" :options="options" />
  </div>
</template>

<script setup>
  import { ref } from "vue";

  import { ElMessage } from 'element-plus'

  import Codemirror from "codemirror-editor-vue3";
  import "codemirror/theme/dracula.css";
  import 'codemirror/addon/fold/foldgutter.css';
  import 'codemirror/mode/javascript/javascript.js'

  const code = ref(``);

  const parse = ref()

  const options = ref({
    mode: "application/json",
    theme: "dracula",
    readOnly: true,
    lineNumbers: true,
    lineWrapping: true,
    autocorrect: true,
    spellcheck: true,
    smartIndent: true,
    indentUnit: 2,
    foldGutter: true,
    styleActiveLine: true,
    gutters:["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
  })

  const jsonHandle = () => {
    try {
      options.value.mode = 'application/json'
      parse.value = JSON.stringify(JSON.parse(code.value), null, '\t')
    } catch (error) {
      ElMessage({
        type: 'warning',
        dangerouslyUseHTMLString: true,
        message: `<p>解析错误</p>${ error.message }`,
      })
    }
  }

  const jsHandle = () => {
    try {
      options.value.mode = 'text/javascript'
      parse.value = code.value.replace(/;/g, ';\n').replace(/\n/g, ';\n')
    } catch (error) {
      ElMessage({
        type: 'warning',
        dangerouslyUseHTMLString: true,
        message: `<p>解析错误</p>${ error.message }`,
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>