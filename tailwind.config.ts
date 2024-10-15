import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        gray: {
          "50": "#4B4B4B",
          "100": "#696969",
          "200": "#7D7D7D",
          "300": "#A0A0A0",
          "400": "#B5B5B5",
          "500": "#282424",
          "600": "#DCDCDC",
          "700": "#EAEAEA",
          "800": "#1A1C1C",
        },
        red: {
          "50": "#F8D1D5",
          "100": "#F3B3B9",
          "200": "#E8959D",
          "300": "#DC143C",
          "400": "#C65A65",
          "500": "#B53D49",
          "600": "#A22431",
          "700": "#8E1C28",
          "800": "#7A141F",
        },
        lavender: {
          "500": "#E6C8FA",
        },
        pink: {
          "50": "#FFF5FF",
          "100": "#FFE4FF",
          "200": "#FFD3FF",
          "300": "#FFC2FF",
          "400": "#CCAACC",
          "500": "#FFD5FF",
          "600": "#997F99",
          "700": "#665566",
          "800": "#332A33",
        },
        sage: {
          "50": "#E8F1ED",
          "100": "#D1E3DB",
          "200": "#BBC5C9",
          "300": "#A4D6B6",
          "400": "#6F9088",
          "500": "#8BB8A8",
          "600": "#556C68",
          "700": "#3A4847",
          "800": "#1F2423",
        },
      },
      backgroundImage: {
        "default-gradient": "linear-gradient(135deg, #DC143C, #FFFFFF)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        shine: {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        "shiny-text": {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shiny-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shiny-width)) 0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shine: "shine var(--duration) infinite linear",
        "shiny-text": "shiny-text 8s infinite",
      },
    },
    fontFamily: {
      playfair: ["var(--playfair)", ...fontFamily.serif],
      poppins: ["var(--poppins)", ...fontFamily.serif],
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
