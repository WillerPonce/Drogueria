const calcularDigitos = () => {
  const decenas = parseFloat(document.getElementById("decenas").value);
  const unidades = parseFloat(document.getElementById("unidades").value);
  const mensajeParrafo = document.getElementById("mensajeParrafo");
  const mensajeParrafo2 = document.getElementById("mensajeParrafo2");
  const contadorParrafo = document.getElementById("contador");


  if (decenas >= 12) {
    mensajeParrafo.textContent =
      "El sistema no permite el ingreso de números mayores a 12 para las decenas";
  } else if (unidades >= 7) {
    mensajeParrafo2.textContent =
      "El sistema no permite el ingreso de números mayores a 7 para las unidades";
  } else {
    // Esta es la condicion solo continua cuando no hay errores
    contar(0, 0, decenas, unidades, contadorParrafo);
  }
};

function contar(varDecenas, varUnidades, decenas, unidades, contadorParrafo) {
  contadorParrafo.textContent = `Contador en base 7: ${varDecenas}:${varUnidades}`;
  varUnidades++;

  if (varUnidades >= 7) {
    varUnidades = 0;
    varDecenas++;
  }


  // Este if es para validar la variable si cumple esta funcion se seguira ejecutando hasta que la varUunidades sea <= a unidades
  if ((varDecenas < decenas || varUnidades < unidades) || (varDecenas === decenas && varUnidades <= unidades)) {
    setTimeout(function () {
      contar(varDecenas, varUnidades, decenas, unidades, contadorParrafo);
    }, 1000);
  } else {
    contadorParrafo.textContent += " (Final)";
  }
}

const clearInputs = () => {
  document.getElementById("decenas").value = "";
  document.getElementById("unidades").value = "";
  document.getElementById("mensajeParrafo").textContent = "";
  document.getElementById("mensajeParrafo2").textContent = "";
  document.getElementById("contador").textContent = "Contador en base 7 = 0:0";
};
