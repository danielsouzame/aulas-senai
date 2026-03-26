import "./AnoAtual.css";

function AnoAtual(){
    const ano = new Date().getFullYear()
    return <div className="ano-atual__root">{ano}</div>
}

export default AnoAtual;