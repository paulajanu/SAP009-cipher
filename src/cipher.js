const CODIGO_DE_ASC_DA_LETRA_A = "A".charCodeAt(0);
const CODIGO_DE_ASC_DA_LETRA_Z = "Z".charCodeAt(0);
const TAMANHO_DO_ALFABETO = 26;

const cipher = {
  encode: function (chave, txt) {
    if (typeof txt !== "string" || typeof chave !== "number" || txt === "" || chave === 0) {
      throw new TypeError ("Mensagem e/ou chave secreta inválida");
    }

    let txtCodificado = ""; 
    txt = txt.toUpperCase(); 
    
    for (let i = 0; i < txt.length; i++) { 
      const posicao = txt.charCodeAt(i); 

      if (posicao >= CODIGO_DE_ASC_DA_LETRA_A && posicao <= CODIGO_DE_ASC_DA_LETRA_Z) { 
        txtCodificado += String.fromCharCode(((posicao - CODIGO_DE_ASC_DA_LETRA_A + chave) % TAMANHO_DO_ALFABETO) + CODIGO_DE_ASC_DA_LETRA_A);
      } else {
        txtCodificado += txt.charAt(i);
      }       
    }
    return txtCodificado;
  },

  decode: function (chave, txt) {
    if (typeof txt !== "string" || typeof chave !== "number" || txt === "" || chave === 0) {
      throw new TypeError ("Mensagem e/ou chave secreta inválida");
    }

    let txtDescodificado = "";
    txt = txt.toUpperCase();
    
    for (let i = 0; i < txt.length; i++) {
      const posicao = txt.charCodeAt(i);
      
      if (posicao >= CODIGO_DE_ASC_DA_LETRA_A && posicao <= CODIGO_DE_ASC_DA_LETRA_Z) {
        txtDescodificado += String.fromCharCode (((posicao + CODIGO_DE_ASC_DA_LETRA_A - chave) % TAMANHO_DO_ALFABETO) + CODIGO_DE_ASC_DA_LETRA_A); 
      } else {
        txtDescodificado += txt.charAt(i)
      }
    } 
    return txtDescodificado;
  }
};

export default cipher;
