import "./Calculadora.css";

function Calculadora({num1, num2, operacao}){
    switch (operacao){
        case 1: return <div className="calculadora__root">{num1}+{num2}={num1 + num2}</div>
        break;

        case 2: return <div className="calculadora__root">{num1}-{num2}={num1 - num2}</div>
        break;

        case 3: return <div className="calculadora__root">{num1}*{num2}={num1 * num2}</div>
        break;

        case 4: return <div className="calculadora__root">{num1}/{num2}={num1 / num2}</div>
        break;

        default: return <div className="calculadora__root">"invalid choice!"</div>
        break;
    };
}

export default Calculadora;