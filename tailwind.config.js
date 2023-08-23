/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      backgroundImage:{
        mobile: "url('assets/mobile.png')",
        desktop: "url('assets/desktop.png')",
        menubar: "url('assets/menubar.png')",
      },
      colors:{
        primary: "#D6001C",
        secondary:"#333"
      }
    },
  },
  plugins: [],
};
