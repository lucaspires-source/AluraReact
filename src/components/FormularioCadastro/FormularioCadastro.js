import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Typography } from "@material-ui/core";
const FormularioCadastro = ({ onSubmit, validaCPF }) => {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const proximo = () => {
    setEtapaAtual(etapaAtual + 1);
  };
  const anterior = () => {
    setEtapaAtual(etapaAtual - 1);
  };
  const formularios = [
    <DadosUsuario onSubmit={proximo} />,
    <DadosPessoais onSubmit={proximo} validaCPF={validaCPF} />,
    <DadosEntrega onSubmit={onSubmit} />
  ];


  return (
    <>
      {formularios[etapaAtual]}
    </>
  )
}

export default FormularioCadastro;
