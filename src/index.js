import cipher from './cipher.js';

const botaoResultadoCod = document.getElementById("botao-codificar"); 
const botaoResultadoDescod = document.getElementById("botao-descodificar"); 
const campoTxtEntrada = document.getElementById("entrada-texto");
const campoTxtSaida = document.getElementById("saida-texto");  
const deslocamento = document.getElementById("chave-secreta"); 

botaoResultadoCod.addEventListener("click", acaoBotaoCod);

function acaoBotaoCod(){
  campoTxtSaida.value = cipher.encode(parseInt(deslocamento.value), campoTxtEntrada.value); 
}

botaoResultadoDescod.addEventListener("click", acaoBotaoDescod);

function acaoBotaoDescod(){
  campoTxtSaida.value = cipher.decode(parseInt(deslocamento.value), campoTxtEntrada.value);
}