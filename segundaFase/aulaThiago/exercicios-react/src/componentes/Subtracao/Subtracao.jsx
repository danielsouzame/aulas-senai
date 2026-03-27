import "./Subtracao.css"

function Subtracao({num1, num2}){
    return <div className="subtracao__root">{num1} - {num2} = {num1 - num2}</div>;
}

export default Subtracao;