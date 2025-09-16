const config = {
  plugins: ["@tailwindcss/postcss"],
};

module.exports = {
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        "petit-formal-script": ["Petit Formal Script", "cursive"],
      },
    },
  },
};

export default config;
