// eslint.config.js

module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      // Add your rules here, e.g.
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
