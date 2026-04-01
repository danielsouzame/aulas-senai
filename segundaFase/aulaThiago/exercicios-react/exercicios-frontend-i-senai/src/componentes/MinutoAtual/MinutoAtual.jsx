import "./MinutoAtual.css";

function MinutoAtual(){
    // const minuto = new Date().getMinutes()

    return <div className="minuto-atual__root">{new Date().getMinutes()}</div>;

}


export default MinutoAtual;