const body = document.body;
const themeButton = document.getElementById("alternar");

const themePreference = localStorage.getItem("themePreference");


if (themePreference) {
  body.classList.add(themePreference);
}

themeButton.addEventListener("click", () => {
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    localStorage.setItem("themePreference", ""); 
  } else {
    body.classList.add("dark-theme");
    localStorage.setItem("themePreference", "dark-theme"); 
  }
});
