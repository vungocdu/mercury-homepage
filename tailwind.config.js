/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}"
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
      screens: {
        xs: "375px",
      },
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
        // Mercury Solutions Brand Colors
        mercury: {
          50: "hsl(var(--mercury-50))",
          100: "hsl(var(--mercury-100))",
          200: "hsl(var(--mercury-200))",
          300: "hsl(var(--mercury-300))",
          400: "hsl(var(--mercury-400))",
          500: "hsl(var(--mercury-500))",
          600: "hsl(var(--mercury-600))",
          700: "hsl(var(--mercury-700))",
          800: "hsl(var(--mercury-800))",
          900: "hsl(var(--mercury-900))",
          950: "hsl(var(--mercury-950))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-public-sans)", "Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        "fade-in": {
          from: {
            opacity: 0,
            transform: "translateY(20px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "web3-glow": {
          from: {
            textShadow: "0 0 5px hsl(var(--primary) / 0.3), 0 0 10px hsl(var(--primary) / 0.3), 0 0 15px hsl(var(--primary) / 0.3)",
          },
          to: {
            textShadow: "0 0 7px hsl(var(--primary) / 0.4), 0 0 14px hsl(var(--primary) / 0.4), 0 0 21px hsl(var(--primary) / 0.4)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-x": "gradient-x 15s ease infinite",
        "fade-in": "fade-in 0.8s ease-out",
        "web3-glow": "web3-glow 3s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 