function gerarCPF() {
  function verificarNum() {
    let cpf = "";
    for (let i = 0; i < 9; i++) {
      cpf += Math.floor(Math.random() * 10);
    }
    return cpf;
  }

  function multiplicar(numero) {
    let digitos = numero.toString().split("").map(Number);
    let pesos = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    let resultado = 0;

    for (let i = 0; i < digitos.length; i++) {
      resultado += digitos[i] * pesos[i];
    }

    resultado = 11 - (resultado % 11);
    if (resultado > 9) {
      resultado = 0;
    }

    return resultado;
  }

  let cpf = verificarNum();

  const primeiroDigitoVerificador = multiplicar(cpf);
  const segundoDigitoVerificador = multiplicar(cpf);

  cpf += primeiroDigitoVerificador;
  cpf += segundoDigitoVerificador;

  cpf = cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9);
  cpf = cpf + "-" + primeiroDigitoVerificador + segundoDigitoVerificador;

  document.getElementById("cpf-display").innerText = cpf;
}
