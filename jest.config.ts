export default {
  testPathIgnorePatterns: ["/node_modules/", "/.github"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: "automatic",
            },
          },
        },
        module: {
          type: "es6",
          noInterop: false,
        },
      },
    ],
  },
  coverageProvider: "v8",
  clearMocks: true,
  moduleNameMapper: {
    "^[@./a-zA-Z0-9$_-]+\\.(jpg|svg)$": "<rootDir>/src/utils/fileMock.ts",
  },
  testEnvironment: "jsdom",
};
