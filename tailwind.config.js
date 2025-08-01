/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      fontFamily: {
        'ibm-plex-sans': ['"IBM Plex Sans"', 'sans-serif'],
        'sans': ['"IBM Plex Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
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
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        // Mercury Solutions Pantone Colors
        mercury: {
          50: "#F8F9FA", // Clean White (Cool Gray 1 C)
          100: "#F8F9FA", // Clean White
          200: "#E9ECEF", // Light Gray
          300: "#DEE2E6", // Medium Light Gray
          400: "#CED4DA", // Medium Gray
          500: "#ADB5BD", // Medium Dark Gray
          600: "#6C757D", // Professional Gray (Cool Gray 9 C)
          700: "#495057", // Dark Gray
          800: "#343A40", // Very Dark Gray
          900: "#212529", // Almost Black
          950: "#1E3A8A", // Deep Mercury (7461 C)
          blue: "#2E5BFF", // Mercury Blue (2925 C)
          gold: "#FFD60A", // Mercury Gold (116 C)
          white: "#F8F9FA", // Clean White
          gray: "#6C757D", // Professional Gray
          deep: "#1E3A8A", // Deep Mercury
        },
        // Mercury Blue variations
        'mercury-blue': {
          50: "#E6F0FF",
          100: "#CCE1FF",
          200: "#99C3FF",
          300: "#66A5FF",
          400: "#3387FF",
          500: "#2E5BFF", // Mercury Blue (2925 C)
          600: "#1E3A8A", // Deep Mercury (7461 C)
          700: "#1A2E6B",
          800: "#16234C",
          900: "#11182D",
        },
        // Mercury Gold variations
        'mercury-gold': {
          50: "#FFF9E6",
          100: "#FFF3CC",
          200: "#FFE799",
          300: "#FFDB66",
          400: "#FFCF33",
          500: "#FFD60A", // Mercury Gold (116 C)
          600: "#E6C100",
          700: "#CCAD00",
          800: "#B39900",
          900: "#998500",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px hsl(var(--mercury-blue) / 0.5)" },
          "50%": { boxShadow: "0 0 20px hsl(var(--mercury-blue) / 0.8)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "fade-in-scale": "fade-in-scale 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "slide-in": "slide-in 0.6s ease-out",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 