// import "./ListaTarefas.css"
import { useState } from "react";
import Principal from "../../componentes/Principal/Principal"

function ListaTarefas(){
    const [novaTarefa, setNovaTarefa] = useState("");

    return (
        <Principal>
            <h2>Lista Tarefas</h2>

            <input type="text" placeholder="Nova Tarefa" value={novaTarefa} onChange={(event) => {setNovaTarefa(event.target.value)}}/>
        </Principal>
    );
}

export default ListaTarefas;