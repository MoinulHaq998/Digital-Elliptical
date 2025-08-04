/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      keyframes: {
        rotBGimg: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rotBGimg: 'rotBGimg 3s linear infinite',
      },
      backgroundImage: {
        'gradient-map': "linear-gradient(to right, #ffffffd9, #ffffffd9), url('/assets/images/footer/map.webp')",
        // 'multi-apps-bg': "url('@/assets/multi-apps/bg.webp')",
        
      },
      colors: {
        primary: '#005e7c',
      },
    },
  },
  plugins: [],
};
