const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  coverageProvider: 'v8',
  testEnvironment: 'node', // Ensure this is set
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Map @/ alias to src
  },
};

module.exports = createJestConfig(config);
