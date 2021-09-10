module.exports = {
    globals: {
        'React': true,
        'PropTypes': true
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        'linebreak-style': ['error', 'unix'],
        quotes: ['warn', 'single'],
        semi: ['error', 'always']
    }
};
