/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cyber-black": "#000000",
        "cyber-dark": "#0a0a0a",
        "cyber-green": "#00ff41",
        "cyber-green-bright": "#39ff14",
        "cyber-magenta": "#ff006e",
        "cyber-magenta-bright": "#ff0080",
        "cyber-white": "#ffffff",
        "cyber-gray": "#f0f0f0",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        brutalist: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        glitch: "glitch 0.3s ease-in-out",
        "rgb-split": "rgb-split 0.2s ease-in-out",
        scanlines: "scanlines 2s linear infinite",
        "terminal-cursor": "terminal-cursor 1s infinite",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "10%": { transform: "translate(-2px, -2px)" },
          "20%": { transform: "translate(2px, 2px)" },
          "30%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(2px, -2px)" },
          "50%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "70%": { transform: "translate(-2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "90%": { transform: "translate(-2px, -2px)" },
        },
        "rgb-split": {
          "0%, 100%": {
            "text-shadow": "0 0 0 #ff006e, 0 0 0 #00ff41",
            transform: "translate(0)",
          },
          "50%": {
            "text-shadow": "-2px 0 0 #ff006e, 2px 0 0 #00ff41",
            transform: "translate(1px, 0)",
          },
        },
        scanlines: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "terminal-cursor": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
