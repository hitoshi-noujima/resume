module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'array-bracket-spacing': [2, 'never'],
        'block-spacing': 2,
        'brace-style': 2,
        'comma-spacing': [2, { before: false, after: true }],
        'computed-property-spacing': [2, 'never'],
        indent: [2, 4, { SwitchCase: 1 }],
        'key-spacing': [2, { beforeColon: false, afterColon: true }],
        'object-curly-spacing': [2, 'always'],
        quotes: [2, 'single'],
        semi: [2, 'always'],
        'keyword-spacing': 2,
        'space-before-function-paren': [2, 'never'],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'func-call-spacing': [2, 'never'],
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [2, { max: 1 }],
        'no-trailing-spaces': 2,
        'no-irregular-whitespace': 0,
        'no-unused-vars': [2, {
            vars: 'local',
            args: 'none'
        }],
        'no-multi-spaces': 2,
        'vue/html-closing-bracket-newline': [2, {
            singleline: 'never',
            multiline: 'always'
        }],
        'vue/html-closing-bracket-spacing': [2, {
            selfClosingTag: 'always'
        }],
        'vue/html-indent': [2, 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true
        }]
    }
};
