import { Button, TextField } from "@material-ui/core";
import React, { useState,useContext } from "react";
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro'
const DadosUsuario = ({ onSubmit}) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });

  const validacoes = useContext(ValidacoesCadastro)
    const validarCampos = (e) =>{
    const {name,value} = e.target
    const novoEstado ={...erros}
    novoEstado[name] = validacoes[name](value)
    setErros(novoEstado)
  }
  const possoEnviar = (e) =>{
    for(let campo in erros){
      if(!erros[campo].valido){
        return false
      }
    }
    return true;
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if(possoEnviar()){
          onSubmit({email,senha});
        }

      }}
    >
      <TextField
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={senha}
        onChange={(e) => {
          setSenha(e.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        name="senha"
        id="senha"
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">
      Próximo
      </Button>
    </form>
  );
};

export default DadosUsuario;
