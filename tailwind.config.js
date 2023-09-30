/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./src/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    screens:{
      sm:'576px',
      md:'768px',
      lg:'992px',
      xl:'1200px'
    },
    container:{
      center:true,
      padding:'1rem'
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif"
      },
      colors:{
        'primary':'#A2678A'
      }
    },
  },
  variants:{
    extend:{
      display:['group-hover'],
      visibility:['group-hover']
    }
  },
  plugins: [],
}

