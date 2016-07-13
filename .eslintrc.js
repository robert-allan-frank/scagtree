module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    'browser': true
  },
  globals: {
    d3: true,
    server: true,
    crossfilter: true
  },
  rules: {
  }
};
