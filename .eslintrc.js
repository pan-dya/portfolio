module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true, // Add Jest environment
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off', // Disable the rule
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    module: 'readonly',
  },
};
