import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import "./PaginaInicial.css"
import "../../componentes/BotaoCustomizado/BotaoCustomizado.css"
import Principal from "../../componentes/Principal/Principal";

function PaginaInicial(){
    return (
        <Principal> 
            <BotaoCustomizado tipo="primario">Salvar</BotaoCustomizado>
        
            <BotaoCustomizado tipo="secundario">Cancelar</BotaoCustomizado>
        </Principal>
    )
}

export default PaginaInicial;