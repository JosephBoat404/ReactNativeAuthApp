export default [
    js.configs.recommended,
    react.configs.recommended,
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      languageOptions: {
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
        },
        globals: {
          ...globals.browser,
          ...globals.node,
        },
      },
      plugins: {
        react, // Now correctly set as an object
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
        'no-console': 'warn',
        'react/prop-types': 'off',
      },
    },
  ];