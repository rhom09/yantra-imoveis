import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        verde: {
          escuro:   "#3F5B4B",
          profundo: "#2C3F35",
          salvia:   "#8FA78D",
        },
        dourado: {
          DEFAULT: "#B08D57",
          light:   "#C9A96E",
          dark:    "#8B6D3F",
        },
        bege:       "#D8C7A6",
        "off-white": "#F7F5F0",
        border:     "#E2D9C8",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans:  ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-verde": "linear-gradient(135deg, #2C3F35 0%, #3F5B4B 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
