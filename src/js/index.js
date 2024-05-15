let toggleThemeIcon = document.querySelector(".toggle");

let theme = localStorage.getItem("theme") || "light";
document.documentElement.classList.add(theme);

if (theme === "dark") toggleThemeIcon.setAttribute("checked", true);

toggleThemeIcon.addEventListener("change", function () {
  if (theme == "light") {
    theme = "dark";
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  } else {
    theme = "light";
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  }
});
