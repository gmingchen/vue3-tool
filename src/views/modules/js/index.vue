<template>
  <div class="json-container">
    <Codemirror class="codemirror" v-model:value.trim="code" :options="options" />
    <div class="margin-10-n text-align-center">
      <el-button type="primary" size="small" @click="runHandle">执行</el-button>
    </div>
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

  const options = ref({
    mode: "text/javascript",
    theme: "dracula",
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

  const runHandle = () => {
    if (code.value) {
      try {
        eval(code.value)
      } catch (error) {
        ElMessage({
          type: 'warning',
          dangerouslyUseHTMLString: true,
          message: `<p>执行错误</p>${ error.message }`,
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>