const items = document.querySelectorAll(".titulos");

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("titulos--open");
  });
});
