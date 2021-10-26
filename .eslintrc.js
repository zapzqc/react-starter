module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
    'airbnb-typescript',
  ],
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
  },
  rules: {
    'max-len': ['error', { code: 160 }],
  },
};
