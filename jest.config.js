module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each',
  ],
  collectCoverageFrom: [
    "**/assets/js/components/*.{js,jsx}",
    "!**/node_modules/**",
  ]
};