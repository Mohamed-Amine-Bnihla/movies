
module.exports = {
 content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
     container:{
    center:true,
    padding:'2rem',
    screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
     },
    extend: {
     screens:{

        'maxXL': {'max': '1279px'},
        'maxMD': {'max': '767px'},
     }
    },
  },
  plugins: [
        require('@tailwindcss/line-clamp'),
  ],
}
