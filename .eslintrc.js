module.exports = {
  env: {
    browser: true,
    es2021: true,
      node: true
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'no-plusplus': 0,
    'line-break-style': 0
  }
};
