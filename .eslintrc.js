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
      'no-console': 0,
      'no-var': 'error',
      'prefer-const': 'error',
      'new-cap': 0,
   },
}
