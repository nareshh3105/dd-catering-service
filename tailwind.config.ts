import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#D4AF37',
          600: '#B8960C',
          700: '#92740A',
          800: '#785C08',
          900: '#4A3705',
        },
        maroon: {
          50: '#FFF5F5',
          100: '#FFE3E3',
          200: '#FFC9C9',
          300: '#FFA8A8',
          400: '#E05555',
          500: '#800000',
          600: '#6B0000',
          700: '#520000',
          800: '#3D0000',
          900: '#2A0000',
        },
        cream: '#FFFDF5',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,175,55,0.5)' },
          '50%': { boxShadow: '0 0 0 18px rgba(212,175,55,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F5D060 50%, #B8960C 100%)',
        'maroon-gradient': 'linear-gradient(135deg, #800000 0%, #a00000 50%, #5a0000 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(28,5,5,0.7) 0%, rgba(80,0,0,0.65) 60%, rgba(28,5,5,0.85) 100%)',
      },
      boxShadow: {
        gold: '0 4px 20px rgba(212, 175, 55, 0.4)',
        'gold-lg': '0 8px 40px rgba(212, 175, 55, 0.5)',
        maroon: '0 4px 20px rgba(128, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}

export default config
