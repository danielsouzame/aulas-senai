import "./NumerosPares.css"

function NumerosPares({numeros}){
    return (
    <ul className="numeros-pares__root">
        {numeros.filter(numeros => numeros % 2 == 0).map((numero, index) => (
            <li key={index}>{numero}</li>
        ))}
    </ul>);
}

export default NumerosPares;