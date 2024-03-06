const handler = document.querySelector("div#switch");
const button = document.querySelector("div#switch button");
const html = document.querySelector("html");

let theme = html.getAttribute("class");

handler.addEventListener("click", () => {
  if (html.classList.contains("light")) {
    html.className = "dark";
  } 
  else {
    html.className = "light";
  }
});
