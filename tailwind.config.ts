import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light_blue: '#5442E3', 
        background_white:'#F5F4FF'
      },
      fontSize:{
        heading:'3.5rem',
        dubHeading:'1.25rem'
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
        'titillium': ['Titillium Web', 'sans-serif'], 
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
};

export default config;
