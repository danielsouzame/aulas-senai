import "./InputsEBotoes.css"
import { useState } from "react";

function InputsEBotoes({ operacao, executarCalculo, valueButton, resultado }) {
    const [n1, setN1] = useState('')
    const [n2, setN2] = useState('')

    return (
        <div className="inputs-e-botoes">
            <input type="number" id="n1"
                placeholder="Digite um número"
                value={n1}
                onChange={(event) => { setN1(event.target.value) }} />

            <span>{operacao}</span>

            <input type="number" id="n2" placeholder="Digite um número"
                value={n2}
                onChange={(event) => { setN2(event.target.value) }} />

            <button onClick={() => {
                executarCalculo(n1, n2);
                {setN1(''); setN2('')}

            }

            }>{valueButton}</button>
            

            <span>= {resultado}</span>
        </div>
    );
}

export default InputsEBotoes;