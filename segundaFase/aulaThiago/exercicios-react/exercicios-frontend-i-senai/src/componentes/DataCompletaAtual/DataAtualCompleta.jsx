import "./DataAtualCompleta.css";

function DataAtualCompleta(){
    const agora = new Date()

    const dia = String(agora.getDate()).padStart(2,'0')
    const mes = String(agora.getMonth() + 1).padStart(2,'0')
    const ano = String(agora.getFullYear())
    const hora = String(agora.getHours()).padStart(2,'0')
    const min = String(agora.getMinutes()).padStart(2,'0')
    return <div className="data-atual-completa__root">{dia}/{mes}/{ano} {hora}:{min}</div>
}

export default DataAtualCompleta;