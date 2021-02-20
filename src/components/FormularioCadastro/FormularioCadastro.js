import React, {useState} from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";


const  FormularioCadastro = ({onSubmit}) => {
    const [nome,setNome] = useState('');
    const [sobrenome,setSobrenome] = useState('')
    const [cpf,setCpf] = useState('')
    const [novidades,setNovidades] = useState(true)
    const [promocoes,setPromocoes] = useState(false)
    const [erros,setErros] = useState({cpf:{valido:true,texto:""}})

    const validaCPF = ()=>{
      
    }
  return (
    <form onSubmit={(e) =>{
      e.preventDefault()
      onSubmit({nome,sobrenome,cpf,novidades,promocoes})
      
    }}>
      <TextField
        value={nome}
        onChange={(e) =>{
          setNome(e.target.value);
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
        setSobrenome(e.target.value);
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
              setCpf(e.target.value)
            }}
        onBlur={(e) =>{
          setErros({cpf:{valido:false,texto:"CPF inválido,ele deve ter 11 dígitos"}})
        }}    
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
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
