import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#d9ceff',
          300: '#bea6ff',
          400: '#9f75ff',
          500: '#843dff',
          600: '#7c3aed',
          700: '#6b21a8',
          800: '#581c87',
          900: '#4c1d95',
          950: '#2e1065',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Crimson Text', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            lineHeight: '1.75',
            fontSize: '1.125rem',
            h1: {
              fontSize: '2.25rem',
              fontWeight: '700',
              lineHeight: '1.2',
              marginTop: '2rem',
              marginBottom: '1rem',
              color: '#111827',
            },
            h2: {
              fontSize: '1.875rem',
              fontWeight: '600',
              lineHeight: '1.3',
              marginTop: '1.75rem',
              marginBottom: '0.875rem',
              color: '#111827',
            },
            h3: {
              fontSize: '1.5rem',
              fontWeight: '600',
              lineHeight: '1.4',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
              color: '#111827',
            },
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              color: '#374151',
            },
            strong: {
              color: '#111827',
              fontWeight: '600',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftColor: '#0ea5e9',
              borderLeftWidth: '4px',
              paddingLeft: '1rem',
              marginLeft: '0',
              marginRight: '0',
              backgroundColor: '#eff6ff',
              padding: '1rem',
              borderRadius: '0.375rem',
              color: '#374151',
            },
            code: {
              backgroundColor: '#1f2937',
              color: '#e5e7eb',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              border: '1px solid #374151',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#0f172a',
              color: '#f1f5f9',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              overflow: 'auto',
              border: '1px solid #334155',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            },
            'pre code': {
              backgroundColor: 'transparent !important',
              color: 'inherit !important',
              padding: '0 !important',
              border: 'none !important',
              borderRadius: '0 !important',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.5rem',
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.5rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
          },
        },
        lg: {
          css: {
            fontSize: '1.25rem',
            lineHeight: '1.8',
          },
        },
        xl: {
          css: {
            fontSize: '1.375rem',
            lineHeight: '1.8',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
