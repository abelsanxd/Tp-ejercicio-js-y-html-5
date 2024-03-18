let cronometro;
let segundos = 0;
let minutos = 0;
let horas = 0;

function iniciarCronometro() {
  cronometro = setInterval(function() {
    segundos++;
    if (segundos === 60) {
      minutos++;
      segundos = 0;
    }
    if (minutos === 60) {
      horas++;
      minutos = 0;
    }
    actualizarCronometro();
  }, 1000);
}

function pausarCronometro() {
  clearInterval(cronometro);
}

function resetearCronometro() {
  clearInterval(cronometro);
  segundos = 0;
  minutos = 0;
  horas = 0;
  actualizarCronometro();
}

function actualizarCronometro() {
  const segundosFormateados = segundos < 10 ? "0" + segundos : segundos;
  const minutosFormateados = minutos < 10 ? "0" + minutos : minutos;
  const horasFormateadas = horas < 10 ? "0" + horas : horas;

  document.getElementById("cronometro").textContent = `${horasFormateadas}:${minutosFormateados}:${segundosFormateados}`;
}

document.getElementById("btnIniciar").addEventListener("click", function() {
  iniciarCronometro();
  document.getElementById("btnIniciar").disabled = true;
  document.getElementById("btnPausar").disabled = false;
});

document.getElementById("btnPausar").addEventListener("click", function() {
  pausarCronometro();
  document.getElementById("btnIniciar").disabled = false;
  document.getElementById("btnPausar").disabled = true;
});

document.getElementById("btnReset").addEventListener("click", function() {
  resetearCronometro();
  document.getElementById("btnIniciar").disabled = false;
  document.getElementById("btnPausar").disabled = true;
});
