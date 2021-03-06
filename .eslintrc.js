module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true
  },
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:prettier/recommended'],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.common.js'
      }
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'babel', '@typescript-eslint', 'react-hooks'],
  rules: {
    semi: 0,
    'import/no-duplicates': 0,
    'space-before-function-paren': 0,
    'spaced-comment': 0,
    'arrow-parens': 0,
    'no-debugger': 0,
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'generator-star-spacing': 0,
    'arrow-body-style': 0,
    'no-param-reassign': 0,
    'no-unused-vars': 0,
    'no-mixed-operators': 0,
    'no-plusplus': 0,
    'no-console': 0,
    'no-extend-native': 0,
    'no-restricted-syntax': 0,
    'no-unused-expressions': [
      0,
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'prefer-const': 0,
    'max-len': 0,
    'import/prefer-default-export': 0,
    camelcase: 0,
    'comma-dangle': [2, 'always-multiline'],
    'func-names': 0,
    'import/no-mutable-exports': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/href-no-hash': 0,
    'react/no-danger': 'off',
    'react/jsx-first-prop-new-line': 0,
    'react/sort-comp': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
    'react/no-array-index-key': 0,
    'react/prefer-stateless-function': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'linebreak-style': ['off', 'windows']
  }
};
