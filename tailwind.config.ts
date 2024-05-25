import type { Config } from "tailwindcss"

const defaultTheme = require("tailwindcss/defaultTheme");

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
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
        mono: ["var(--font-jetbrains-mono)"],
      },
      colors: {
        // ! COLOR VARIABLES FROM SHADCN/UI
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
        // ! CUSTOM COLOR VARIABLES BELOW
        // ? Primitive Variables
        p: {
          // ? Brand Colors
          brand: {
            teal: "var(--cb-teal)",
            gray: "var(--cb-gray)",
          },
          // ? Neutral Colors
          neutral: {
            black: "var(--cn-black)",
            white: "var(--cn-white)",
            lightest: "var(--cn-lightest)",
            lighter: "var(--cn-lighter)",
            light: "var(--cn-light)",
            neutral: "var(--cn-neutral)",
            dark: "var(--cn-dark)",
            darker: "var(--cn-darker)",
            darkest: "var(--cn-darkest)",
          },
          // ? System Colors
          system: {
            success: {
              DEFAULT: "var(--cs-green)",
              light: "var(--cs-green-light)",
            },
            error: {
              DEFAULT: "var(--cs-red)",
              light: "var(--cs-red-light)",
            },
          },
        },
        // ? Semantic Variables
        s: {
          bg: {
            primary: "var(--cn-darkest)",
            secondary: "var(--cn-dark)",
            tertiary: "var(--cn-light)",
            alternate: "var(--cn-lightest)",
            success: "var(--cs-green-light)",
            error: "var(--cs-red-light)",
          },
          brd: {
            primary: "var(--cn-white)",
            secondary: "var(--cn-dark)",
            tertiary: "var(--cn-light)",
            alternate: "var(--cn-black)",
            success: "var(--cs-green)",
            error: "var(--cs-red)",
          },
          tx: {
            primary: "var(--cn-white)",
            secondary: "var(--cn-lighter)",
            alternate: "var(--cn-black)",
            success: "var(--cs-green)",
            error: "var(--cs-red)",
          },
          a: {
            primary: "var(--cb-teal)",
            secondary: "var(--cn-light)",
            alternate: "var(--cn-darker)",
          },
        },
        // ? Linear Gradient Variables
        lg: {
          base: {
            secondary: "var(--ln-secondary)",
          },
          primary: "var(--ln-teal)",
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
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "meteor-effect": "meteor 5s linear infinite",
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    "prettier-plugin-tailwindcss",
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    addVariablesForColors,
  ],
} satisfies Config

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config