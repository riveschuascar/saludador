const form = document.querySelector("#pedir-nombre");
const div = document.querySelector("#saludo");
const select = document.querySelector("#genero")
const input = document.querySelector("#name");

function getCurrTime() {
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
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
  return saludoHora;
}

function getGender(gender) {
  if (gender === "Masculino") {
    return "Sr.";
  }
  else if (gender === "Femenino") {
    return "Sra.";
  }
  else {
    return "";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = input.value.trim();
  hora = getCurrTime();
  genero = getGender(select.value)
  let saludar = hora + " " + genero + " " + nombre + "!";
  div.textContent = saludar;
  console.log(saludar_nombre);
});
