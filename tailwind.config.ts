import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        headerColor: '#F3F4F6',
        footerColor: '#111111',
        customBlue: '#181ECC',
        customWhite: '#FFFFFF',
        // customGray: '#EEEEEE',
        customButton: '#E01A28',
      },
      fontFamily: {
        inter: ['Poppins'],
      },
    },
  },
  plugins: [],
}
export default config
