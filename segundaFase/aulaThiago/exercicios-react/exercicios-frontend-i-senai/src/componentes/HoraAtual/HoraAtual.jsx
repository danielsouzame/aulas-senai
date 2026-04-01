//5. Crie um componente chamado 'HoraAtual' que mostra o texto:
// "20" em uma <div> redonda 50x50 px centralizada com o fundo azul, texto na cor
// amarelo.
import "./HoraAtual.css"

function HoraAtual(){
    const hora = new Date().getHours()
    return <div className="hora-atual__root">{hora}</div>;
}

export default HoraAtual