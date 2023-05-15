module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks', 'import'],
  rules: {
    // These rules enforce that functions have explicit return types, which can make the code more self-documenting and catch potential bugs. However, some teams find these rules overly strict, especially in a codebase that uses a lot of type inference, and choose to disable them.
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    'prettier/prettier': 'error',
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',
    // This rule requires that React component props be typed, which can help catch bugs and make the code more self-documenting. However, if you're using TypeScript, which has its own system for typing props, this rule might be redundant.
    'react/prop-types': 'off',
    // This rule is usually necessary for older versions of React, but starting with React 17, JSX Transform has been introduced and you no longer need to import React in your component files, so disabling this rule makes sense for recent projects.
    'react/react-in-jsx-scope': 'off',
    'import/default': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
