module.exports = {
    env: {
      es2021: true,
      node: true,
      'react-native/react-native': true,
    },
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-native/all',
      'plugin:prettier/recommended', // Make sure this is the last element in the array.
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-native'],
    rules: {
      // Your custom rules here
    },
  };
  