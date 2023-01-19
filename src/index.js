import cipher from './cipher.js';

const botaoResultadoCod = document.getElementById("botaoCodificar"); 
const botaoResultadoDescod = document.getElementById("botaoDescodificar"); 
const campoTxtEntrada = document.getElementById("entradaTexto");
const campoTxtSaida = document.getElementById("saidaTexto");  
const deslocamento = document.getElementById("chaveSecreta"); 

botaoResultadoCod.addEventListener("click", acaoBotaoCod);

function acaoBotaoCod(){
    campoTxtSaida.value = cipher.encode(parseInt(deslocamento.value), campoTxtEntrada.value); 
}

botaoResultadoDescod.addEventListener("click", acaoBotaoDescod);

function acaoBotaoDescod(){
    campoTxtSaida.value = cipher.decode(parseInt(deslocamento.value), campoTxtEntrada.value);
}