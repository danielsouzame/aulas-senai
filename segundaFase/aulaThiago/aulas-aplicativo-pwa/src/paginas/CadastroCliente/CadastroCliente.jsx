import "./CadastroCliente.css";
import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado"
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";

function CadastroCliente() {
    const [cliente, setCliente] = useState({
        nome: "",
        cpf: "",
        dataNascimento: "",
        celular: "",
        email: "",
    })

    const salvar = () => {
        console.log("cliente salvo:", cliente)
    }

    return (
        <Principal voltarPara="/lista-clientes" titulo="Cadastro de Cliente">
            <CampoCustomizado label="nome" value={cliente.nome} onChange={(e) => setCliente({...cliente, nome: e.target.value})}/>
            <CampoCustomizado label="CPF" />
            <CampoCustomizado type="date" label="Data Nascimento" />
            <CampoCustomizado type="tel" label="Celular" />
            <CampoCustomizado type="email" label="E-mail" />

            <BotaoCustomizado onClick={salvar()} tipo="primario">Salvar</BotaoCustomizado>
        </Principal>
    );
    
}

export default CadastroCliente;


{/* <CampoCustomizado type="color" label="Cor favorita" />
<CampoCustomizado type="password" label="Senha" />
<CampoCustomizado type="range" label="Range" />
<CampoCustomizado type="file" accept="image/*" label="Anexo" /> */}