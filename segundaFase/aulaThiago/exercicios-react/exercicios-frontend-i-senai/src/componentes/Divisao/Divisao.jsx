import "./Divisao.css";

function Divisao({num1, num2}){
    return <div className="divisao__root">{num1}/{num2} = {num1/num2}</div>
}

export default Divisao;