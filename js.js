let numrandom = Math.floor(Math.random() * 100) + 1;
const resultado = document.querySelector(".resultado");
const resAnterior = document.querySelector(".previa");
const ayuda = document.querySelector(".pista");
const btn = document.querySelector(".btnEnviar");
const num = document.querySelector(".numero");

let cont = 1;
let resetButton;

function juega() {
  let numUsuario = Number(num.value);
  if (cont === 1) {
    resAnterior.textContent = "Numero Anterior: ";
  }
  resAnterior.textContent += numUsuario + "- ";

  if (numUsuario === numrandom) {
    resultado.textContent = "¡Felicidades! ¡Lo adivinaste!";
    resultado.style.backgroundColor = "green";
    ayuda.textContent = "";
    finJuego();
  } else if (cont === 10) {
    resultado.textContent = "¡¡¡Fin del juego!!!";
    finJuego();
  } else {
    resultado.textContent = "¡Incorrecto!";
    resultado.style.backgroundColor = "red";
    if (numUsuario < numrandom) {
      ayuda.textContent = "¡El numero es mas grande!";
    } else if (numUsuario > numrandom) {
      ayuda.textContent = "¡El numero es mas pequeño!";
    }
  }
  cont++;
  num.value = "";
  num.focus();
}
btn.addEventListener("click", juega);

function finJuego() {
  num.disabled = true;
  btn.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Volver a jugar";
  const formulario = document.querySelector("form");
  formulario.appendChild(resetButton);
  resetButton.addEventListener("click", resetjuego);
}

function resetjuego() {
  cont = 1;
  const mensajes = document.querySelectoral(".mensaje p");
  for (let i = 0; i < mensajes.length; i++) {
    mensajes[i].textContent = "";
  }
  resetButton.parentNode.removeChild(resetButton);

  num.disabled = false;
  btn.disabled = false;
  num.value = "";
  num.focus();

  resultado.style.backgroundColor = "white";
  numrandom = Math.floor(Math.random() * 100) + 1;
}
