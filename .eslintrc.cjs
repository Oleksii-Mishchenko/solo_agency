/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    '@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': ['error', { semi: true }],
    'prettier/prettier': ['error', { 'singleQuote': true }],
    'max-len': ['error', { 'code': 80, 'ignoreComments': true, 'ignoreTemplateLiterals': true }],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/semi': ['error'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
