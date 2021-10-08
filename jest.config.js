module.exports = {
    roots: [
        "<rootDir>/src"
    ],
    testMatch: [
        "**/__tests__/**/*.+(ts|js)",
        "**/?(*.)+(spec|test).+(ts|js)"
    ],
    transform: {
        "^.+\\.(ts)$": "ts-jest",
        "^.+\\.(vue)$": "@vue/vue3-jest"
    },
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
        "^@/(.+)": "<rootDir>/src/$1",
        "^~/(.+)": "<rootDir>/src/$1",
    },
    globals: {
        "ts-jest": {
            useESM: true,
        },
    },
}
