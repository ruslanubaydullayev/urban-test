module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors:{
            /*primary:'#FF6363',
            secondary:{
            100:'#E2E2D5',
            200:'#888883',
            }*/

            blue: {
                200:  '#040D12',
                400: '#456AC9',
                800: '#62A9E1',
            },
            gray: {
                100: '#666666',
                900:'#E0E0E0',
                700: '#4E4E4E',
                500: '#D7D7D7',
            }
        },
        fontFamily:{
            body:['Nunito']
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}