module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:storybook/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    project: ["tsconfig.json"],
    sourceType: "module"
  },
  plugins: ["svelte3", "@typescript-eslint"],
  ignorePatterns: ["public/build/", "**/*.spec.ts"],
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3"
    },
    {
      files: ["**/*.stories.js"],
      rules: {
        "@typescript-eslint/no-unsafe-assignment": 0,
        "@typescript-eslint/no-unsafe-member-access": 0,
      }
    }
  ],
  rules: {
    quotes: ["error", "double"],
    "@typescript-eslint/no-empty-interface": ["error", {
      "allowSingleExtends": true
    }]
  },
  settings: {
    "svelte3/typescript": true
  }
};