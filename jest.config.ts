module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transformIgnorePatterns: ['/node_modules/(?!(@bundled-es-modules)/)']
}

// module.exports = {
//   setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
//   testPathIgnorePatterns: ['/node_modules/', '/build/'],
//   moduleNameMapper: { '\\.(css|less|scss|sass)$': 'identity-obj-proxy' },
//   transform: { '^.+\\.tsx?$': 'babel-jest' },
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   testEnvironment: 'jsdom'
// }
