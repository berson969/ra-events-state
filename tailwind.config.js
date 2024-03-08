/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.{html,js,jsx}",
      "./src/components/**/*.{js,jsx}",
      "./src/index.html"
  ],
  theme: {
    extend: {
        fontFamily: {
            'sans': ['Roboto', 'sans-serif'],
            'rubik':['Rubik', 'serif'],
            'yeseva':["Yeseva-one", 'serif'],
            'cuprum':["Cuprum", 'san-serif']
        }
    }
  },
  plugins: [],
}

