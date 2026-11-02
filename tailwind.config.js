/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A1128",
        surface: "#121E3B",
        "surface-hover": "#1A2A52",
        accent: "#00E5FF",
        "accent-hover": "#00B8D4",
        copper: "#D48356",
        "copper-light": "#E8A278",
        muted: "#94A3B8"
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        subtle: "0 4px 20px -4px rgba(0,0,0,0.5)",
        glow: "0 0 30px -5px rgba(0,229,255,0.25)",
        "glow-copper": "0 0 30px -5px rgba(212,131,86,0.25)"
      }
    },
  },
  plugins: [],
}
