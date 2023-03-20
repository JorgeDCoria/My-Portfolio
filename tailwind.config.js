/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      keyframes: {
        shadowPrimary: {
          "0% , 100%": {
            "box-shadow": "1px 4px 13px 7px rgba(13,44,63,0.25)",
          },
          "50%": { "box-shadow": "1px 4px 13px 7px  rgba(65, 105, 225, 1)" },
        },
        shadowSecondary: {
          "0% , 100%": {
            "box-shadow": "1px 4px 13px 7px rgba(63,33,13,0.25)",
          },
          "50%": { "box-shadow": "1px 4px 13px 7px  rgba(65, 105, 225, 1)" },
        },
      },
      animation: {
        shadowPrimary: "shadowPrimary 3s infinite",
        shadowSecondary: "shadowSecondary 3s infinite",
        spinOne: "spin 35s linear infinite",
      },
      boxShadow: {
        project: "10px 13px 13px -3px rgba(147,76,31,0.58)",
      },
      backgroundImage: {
        header: "url('./assets/header-a1.jpg')",
        project: ``,
        contactme: "url('./assets/contactme.jpg')",
      },
      fontFamily: {
        title: ["Play", "sans-serif"],
        subtitle: ["Ubuntu", "sans-serif"],
      },
      colors: {
        primary_base: "#4169e1",
        primary_50: "#e9eefc",
        primary_100: "#bdcbf5",
        primary_200: "#91a8ee",
        primary_300: "#6585e7",
        primary_400: "#3963e0",
        primary_500: "#1f49c6",
        primary_600: "#18399a",
        primary_700: "#11296e",
        primary_800: "#0a1842",
        primary_900: "#030816",
        secondary_base: "#E1B941",
        secondary_50: "#fcf7e9",
        secondary_100: "#f5e7bd",
        secondary_200: "#eed691",
        secondary_300: "#e7c665",
        secondary_400: "#e0b639",
        secondary_500: "#c69c1f",
        secondary_600: "#9a7a18",
        secondary_700: "#6e5711",
        secondary_800: "#42340a",
        secondary_900: "#161103",
        neutral_50: "#f0f1f5",
        neutral_100: "#d1d5e1",
        neutral_200: "#b2b9cd",
        neutral_300: "#939cb9",
        neutral_400: "#7480a4",
        neutral_500: "#5b678b",
        neutral_600: "#46506c",
        neutral_700: "#32394d",
        neutral_800: "#1e222e",
        neutral_900: "#0a0b0f",
      },
    },
  },
  plugins: [],
};
