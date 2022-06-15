module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    defineEmits: true,
    document: true,
    localStorage: true,
    GLOBAL_VAR: true,
    window: true,
    defineProps: true,
    defineExpose: true,
  },
  extends: [
    './.eslintrc-auto-import.js',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended', // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'import'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off', // 有import的文件 必须要有默认导出
    'import/no-extraneous-dependencies': 'off',
    'vue/multi-word-component-names': 'off', // 组件名不能一个单词，要么大驼峰双单词，要么中划线 连接
    'no-lonely-if': 'off', // if else if
    'prefer-default-export': 'off', // 导出不能没有默认导出而只有单独导出
    'no-nested-ternary': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-expressions': 'off', // 不能有未使用的表达式cb && cb() 这种不允许
  },
};
