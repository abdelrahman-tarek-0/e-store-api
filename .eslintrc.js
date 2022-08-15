module.exports = {
   env: {
      browser: true,
      commonjs: true,
      es2021: true,
      node: true,
   },
   extends: ['google', 'prettier'],
   parserOptions: {
      ecmaVersion: 'latest',
   },
   plugins: ['prettier'],
   rules: {
      'prettier/prettier': 2,
      quotes: ['error', 'single'],
      'no-unused-vars': 1,
      'no-console': 1,
      'no-var': 'error',
      'prefer-const': 'error',
      'new-cap': 0,
      'require-jsdoc': 0,
      'no-throw-literal': 0,
   },
}
