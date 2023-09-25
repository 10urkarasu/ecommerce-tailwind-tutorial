/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*'
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

