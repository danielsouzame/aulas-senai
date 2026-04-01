import "./VerificarIdade.css"

function VerificarIdade({idade}){
    if (idade >= 18){
        return <div className="verificar-idade__root idade-maior">{idade} anos, é maior de idade</div>;
    }else{
        return <div className="verificar-idade__root idade-menor">{idade} anos, é menor de idade</div>;
    }
}

export default VerificarIdade;