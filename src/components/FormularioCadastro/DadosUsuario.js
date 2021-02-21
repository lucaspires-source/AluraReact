import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const DadosUsuario = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({email,senha});
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
        onChange={(e) => {
          setSenha(e.target.value);
        }}
        value={senha}
        id="senha"
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
};

export default DadosUsuario;
