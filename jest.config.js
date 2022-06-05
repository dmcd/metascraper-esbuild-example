module.exports = {
  testPathIgnorePatterns: ['<rootDir>/src/__e2e__/'],
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
