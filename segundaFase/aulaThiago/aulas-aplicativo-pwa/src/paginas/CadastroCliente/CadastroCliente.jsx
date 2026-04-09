import "./CadastroCliente.css";
import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado"
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";
import { formatarComMascara, MASCARA_CPF, NUMERO_TELEFONE } from "../../utils/formatarComMascar";
import { validarCPF } from "../../utils/validarCPF";
import validarEmail from "../../utils/validarEmail";

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
            <CampoCustomizado
                label="nome"
                value={cliente.nome}
                onChange={(e) => setCliente({ ...cliente, nome: e.target.value })} />

            <CampoCustomizado
                label="CPF"
                value={cliente.cpf}
                onChange={(e) => setCliente({ ...cliente, cpf: formatarComMascara(e.target.value, MASCARA_CPF) })}
                onBlur={(e) => {
                    if (e.target.value.trim() && !validarCPF(e.target.value)) {
                        alert('CPF inválido!')
                    }
                }}
            />

            <CampoCustomizado
                type="date"
                label="Data Nascimento"
                value={cliente.dataNascimento}
                onChange={(e) => setCliente({ ...cliente, dataNascimento: e.target.value })} />

            <CampoCustomizado
                type="tel"
                label="Celular"
                value={cliente.celular}
                onChange={(e) => setCliente({ ...cliente, celular: formatarComMascara(e.target.value, NUMERO_TELEFONE) })} />

            <CampoCustomizado
                type="email"
                label="E-mail"
                value={cliente.email}
                onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
                onBlur={(e) => {
                    if (e.target.value.trim() && !validarEmail(e.target.value)) {
                        alert('E-mail inválido!')
                    }
                }}
            />

            <CampoCustomizado
                type="file"
                accept="image/*"
                label="Foto"
                onChange={(e) => {
                    const imagem = e.target.files[0];
                    if (imagem) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            setCliente({ ...cliente, foto: event.target.result });
                        };
                        reader.readAsDataURL(imagem);
                    }
                }}
            />

            {cliente.foto && (
                <div style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
                    <img
                        src={cliente.foto}
                        alt="Foto do Cliente"
                        style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }}
                    />
                </div>
            )}

            <BotaoCustomizado aoClicar={salvar} tipo="primario">Salvar</BotaoCustomizado>
        </Principal>
    );

}

export default CadastroCliente;


{/* <CampoCustomizado type="color" label="Cor favorita" />
<CampoCustomizado type="password" label="Senha" />
<CampoCustomizado type="range" label="Range" />
<CampoCustomizado type="file" accept="image/*" label="Anexo" /> */}