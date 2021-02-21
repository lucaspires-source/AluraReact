import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
const DadosEntrega = ({onSubmit}) => {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({cep,endereco,numero,cidade,estado});
      }}
    >
      <TextField
        onChange={(e) => {
          setCep(e.target.value);
        }}
        value={cep}
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        onChange={(e) => {
          setEndereco(e.target.value);
        }}
        value={endereco}
        id="endereço"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        onChange={(e) => {
          setNumero(e.target.value);
        }}
        value={numero}
        id="numero"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        onChange={(e) => {
          setEstado(e.target.value);
        }}
        value={estado}
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        onChange={(e) => {
          setCidade(e.target.value);
        }}
        value={cidade}
        id="Cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
};

export default DadosEntrega;
