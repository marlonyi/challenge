const inputText = document.getElementById("inputText");
const encriptarBtn = document.getElementById("encriptarBtn");
const desencriptarBtn = document.getElementById("desencriptarBtn");
const outputMessage = document.getElementById("outputMessage");
const illustration = document.querySelector(".illustration");

function encriptar(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function desencriptar(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function actualizarSalida(mensaje) {
  outputMessage.textContent = mensaje;
  illustration.style.display = mensaje ? "none" : "block";
}

encriptarBtn.addEventListener("click", () => {
  const texto = inputText.value.toLowerCase();
  const textoEncriptado = encriptar(texto);
  actualizarSalida(textoEncriptado);
});

desencriptarBtn.addEventListener("click", () => {
  const texto = inputText.value.toLowerCase();
  const textoDesencriptado = desencriptar(texto);
  actualizarSalida(textoDesencriptado);
});
