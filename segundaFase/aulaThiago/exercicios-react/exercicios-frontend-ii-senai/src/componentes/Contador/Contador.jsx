import "./Contador.css"
import { useState } from "react";
function Contador(){
    const [contador, setContador] = useState(0)

    const soma = () => {
        setContador(contador + 1)
    }
    
    const subtrai = () => {
        setContador(contador - 1)
    }

    return (<div className="contador__root">
        <button className="botao-contador" onClick={soma}>adicionar 1</button><span>{contador}</span><button onClick={subtrai} className="botao-contador">subtrair 1</button>
    </div>
    );
};

export default Contador;