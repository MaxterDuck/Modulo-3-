const button = document.querySelector(".btn-secret");
const message = document.querySelector(".message");
const target = document.querySelector(".tarjet");

button.addEventListener("click", () => {
  message.textContent = "🎉 ¡Has descubierto el secreto! 🎉";
  target.style.backgroundColor = "#e0ffe0";
});