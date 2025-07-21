module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      "jsx": true
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
    'react-hooks',
    "prettier",
    '@typescript-eslint'],
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    'prettier',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json'],
      },
      node: {
        project: ['tsconfig.json'],
      },
    },
  },
  rules: {
    'no-console': 'warn',
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'parent',
          'sibling'
        ],
        'pathGroups': [
          {
            'pattern': 'react',
            'group': 'external',
            'position': 'before'
          }
        ],
        'pathGroupsExcludedImportTypes': [
          'react'
        ],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        }
      }
    ],
  },
  overrides: [
    {
      files: ['**/*.+(js|jsx)'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: [
        '*.config.js',
        'base-builder.js',
        'jest.utils.js',
        'src/scripts/**/*.js',
        'packages/utils/utils-build-module-bundler/lib/**/*.js',
      ],
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)',
      ],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:jest-dom/recommended',
      ],
    },
  ],
};
