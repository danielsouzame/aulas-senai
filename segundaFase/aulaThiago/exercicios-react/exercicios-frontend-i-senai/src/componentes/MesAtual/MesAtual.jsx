import "./MesAtual.css";

function MesAtual(){
    const mes = new Date().getMonth() + 1
    return <div className="mes-atual__root">{mes}</div>
}

export default MesAtual;