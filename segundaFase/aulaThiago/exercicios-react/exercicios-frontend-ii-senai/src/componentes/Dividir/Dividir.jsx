import { useState } from "react";
import InputsEBotoes from "../InputsEBotoes/InputsEBotoes";

function Dividir() {
  const [resultado, setResultado] = useState("");

  const executarCalculo = (n1, n2) => {
    setResultado(Number(n1) / Number(n2));

  
  };

  return (
    <InputsEBotoes
      operacao="/"
      executarCalculo={executarCalculo}
      valueButton="Dividir"
      resultado={resultado}
    />
  );
}

export default Dividir;