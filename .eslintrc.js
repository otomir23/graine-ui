module.exports = {
    extends: [
        'react-app',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    rules: {
        'indent': [
            'error',
            4
        ],
        'prettier/prettier': 'off'
    }
}