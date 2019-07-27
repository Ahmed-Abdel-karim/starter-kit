module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    codeFrame: true,
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/jsx-filename-extension': 'off'
  }
};
