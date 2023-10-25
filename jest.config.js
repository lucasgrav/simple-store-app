export default {
    testEnvironment: 'jsdom',
    testMatch: [
      '**/?(*.)+(spec|test|tests).[tj]s?(x)',
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  };