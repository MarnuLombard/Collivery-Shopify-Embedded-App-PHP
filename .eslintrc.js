module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },

  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:react/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'react/jsx-max-props-per-line': [1, {'maximum': 1, 'when': 'multiline'}],
  },
};
