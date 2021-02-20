import React, {useState} from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";


const  FormularioCadastro = ({onSubmit}) => {
    const [nome,setNome] = useState('');
    const [sobrenome,setSobrenome] = useState('')
    const [cpf,setCpf] = useState('')
    const [novidades,setNovidades] = useState(false)
    const [promocoes,setPromocoes] = useState(false)
  return (
    <form onSubmit={(e) =>{
      e.preventDefault()
      onSubmit({nome,sobrenome,cpf,novidades,promocoes})
      
    }}>
      <TextField
        value={nome}
        onChange={(e) =>{
          let tempNome = e.target.value;
          if(tempNome.length >1){
            tempNome.substr(0,3)
          }
          setNome(tempNome);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
      
      value={sobrenome}
      onChange={(e) =>{
        let tempSobrenome = e.target.value;
        if(tempSobrenome.length >1){
          tempSobrenome.substr(0,3)
        }
        setSobrenome(tempSobrenome);
      }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
            value={cpf}
            onChange={(e) =>{
              let tempCpf = e.target.value;
              if(tempCpf.length <= 10){
                tempCpf.substr(0,11)
              }
              setCpf(tempCpf);
            }}
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />


      <FormControlLabel
        label="Promoções"
        checked={promocoes}
        control={<Switch onChange={(e) =>{
          setPromocoes(e.target.checked)
        }} name="promocoes" defaultChecked={promocoes} color="primary" />}
      />

      <FormControlLabel
        label="Novidades"
        checked={novidades}
        control={<Switch  onChange={(e) =>{
          setNovidades(e.target.checked)
        }} name="novidades" defaultChecked={novidades} color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary" >
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
