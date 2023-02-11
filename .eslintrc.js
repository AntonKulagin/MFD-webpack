module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: "airbnb-base",
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "no-unused-vars": 0,
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "linebreak-style": ["error", "windows"],
        indent: ["error", 4],
        "object-curly-newline": ["error", "never"],
    },
};
