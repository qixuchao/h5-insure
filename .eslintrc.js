const { off } = require('process');

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
    'za/typescript-vue',
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended', // 添加 prettier 插件
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'import'],
  rules: {
    'no-unused-expressions': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/multi-word-component-names': 'off', // 组件名不能一个单词，要么大驼峰双单词，要么中划线 连接
    'no-lonely-if': 'off', // if else if
    'prefer-default-export': 'off', // 导出不能没有默认导出而只有单独导出
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off', // 参数不能被赋值
    camelcase: 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-this-alias': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/camelcase': ['off'],
    'no-shadow': ['error', { builtinGlobals: false, hoist: 'functions', allow: [] }],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
  },
};
