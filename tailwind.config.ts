import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0F0F0F",
          surface: "#1A1A1A",
          muted: "#A7A7A7",
          line: "#2A2A2A",
          red: "#EF4444",
          wa: "#25D366",
        },
      },
      borderRadius: {
        card: "16px",
        button: "20px",
      },
      boxShadow: {
        card: "0 10px 40px rgba(0, 0, 0, 0.5)",
        soft: "0 4px 20px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;

