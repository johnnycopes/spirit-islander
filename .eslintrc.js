module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    project: [
      "tsconfig.json"
    ],
    sourceType: "module"
  },
  plugins: [
    "svelte3",
    "@typescript-eslint"
  ],
  ignorePatterns: [
    "public/build/",
    "**/*.spec.ts",
  ],
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3"
    }
  ],
  rules: {
    // quotes: ["error", "double"]
  },
  settings: {
    "svelte3/typescript": true,
  }
}