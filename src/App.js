import React from "react";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import { validaCPF, validaSenha } from './models/cadastro'
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.js";
import ValidadacoesCadastro from "./contexts/ValidacoesCadastro";

const App = () => {
  const aoEnviarFormulario = (dados) => {
    console.log(dados);
  };

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <ValidadacoesCadastro.Provider value={{cpf:validaCPF, senha:validaSenha}}>
        <FormularioCadastro onSubmit={aoEnviarFormulario} />
      </ValidadacoesCadastro.Provider>

    </Container>
  );
};

export default App;
