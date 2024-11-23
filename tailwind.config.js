/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        offblack: "#181818",
        white: "#ffffff",
        offwhite: "#f2f2f2",
        grey: "#525866",
        lightYellow: "#FFE9E0",
      },
      screens: {
        fd: [{ max: "320px" }],
        lsm: [{ max: "576px" }],
        lmd: [{ max: "768px" }],
        llg: [{ max: "992px" }],
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1440px",
      },
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
        Abril: ["Abril Fatface", "serif"],
        Helvetica: ["'Helvetica Neue'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
