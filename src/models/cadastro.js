const validaCPF = (cpf) => {
    if (cpf.length !== 11) {
      return { valido: false, texto: "CPF Inválido" };
    } else {
      return { valido: true, texto: "" };
    }
  };

  const validaSenha= (senha) => {
    if (senha.length < 4|| senha.length > 72  ){
      return { valido: false, texto: "Senha Inválida" };
    } else {
      return { valido: true, texto: "" };
    }
  };


  export {validaCPF,validaSenha}