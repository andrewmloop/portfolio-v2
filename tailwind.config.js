module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "navy": "#070663",
        "cetacean": "#080738",
        "dark-brown": "#664322",
        "light-navy":"#1A1A8F",
        "dirty-amber": "#DBAE00",
        "prussian-blue": "#063553",
        "gold": "#A57403",
        "bronze": "#8f7143",
        "dark-bronze": "#8f7143"
      },
      keyframes: {
        spinAndGrow: {
          from: {
            transform: "rotate(0deg) scale(1)"
          },
          to: {
            transform: "rotate(360deg) scale(1.05)"
          }
        }
      },
      animation: {
        spinAndGrow: "spinAndGrow 1s ease-in-out"
      }
    },
  },
  plugins: [],
};
