function expandir(elemento) {
  const cajas = document.querySelectorAll(".box");

  cajas.forEach((caja) => {
    if (caja !== elemento && caja.classList.contains("expanded")) {
      caja.classList.remove("expanded");
    }
  });

  elemento.classList.toggle("expanded");
}
