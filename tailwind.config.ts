import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors:{
      'primary': '#E0E0E0',
      'secondary': '#796C27',
      'light-grey': '#B0A5A5',
      'dark-grey': '#645B5B',
      'base-secondary': '#36201F',
      'dark-yellow': '#635409',
      'light-yellow': '#CEB740',
    },
    fontFamily: {
      serif: ['Baskerville'],
      },
    },
  },
  plugins: [],
}
export default config
