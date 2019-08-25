
function calcular() {

    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;

    var resultado;

    resultado = valor2 / (valor1 * valor1);
    document.getElementById("resultado").innerHTML = resultado;

}
