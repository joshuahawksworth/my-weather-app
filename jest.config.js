module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/app/page',
    },
    testPathIgnorePatterns: [
        '/node_modules/',
        '/.next/',
    ],
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
};