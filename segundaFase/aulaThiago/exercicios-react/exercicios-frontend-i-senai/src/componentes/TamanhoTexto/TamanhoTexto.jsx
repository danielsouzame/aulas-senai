import "./TamanhoTexto.css"

function TamanhoTexto({texto}){
    const tamanho = texto.replace(/\s/g, "").length;

    return (<div className="tamanho-texto__root">O texto possui {tamanho} caracteres.</div>);
}

export default TamanhoTexto;