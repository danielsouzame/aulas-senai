import { useState } from "react";
import "./CalculoIMC.css";

function CalculoIMC(){
  const [altura, setAultura] = useState('')
  const [peso, setPeso] = useState('')
  const [resultIMC, setResultIMC] = useState(null)
  const [status, setStatus] = useState('')


  const executarCalculo = (peso, altura) => {
    const imc = Number(peso) / (Number(altura)**2)

    setResultIMC(imc)

    if(imc < 18.5) {
      setStatus("Abaixo do peso")
      return;
    } else if (imc < 25) {
      setStatus("Peso normal")
      return;
    } else if (imc < 30) {
      setStatus("Sobrepeso")
      return;
    } else {
      setStatus("Obeso")
      return;
    }
  }


  return (
    <div className="calculo-imc__root">
      <span >Altura (m)</span>
      <input type="number" id="altura" onChange={(event) => {setAultura(event.target.value)}}/>

      <span >Peso (kg)</span>
      <input type="number" id="peso" onChange={(event) => {setPeso(event.target.value)}}/>
      
      <button onClick={() => executarCalculo(peso,altura)}>Calcular IMC</button>

      <span className="result">Resultado: {resultIMC} {status}</span>
    </div>
  );
}

export default CalculoIMC;