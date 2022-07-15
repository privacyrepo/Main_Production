const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages**/*.{js,ts,jsx,tsx}',
    './src/components**/*.{js,ts,jsx,tsx}',
    './src/layouts**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})