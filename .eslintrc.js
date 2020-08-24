// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  globals: {
    weex: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'semi': [1, 'always'],
    'quotes': [1, 'single'], // 引号类型
    'vue/no-parsing-error':  [2, {
      "x-invalid-end-tag": false
    }],
    // allow async-await
    'generator-star-spacing': 'off',
    'comma-dangle': [1, 'always-multiline'], // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    "space-before-function-paren": [0, "always"], //函数定义时括号前面要不要有空格
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
