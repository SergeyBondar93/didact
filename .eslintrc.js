module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'off',
    'import/extensions': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
  },
  ignorePatterns: ['webpack.config.js', 'dist'],
};
