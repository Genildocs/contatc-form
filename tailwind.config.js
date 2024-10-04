/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-200': 'hsl(148, 38%, 91%)',
        'green-300': ' hsl(169, 82%, 27%)',
        'grey-500': ' hsl(186, 15%, 59%)',
        'grey-900': 'hsl(187, 24%, 22%) ',
      },
    },
  },
  plugins: [],
};
