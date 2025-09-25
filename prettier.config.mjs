/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  singleQuote: false,
  semi: true,
  trailingComma: "all",
  plugins: [
    "prettier-plugin-tailwindcss",
    "prettier-plugin-packagejson",
    "prettier-plugin-organize-imports",
  ],
};
