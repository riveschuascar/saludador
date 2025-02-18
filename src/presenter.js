const form = document.querySelector("#pedir-nombre");
const greet = document.querySelector("#saludo");
const genderSelect = document.querySelector("#genero")
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#edad");

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
    return ["joven", "Sr."];
  }
  else if (gender === "Femenino") {
    return ["Srta.", "Sra."];
  }
  else {
    return [];
  }
}

function getGenderByAge(gender, age) {
  if (gender == []) {
    return ""
  }
  if (age >= 30) {
    return gender[1];
  }
  else {
    return gender[0];
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = nameInput.value.trim();
  hora = getCurrTime();
  genero = getGenderByAge(getGender(genderSelect.value), ageInput.value)
  let saludar = hora + " " + genero + " " + nombre + "!";
  greet.textContent = saludar;
  console.log(saludar_nombre);
});
