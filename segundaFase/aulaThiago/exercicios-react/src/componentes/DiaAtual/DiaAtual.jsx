import "./DiaAtual.css";

// 2. Crie um componente chamado 'DiaAtual' que mostra o texto:
//"15" em uma <div> com o fundo azul, texto centralizado na cor branco.

function DiaAtual(){
    const dia = new Date().getDay()
    return (
        <div className="dia-atual__root">
            {dia}
        </div>
    );
}

export default DiaAtual;