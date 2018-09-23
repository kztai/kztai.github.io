// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
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
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': ['error', 'always'],  //采用分号结尾
    'no-tabs': 0,  //不允许使用制表符，包括注释中的字符（0表示按照编辑器默认）
    'indent': 0,    //强制执行一致的缩进方法（0表示编辑器默认的方法）
    'space-before-function-paren': 0  //在函数括号之前需要或不允许空格
    // 'no-mixed-spaces-and-tabs': 0  //禁止使用混合空格和制表符进行缩进(默认)
  }

}
