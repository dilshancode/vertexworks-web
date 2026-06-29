/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "rgb(var(--surface-rgb) / <alpha-value>)",
        "background": "var(--background)",
        "tertiary": "var(--tertiary)",
        "inverse-surface": "var(--inverse-surface)",
        "on-primary-fixed": "var(--on-primary-fixed)",
        "on-primary-fixed-variant": "var(--on-primary-fixed-variant)",
        "primary-fixed": "var(--primary-fixed)",
        "on-primary-container": "var(--on-primary-container)",
        "surface-container-highest": "var(--surface-container-highest)",
        "secondary-fixed-dim": "var(--secondary-fixed-dim)",
        "surface-container-low": "var(--surface-container-low)",
        "on-tertiary-container": "var(--on-tertiary-container)",
        "on-secondary-fixed": "var(--on-secondary-fixed)",
        "on-error": "var(--on-error)",
        "primary-container": "rgb(var(--primary-container-rgb) / <alpha-value>)",
        "outline": "rgb(var(--outline-rgb) / <alpha-value>)",
        "inverse-on-surface": "var(--inverse-on-surface)",
        "outline-variant": "rgb(var(--outline-variant-rgb) / <alpha-value>)",
        "surface-tint": "var(--surface-tint)",
        "on-tertiary": "var(--on-tertiary)",
        "surface-bright": "var(--surface-bright)",
        "on-surface": "var(--on-surface)",
        "tertiary-container": "var(--tertiary-container)",
        "secondary-fixed": "var(--secondary-fixed)",
        "tertiary-fixed": "var(--tertiary-fixed)",
        "on-primary": "var(--on-primary)",
        "surface-dim": "var(--surface-dim)",
        "on-secondary-fixed-variant": "var(--on-secondary-fixed-variant)",
        "inverse-primary": "var(--inverse-primary)",
        "on-error-container": "var(--on-error-container)",
        "on-tertiary-fixed": "var(--on-tertiary-fixed)",
        "tertiary-fixed-dim": "var(--tertiary-fixed-dim)",
        "surface-container-high": "var(--surface-container-high)",
        "on-background": "var(--on-background)",
        "surface-container": "var(--surface-container)",
        "on-secondary": "var(--on-secondary)",
        "error": "var(--error)",
        "on-surface-variant": "rgb(var(--on-surface-variant-rgb) / <alpha-value>)",
        "secondary-container": "var(--secondary-container)",
        "surface-container-lowest": "rgb(var(--surface-container-lowest-rgb) / <alpha-value>)",
        "surface-variant": "rgb(var(--surface-variant-rgb) / <alpha-value>)",
        "on-tertiary-fixed-variant": "var(--on-tertiary-fixed-variant)",
        "on-secondary-container": "var(--on-secondary-container)",
        "secondary": "var(--secondary)",
        "primary": "rgb(var(--primary-rgb) / <alpha-value>)",
        "error-container": "var(--error-container)",
        "primary-fixed-dim": "var(--primary-fixed-dim)"
      },
      borderRadius: {
        "sm": "0.125rem",
        "DEFAULT": "0.25rem",
        "md": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "container-max": "1280px",
        "gutter": "24px",
        "margin-mobile": "20px",
        "section-gap-lg": "160px",
        "section-gap-md": "80px",
        "stack-sm": "8px",
        "stack-md": "16px",
        "stack-lg": "24px"
      },
      fontFamily: {
        "sans": ["Inter", "sans-serif"],
        "geist": ["Geist", "sans-serif"],
        "mono-sm": ["Geist", "monospace"],
        "headline-lg-mobile": ["Geist", "sans-serif"],
        "display-lg-mobile": ["Geist", "sans-serif"],
        "display-lg": ["Geist", "sans-serif"],
        "headline-md": ["Geist", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "label-md": ["Geist", "sans-serif"]
      },
      fontSize: {
        "mono-sm": ["13px", { lineHeight: "18px", letterSpacing: "0em", fontWeight: "400" }],
        "headline-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "display-lg-mobile": ["40px", { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg": ["72px", { lineHeight: "80px", letterSpacing: "-0.04em", fontWeight: "700" }],
        "headline-md": ["30px", { lineHeight: "38px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "0em", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", letterSpacing: "0em", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "20px", letterSpacing: "0em", fontWeight: "400" }],
        "headline-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "500" }]
      },
      boxShadow: {
        'ambient-blue': '0 32px 64px -12px rgba(37, 99, 235, 0.06)',
        'glow-blue': '0 0 20px 2px rgba(37, 99, 235, 0.4)',
      },
      keyframes: {
        'text-gradient': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'blob': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' }
        }
      },
      animation: {
        'text-gradient': 'text-gradient 6s ease infinite',
        'float': 'float 4s ease-in-out infinite',
        'blob': 'blob 10s infinite',
      }
    },
  },
  plugins: [],
}
