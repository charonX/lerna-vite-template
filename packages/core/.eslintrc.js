module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'alloy',
        'alloy/typescript'
    ],
    'parserOptions': {
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};