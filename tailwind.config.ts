import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes';

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
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...themes.light,
          '--rounded-box': '0rem',
          '--rounded-btn': '0rem',
          '--rounded-badge': '0rem',
          '--tab-radius': '0rem',
        },
      },
      {
        dark: {
          ...themes.dark,
          '--rounded-box': '0rem',
          '--rounded-btn': '0rem',
          '--rounded-badge': '0rem',
          '--tab-radius': '0rem',
        },
      },
      {
        dracula: {
          ...themes.dracula,
          '--rounded-box': '0rem',
          '--rounded-btn': '0rem',
          '--rounded-badge': '0rem',
          '--tab-radius': '0rem',
        },
      },
      {
        night: {
          ...themes.night,
          '--rounded-box': '0rem',
          '--rounded-btn': '0rem',
          '--rounded-badge': '0rem',
          '--tab-radius': '0rem',
        },
      },
      {
        nord: {
          ...themes.nord,
          '--rounded-box': '0rem',
          '--rounded-btn': '0rem',
          '--rounded-badge': '0rem',
          '--tab-radius': '0rem',
        },
      },
    ],
  },
  darkMode: ['class', '[data-theme="dark"] *,[data-theme="dracula"] *,[data-theme="night"]'],
};

export default config;
