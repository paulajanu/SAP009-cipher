import cipher from './cipher.js';

console.log(cipher);

const botaoResultado = document.getElementById("botaoCodificar");

botaoResultado.addEventListener("click", acaoDoBotao);

function acaoDoBotao(){
    console.log("função funcionando");
}