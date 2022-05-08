module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "navy": "#070658",
        "cetacean": "#080738",
        "dark-brown": "#664322",
        "light-navy":"#1A1A8F",
        "dirty-amber": "#DBAE00",
        "prussian-blue": "#063553",
        "gold": "#A57403",
        "bronze": "#8f7143",
        "dark-bronze": "#8f7143"
      },
      backgroundImage: {
        "hero-bg": "url('../public/kili-camp-1-indigo.jpg')",
        "hero-vert": "url('../public/kili-camp-1-indigo-vert.jpg')",
      }
    },
  },
  plugins: [],
};
