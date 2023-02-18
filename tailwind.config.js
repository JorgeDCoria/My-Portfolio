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
          "50%": { "box-shadow": "1px 4px 13px 7px  rgba(66,157,215,0.93)" },
        },
        shadowSecondary: {
          "0% , 100%": {
            "box-shadow": "1px 4px 13px 7px rgba(63,33,13,0.25)",
          },
          "50%": { "box-shadow": "1px 4px 13px 7px  rgba(215,123,66,0.84)" },
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
        header: "url('./assets/header-a.jpg')",
        project: ``,
      },
      fontFamily: {
        title: ["Play", "sans-serif"],
        subtitle: ["Ubuntu", "sans-serif"],
      },
      colors: {
        primary_50: "#eaf4fb",
        primary_100: "#c0def2",
        primary_200: "#96c9e9",
        primary_300: "#6cb3e0",
        primary_400: "#429dd7",
        primary_500: "#2884BD",
        primary_600: "#1F6793",
        primary_700: "#164969",
        primary_800: "#0d2c3f",
        primary_900: "#040f15",
        secondary_50: "#fbf0ea",
        secondary_100: "#f2d3c0",
        secondary_200: "#e9b696",
        secondary_300: "#e0986c",
        secondary_400: "#d77b42",
        secondary_500: "#bd6228",
        secondary_600: "#934c1f",
        secondary_700: "#693616",
        secondary_800: "#3f210d",
        secondary_900: "#150b04",
        neutral_50: "#F3F1F4",
        neutral_100: "#DAD5DD",
        neutral_200: "#C2B9C6",
        neutral_300: "#A99DAF",
        neutral_400: "#918198",
        neutral_500: "#77677E",
        neutral_600: "#5D5062",
        neutral_700: "#423946",
        neutral_800: "#28222A",
        neutral_900: "#0D0B0E",
      },
    },
  },
  plugins: [],
};
