import "./Somar.css"
import { useState } from "react";
import InputsEBotoes from "../InputsEBotoes/InputsEBotoes";

function Somar(n1,n2){
    const [resultado, setResultado] = useState()
    // const [n1, setN1] = useState('')
    // const [n2, setN2] = useState('')

    const soma = () => {
        setResultado(Number(n1) + Number(n2))
        
    }
    
    return ( 
        <InputsEBotoes 
            operacao = "+"
            nomeFuncao = {soma}
            valueButton = "somar"
            />
    
        // <div className="somar__root">
        //     <input type="number"
        //     placeholder="Digite um número"
        //     value={n1}
        //     onChange={(event) => {setN1(event.target.value)}}/>

        //     <span>+</span>
            
        //     <input type="number" placeholder="Digite um número"
        //     value={n2}
        //     onChange={(event) => {setN2(event.target.value)}}/>
            
        //     <button onClick={soma}>Somar</button>
            
        //     <span>= {resultado}</span>
        // </div>
    );
}

export default Somar;

// backup
        // <div className="somar__root">
        //     <input type="number"
        //     placeholder="Digite um número"
        //     value={n1}
        //     onChange={(event) => {setN1(event.target.value)}}/>

        //     <span>+</span>
            
        //     <input type="number" placeholder="Digite um número"
        //     value={n2}
        //     onChange={(event) => {setN2(event.target.value)}}/>
            
        //     <button onClick={soma}>Somar</button>
            
        //     <span>= {resultado}</span>
        // </div>