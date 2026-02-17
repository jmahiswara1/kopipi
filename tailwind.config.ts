import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#2C1810",
        tobacco: "#C4956A",
        caramel: "#8B5E3C",
        cream: "#F5EDD6",
        latte: "#D4B896",
        dark: "#1A0F08",
        success: "#5C8A5E",
        warning: "#C4956A",
        error: "#8B3A3A",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        editorial: ["var(--font-cormorant)", "serif"],
        ui: ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        'noise': "url('/textures/noise.png')",
      }
    },
  },
  plugins: [],
};
export default config;
