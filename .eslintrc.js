module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'always'],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    indent: ['error', 2],
    'no-floating-decimal': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id', '_bar'] }],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
