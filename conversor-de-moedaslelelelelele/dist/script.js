function Converter() {
  var valorElemento = document.getElementById("valorEmDolar");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * 5;
  var valorConvertido = document.getElementById("valorConvertidoEmDolar");
  var valorTextoConvertido = "O valor é R$  " + valorEmReal;
  valorConvertido.innerHTML = valorTextoConvertido;
}

function Converter2() {
  var valorElemento2 = document.getElementById("valorEmLibras");
  var valor2 = valorElemento2.value;
  var valorEmLibrasNumerico = parseFloat(valor2);
  var valorEmReal2 = valorEmLibrasNumerico * 7;
  var valorConvertido2 = document.getElementById("valorConvertidoEmLibras");
  var valorTextoConvertido2 = "O valor é R$  " + valorEmReal2;
  valorConvertido2.innerHTML = valorTextoConvertido2;
}

function Converter3() {
  var valorElemento3 = document.getElementById("valorEmEuro");
  var valor3 = valorElemento3.value;
  var valorEmEuroNumerico = parseFloat(valor3);
  var valorEmReal3 = valorEmEuroNumerico * 6;
  var valorConvertido3 = document.getElementById("valorConvertidoEmEuro");
  var valorTextoConvertido3 = "O valor é R$  " + valorEmReal3;
  valorConvertido3.innerHTML = valorTextoConvertido3;
}