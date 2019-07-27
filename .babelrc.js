const isTest = String(process.env.NODE_ENV) === "test"

module.exports = {
  presets: [["@babel/env", { modules: isTest ? "commonjs" : false }], "@babel/react"],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    'react-hot-loader/babel',
    '@babel/syntax-dynamic-import'
  ],
  env: {
    test: {
      plugins: ["@babel/plugin-transform-runtime"]
    }
  }
}