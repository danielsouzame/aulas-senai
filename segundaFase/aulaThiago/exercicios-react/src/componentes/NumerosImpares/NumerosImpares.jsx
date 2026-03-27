import "./NumerosImpares.css"

function NumerosImpares({numeros}){
    return (<ul className="numeros-impares__root">
        {numeros.filter(numeros => numeros % 2 != 0).map((numero, index) => (
            <li key={index}>{numero}</li>
        ))}
    </ul>);
}

export default NumerosImpares;