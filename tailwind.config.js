/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0b1020',
          700: '#2b2f42',
        },
        surface: {
          0: '#ffffff',
          50: '#f7f7ff',
          100: '#f1f1ff',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(13, 18, 45, 0.10)',
        softer: '0 18px 50px rgba(13, 18, 45, 0.12)',
        glow: '0 18px 60px rgba(131, 88, 255, 0.22)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #7c3aed 0%, #2563eb 45%, #22c55e 140%)',
        'soft-gradient': 'radial-gradient(1200px 600px at 20% -10%, rgba(124, 58, 237, 0.22), transparent 60%), radial-gradient(900px 500px at 90% 10%, rgba(37, 99, 235, 0.18), transparent 60%), linear-gradient(180deg, #ffffff, #f7f7ff 35%, #ffffff 95%)',
        'glass': 'linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.55))',
      },
    },
  },
  plugins: [],
}

