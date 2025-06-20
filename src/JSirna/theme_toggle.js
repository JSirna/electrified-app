// const theme_input = document.getElementById("theme");
const dark_color_scheme = window.matchMedia("(prefers-color-scheme: dark)");
const toggleOn = document.getElementById("toggle-on");
const toggleOff = document.getElementById("toggle-off");
let isDarkMode = dark_color_scheme.matches;


window.onload = function (event) {
  if (dark_color_scheme.matches) {
    console.log("Dark mode is enabled");
    // toggleOn.style.display = "block"; // style isn't a thing
    // toggleOff.style.display = "none";
  } else {
    console.log("Light mode is enabled");
    // toggleOn.style.display = "none";
    // toggleOff.style.display = "block";
  }
};

const toggleTheme = () => {
    console.log("Toggling theme");
    console.log("isDarkMode: ", isDarkMode);
    if (isDarkMode) {

    }
}