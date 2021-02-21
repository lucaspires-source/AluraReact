import React, { useState,useContext } from "react";
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro'
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

const DadosPessoais = ({ onSubmit }) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [novidades, setNovidades] = useState(true);
  const [promocoes, setPromocoes] = useState(false);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });
  
  
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
          onSubmit({ nome, sobrenome, cpf, novidades, promocoes });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={sobrenome}
        onChange={(e) => {
          setSobrenome(e.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={cpf}
        onChange={(e) => {
          setCpf(e.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        name="cpf"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />

      <FormControlLabel
        label="Promoções"
        checked={promocoes}
        control={
          <Switch
            onChange={(e) => {
              setPromocoes(e.target.checked);
            }}
            name="promocoes"
            defaultChecked={promocoes}
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        checked={novidades}
        control={
          <Switch
            onChange={(e) => {
              setNovidades(e.target.checked);
            }}
            name="novidades"
            defaultChecked={novidades}
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
};

export default DadosPessoais;
