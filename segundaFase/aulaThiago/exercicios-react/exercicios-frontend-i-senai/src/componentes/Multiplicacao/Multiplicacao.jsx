import "./Multiplicacao.css"

function Multiplicacao({num1, num2}){
    return <div className="multiplicacao__root">{num1}*{num2} = {num1*num2}</div>
}

export default Multiplicacao;