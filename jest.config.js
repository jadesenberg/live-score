// jest.config.js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',                // use ts-jest to compile .ts/.tsx
  testEnvironment: 'jsdom',         // browser-like
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['ts','tsx','js','jsx','json','node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@models/(.*)$': '<rootDir>/types/$1',
    '^@styles/(.*)$': '<rootDir>/styles/$1',
    '^@hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@constants/(.*)$': '<rootDir>/constants/$1'
  },
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.jest.json'
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'    // transform TS & TSX
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  testMatch: [
    '**/__tests__/**/*.(ts|tsx|js)',
    '**/?(*.)+(spec|test).(ts|tsx|js)'
  ],
};
