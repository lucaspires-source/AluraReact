import React from "react";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.js";
const App = () => {
  const aoEnviarFormulario = (dados) => {
    console.log(dados);
  };

  const validaCPF = (cpf) => {
    if (cpf.length !== 11) {
      return { valido: false, texto: "CPF Inválido" };
    } else {
      return { valido: true, texto: "" };
    }
  };
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro onSubmit={aoEnviarFormulario} validaCPF={validaCPF}/>
    </Container>
  );
};

export default App;
