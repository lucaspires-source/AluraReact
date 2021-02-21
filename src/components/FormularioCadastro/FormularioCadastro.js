import React, { useState,useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import {Typography,Stepper,Step,StepLabel} from '@material-ui/core'

const FormularioCadastro = ({ onSubmit, validaCPF }) => {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  useEffect(()=>{
    if(etapaAtual === (formularios.length -1)){
      onSubmit(dadosColetados)
    }
  })
  const coletarDados = (dados) => {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  };
  const proximo = (dados) => {
    setEtapaAtual(etapaAtual + 1);
  };
  const anterior = () => {
    setEtapaAtual(etapaAtual - 1);
  };
  const formularios = [
    <DadosUsuario onSubmit={coletarDados} />,
    <DadosPessoais onSubmit={coletarDados} validaCPF={validaCPF} />,
    <DadosEntrega onSubmit={coletarDados} />,
    <Typography variant="h5">Obrigado pelo cadastro!</Typography>
  ];

  return <>
  <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Dados Pessoais</StepLabel></Step>
      <Step><StepLabel>Entegra</StepLabel></Step>
      <Step><StepLabel>Finalização</StepLabel></Step>
  </Stepper>
  {formularios[etapaAtual]}
  </>;
};

export default FormularioCadastro;
