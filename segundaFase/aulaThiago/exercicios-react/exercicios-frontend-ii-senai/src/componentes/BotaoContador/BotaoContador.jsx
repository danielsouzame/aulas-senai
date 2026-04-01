import "./BotaoContador.css";
import { useState } from "react";

function BotaoContador(){
    const [atualiza, setAtualiza] = useState(0)

    const soma = () => {
        setAtualiza(atualiza + 1)
    }

    return (<button className="botao-contador__root" onClick={soma} >Contador é:{atualiza}</button>);
};

export default BotaoContador;