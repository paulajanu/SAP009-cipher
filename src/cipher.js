const cipher = {
  encode: function (chave, txt) {
    
    let txtCodificado = ""; 
    txt = txt.toUpperCase(); 
    
    for (let i = 0; i < txt.length; i++) { 
      const posicao = txt.charCodeAt(i); 
      
      if (posicao >= 65 && posicao <= 90) { 
        txtCodificado += String.fromCharCode(((posicao - 65 + chave) % 26) + 65);
      } else if (posicao >= 32 && posicao <= 64){ 
        txtCodificado += txt.charAt(i);
      } 
    }
    return txtCodificado;
  },

  decode: function (chave, txt) {
    
    let txtDescodificado = "";
    txt = txt.toUpperCase();
    
    for (let i = 0; i < txt.length; i++) {
      const posicao = txt.charCodeAt(i);
      
      if (posicao >= 65 && posicao <= 90) {
        txtDescodificado += String.fromCharCode (((posicao + 65 - chave) % 26) + 65); 
      } else if (posicao >= 32 && posicao <= 64) {
        txtDescodificado += txt.charAt(i);
      }
    } 
    return txtDescodificado;
  }
};

export default cipher;
