import { useState } from "react";
import InputsEBotoes from "../InputsEBotoes/InputsEBotoes";

function Multiplicar(){
    const [resultado, setResultado] = useState('')

    const executarCalculo = (n1,n2) => {
        setResultado(Number(n1) * Number(n2))
    };

    return <InputsEBotoes
            operacao="x"
            executarCalculo={executarCalculo}
            valueButton="Multiplicar"
            resultado={resultado}
    />
}

export default Multiplicar;