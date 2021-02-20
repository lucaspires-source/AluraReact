import React, {useState} from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";


const  FormularioCadastro = () => {
    const [nome,setNome] = useState();
  
  return (
    <form onSubmit={(e) =>{
      e.preventDefault()
      console.log(e.target.value)
    }}>
      <TextField
        onChange={(e) =>{

          nome = e.target.value;
          if(nome.length>1){
            nome = nome.substr(0,3)
          }
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />


      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked color="primary" />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch name="promocoes" defaultChecked color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary" >
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
