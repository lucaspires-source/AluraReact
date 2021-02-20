
import React from 'react'
import {Container, Typography } from "@material-ui/core"
import 'fontsource-roboto';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro.js';
const App = () => {
    return (
    <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <FormularioCadastro />
      </Container>
    )
}

export default App
