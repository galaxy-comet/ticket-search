/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx}', './public/index.html'],
    theme: {
        extend: {},
        colors: {
            lightblue: '#f2f7fe',
            blue: '#016AE9',
            white: '#ffffff',
            gray: '#F7F7F7',
            orange: '#FF0700',
        },
        fontSize: {
            vsm: ['14px', '16px'],
            sm: ['15px', '17px'],
            base: ['16px', '20px'],
            lg: ['20px', '22px'],
            xl: ['24px', '26px'],
        },
    },
    plugins: [],
}
