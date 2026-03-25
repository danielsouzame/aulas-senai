import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import "./PaginaInicial.css";
import "../../componentes/BotaoCustomizado/BotaoCustomizado.css";
import Principal from "../../componentes/Principal/Principal";
import { useNavigate } from 'react-router-dom';

function PaginaInicial(){
    const navigate = useNavigate();
    return (
        <Principal> 
            <BotaoCustomizado tipo="primario" aoClicar={() => navigate('/lista-produtos')}>Lista de Produtos</BotaoCustomizado>
            <BotaoCustomizado tipo="secundario" aoClicar={() => navigate('/lista-tarefas')}>Lista de Tarefas</BotaoCustomizado>
            <BotaoCustomizado aoClicar={() => navigate('/blablabla')}>Rota Inválida</BotaoCustomizado>
        </Principal>
    )
}

export default PaginaInicial;