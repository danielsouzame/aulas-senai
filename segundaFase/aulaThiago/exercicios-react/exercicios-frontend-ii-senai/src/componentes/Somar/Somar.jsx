import "./Somar.css"
import { useState } from "react";
import InputsEBotoes from "../InputsEBotoes/InputsEBotoes";

function Somar(){
    const [resultado, setResultado] = useState()

    const Soma = (n1, n2) => {
        setResultado(Number(n1) + Number(n2));
    };
    
    return ( 
        <InputsEBotoes 
            operacao="+"
            executarCalculo={Soma}
            valueButton="Somar"
            resultado={resultado}
            />
    );
}

export default Somar;