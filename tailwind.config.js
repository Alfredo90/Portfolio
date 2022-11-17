/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
    'proxima-nova': ["Proxima Nova"],
    'salt' : ["Rock Salt", 'cursive'],
    'josefin' : ["Josefin Sans", 'sans-serif'],
  },
    extend: {
      colors: {
        // 'light' : "#536976",
        // 'dark' : "#14243E",
        'light' : "#638567" ,
        'dark' :  "#1E2F32" ,
      },
      keyframes: {
        wiggle: {
            '0%, 100%': {
                transform: 'rotate(-3deg)'
            },
            '50%': {
                transform: 'rotate(3deg)'
            },
        }
    },
    animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
    }
    },
  },
  plugins: [],
}
