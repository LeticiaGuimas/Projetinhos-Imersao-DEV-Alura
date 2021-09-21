var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var Resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    Resultado.innerHTML = "CERTA A RESPOSTA!!!!!";
  } else if (chute > 10 || chute < 0) {
    Resultado.innerHTML = "Digite um número de 0 a 10";
  } else {
    Resultado.innerHTML =
      "ERROU, o número escolhido era " + numeroSecreto + " TENTE OUTRA VEZ!";
  }
}