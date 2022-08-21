module.exports = {
  env: {
    browser: false,
    es2021: true,
    'jest/globals': true,
  },
  plugins: ['prettier', 'jest'],
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'always',
        jsx: 'always',
      },
    ],
  },
};
