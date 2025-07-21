const { PACKAGE_SCOPE } = require('../constants');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testTimeout: 15000,
  setupFilesAfterEnv: ['<rootDir>/src/config/jest/jest.setup.ts'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$':
      '<rootDir>/src/config/jest/__mocks__/fileMock.ts',
    [new RegExp(`${PACKAGE_SCOPE}core-(.+)`)]:
      '<rootDir>/packages/core/core-$1/lib',
    "^axios$": '<rootDir>/node_modules/axios/dist/node/axios.cjs'
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
