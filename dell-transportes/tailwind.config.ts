import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./componentes/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        verdeEscuro: '#051F20',
        verdeMedioEscuro: '#0B2B26', 
        verdeMedio: '#163832',  
        verdeMedioClaro: '#235347', 
        verdeClaro: '#8EB69B', 
        branco: '#DAF1DE', 
      },
      fontFamily: {
        sans: ['Fira Sans', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
