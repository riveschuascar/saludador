const form = document.querySelector("#pedir-nombre");
const div = document.querySelector("#saludo");
const input = document.querySelector("#name");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  const nombre = input.value.trim();
  let saludoHora;
  if (horaActual <= 12) {
    saludoHora = "Buenos dias";
  }
  else if (horaActual <= 18) {
    saludoHora = "Buenas tardes";
  }
  else {
    saludoHora = "Buenas noches";
  }

  let saludar = saludoHora + " " + nombre + "!";
  div.textContent = saludar;
  console.log(saludar_nombre);
});
