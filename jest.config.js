import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  modulePaths: ["<rootDir>/src/"]

  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);


//module.exports = {
  //collectCoverageFrom: [
    //'**/*.{js,jsx,ts,tsx}',
    //'!**/*.d.ts',
    //'!**/node_modules/**',
  //],
  //setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  //testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  //moduleNameMapper: {
    //'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  //},
  //transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
 // transform: {
 //   '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  //},
//  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
//};
