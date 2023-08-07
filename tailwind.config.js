/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      backgroundImage: {
        'gradient':'radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)'
      }
    },
    colors: {
      "light-blue": "#6E6FDF",
      beige: "#FFD2B8",
      pink: "#F355A7",
      "dim-gray": "#E4C5CF",
      transparent: "rgba(0,0,0,0)",
      black: "#000",
      lime: "#CFCA16",
      white: "#F9F3F7",
      "light-black": "#181817",
      red:"#f72585"
    },
    fontFamily: {
      mulish: ["Mulish", "sans-serif"],
      serif: ["Oranienbaum", "serif"],
    },
    animation: {
      "spin-slow": "spin 12s linear infinite",
    },
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit,minmax(300px,1fr))",
      },
      animation: {
        marquee: "marquee 5s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-60%)" },
        },
      },
      transitionTimingFunction: {
        "ease-Quart": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    },
  },
  plugins: [],
}
