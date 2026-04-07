import { useState } from "react";
import InputsEBotoes from "../InputsEBotoes/InputsEBotoes";

function Diminuir(){
    const [resultado, setResultado] = useState('')

    const executarCalculo = (n1,n2) => {
        setResultado(Number(n1) - Number(n2))
    }

    return <InputsEBotoes
            operacao="-"
            executarCalculo={executarCalculo}
            valueButton="Diminui"
            resultado={resultado}
    />
    
};

export default Diminuir;