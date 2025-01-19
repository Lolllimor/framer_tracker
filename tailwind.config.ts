import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          lg: '80px',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        '.bg-clip-text': {
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
        },
        '.mask-gradient': {
          '-webkit-mask-image':
            'linear-gradient(to right, transparent, black, transparent)',
          'mask-image':
            'linear-gradient(to right, transparent, black, transparent)',
          '-webkit-mask-composite': 'destination-in',
          'mask-composite': 'intersect',
        },
        '.mask-gradient-to-testimonial': {
          '-webkit-mask-image':
            'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
          'mask-image':
            'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
          '-webkit-mask-composite': 'destination-in',
          'mask-composite': 'intersect',
        },
      });
    },
  ],
};

export default config;
