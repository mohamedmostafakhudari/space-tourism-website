/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "hsl(230,35%,7%)",
      grey: "hsl(231,77%,90%)",
      white: "hsl(0,0%,100%)",
    },
    extend: {
      fontFamily: {
        headerPrimary: ["Bellefair", "serif"],
        headerSecondary: ["Barlow Condensed", "sans-serif"],
      },
      backgroundImage: {
        home: "url('/src/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('src/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('src/assets/home/background-home-desktop.jpg')",
        crew: "url('src/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('src/assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('src/assets/crew/background-crew-desktop.jpg')",
        destination:
          "url('src/assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('src/assets/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('src/assets/destination/background-destination-desktop.jpg')",
        technology:
          "url('src/assets/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('src/assets/technology/background-technology-tablet.jpg')",
        "technology-desktop":
          "url('src/assets/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
