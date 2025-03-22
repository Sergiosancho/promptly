import type { Config } from 'tailwindcss';
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: ["class", "[data-theme='dark']"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "orbit": {
          from: { transform: "rotate(var(--angle)deg) translateX(var(--radius)px) rotate(calc(var(--angle)deg * -1))" },
          to: { transform: "rotate(calc(var(--angle)deg + 360deg)) translateX(var(--radius)px) rotate(calc((var(--angle)deg + 360deg) * -1))" },
        },
        "aurora-border": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        "aurora-1": {
          "0%, 100%": { transform: "translateX(-50%) translateY(-50%)" },
          "50%": { transform: "translateX(0%) translateY(0%)" },
        },
        "aurora-2": {
          "0%, 100%": { transform: "translateX(0%) translateY(0%)" },
          "50%": { transform: "translateX(-50%) translateY(-50%)" },
        },
        "aurora-3": {
          "0%, 100%": { transform: "translateX(-50%) translateY(-50%)" },
          "50%": { transform: "translateX(0%) translateY(0%)" },
        },
        "aurora-4": {
          "0%, 100%": { transform: "translateX(0%) translateY(0%)" },
          "50%": { transform: "translateX(-50%) translateY(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "orbit": "orbit var(--duration) linear infinite",
        "aurora-border": "aurora-border 6s ease-in-out infinite",
        "aurora-1": "aurora-1 12s ease-in-out infinite alternate",
        "aurora-2": "aurora-2 12s ease-in-out infinite alternate",
        "aurora-3": "aurora-3 12s ease-in-out infinite alternate",
        "aurora-4": "aurora-4 12s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
