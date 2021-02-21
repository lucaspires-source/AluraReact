import React from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
const FormularioCadastro = ({ onSubmit, validaCPF }) => {

  return (
    <>
    <DadosPessoais onSubmit={onSubmit} validaCPF={validaCPF}/>
    <DadosUsuario/>
    <DadosEntrega/>
    </>
  )
}

export default FormularioCadastro;
