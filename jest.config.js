/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "./coverage",
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 60,
      functions: 60,
      lines: 60
    },
    './src/tests/primeFactorsDecomposition.test.ts': {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70
    }
  }
};