import React from "react";
import { TextField, Button } from "@material-ui/core";
const DadosEntrega = () => {
  return (
    <form>
      <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        id="endereço"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        id="numero"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
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
