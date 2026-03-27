import "./Soma.css"

function Soma({num1, num2}){
    return <div className="soma__root">{num1} + {num2} = {num1 + num2}</div>
}

export default Soma;