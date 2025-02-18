const form = document.querySelector("#pedir-nombre");
const greet = document.querySelector("#saludo");
const genderSelect = document.querySelector("#genero");
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#edad");
const languageSelect = document.querySelector("#idioma"); // Nuevo select para idioma

const translations = {
  es: {
    greetings: ["Buenos días", "Buenas tardes", "Buenas noches"],
    genderTitles: {
      Masculino: ["joven", "Sr."],
      Femenino: ["Srta.", "Sra."],
      Otro: [""]
    }
  },
  en: {
    greetings: ["Good morning", "Good afternoon", "Good evening"],
    genderTitles: {
      Masculino: ["young man", "Mr."],
      Femenino: ["Miss", "Mrs."],
      Otro: [""]
    }
  }
};

function getCurrTime(lang) {
  let horaActual = new Date().getHours();
  if (horaActual <= 12) return translations[lang].greetings[0];
  else if (horaActual <= 18) return translations[lang].greetings[1];
  else return translations[lang].greetings[2];
}

function getGender(gender, lang) {
  return translations[lang].genderTitles[gender] || [""];
}

function getGenderByAge(genderArray, age) {
  return age >= 30 ? genderArray[1] : genderArray[0];
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const nombre = nameInput.value.trim();
  const idioma = languageSelect.value;
  const generoArray = getGender(genderSelect.value, idioma);
  const genero = getGenderByAge(generoArray, ageInput.value);
  const hora = getCurrTime(idioma);

  let saludoFinal = `${hora} ${genero} ${nombre}!`;
  greet.textContent = saludoFinal;
  console.log(saludoFinal);
});
