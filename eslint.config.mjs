import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  // Specify the environments
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  
  // Extend recommended settings for JavaScript and React
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  
  // Specify parser options for modern JavaScript syntax
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  
  // Include plugins for JavaScript and React
  plugins: [
    "react"
  ],
  
  // Custom globals from the "globals" package
  globals: {
    ...globals.browser,
    ...globals.node,
  },
  
  // Define custom rules
  rules: {
    "react/prop-types": "warn", // Warn about missing prop-types
    "react/react-in-jsx-scope": "off", // Not needed for React 17+
    "no-unused-vars": ["warn", { args: "none" }], // Ignore unused function args
    "semi": ["error", "always"], // Enforce semicolons
    "quotes": ["error", "double"], // Use double quotes consistently
  },
};

export default eslintConfig;
