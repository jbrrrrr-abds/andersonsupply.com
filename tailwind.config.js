/** Only loading TW into the client-app routes, not the page router, or the (_main) route group **/
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["src/app/(client-app)/**/*.{js,jsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
      fontFamily: {
        sans: ["var(--font-GothamSS)"],
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brandBlack: {
          DEFAULT: "#282829",
          900: "#3c3c3d",
          800: "#444446",
          700: "#4e4f50",
          600: "#5c5d5e",
          500: "#6b6b6f",
          400: "#86868a",
          300: "#afb0b1",
          200: "#d0d0d1",
          100: "#e6e6e7",
          50: "#f5f5f6",
        },
        brandWhite: {
          DEFAULT: "#f0eee3",
          300: "#c0b689",
          200: "#d6d0b1",
          100: "#f0eee3",
          50: "#f8f7f2",
        },
        gold: "#b48645",
        lightGray: "#646464",
        goldUI: "hsl(var(--goldUI))",
        "goldUI-foreground": "hsl(var(--warning-foreground))",
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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
