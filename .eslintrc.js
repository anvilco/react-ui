module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'nicenice',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    "babelOptions": {
      "presets": ["@babel/preset-react"]
    },
  },
  rules: {
  },
}
