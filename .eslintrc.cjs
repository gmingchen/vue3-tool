/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': [0, { 'ignores': ['index', '401', '404', '500', 'Sub', 'detail', 'set', 'comment'] }], // 组件名字限制多字
  }
}
