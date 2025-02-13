const form = document.querySelector("#pedir-nombre");
const div = document.querySelector("#saludo");
const input = document.querySelector("#name");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const nombre = input.value.trim();

  let saludar_nombre = "Hola " + nombre + "!";
  div.textContent = saludar_nombre;
  console.log(saludar_nombre);
});
