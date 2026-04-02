import "./ListaTarefas.css"
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Principal from "../../componentes/Principal/Principal"
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado"

function ListaTarefas() {
    const [novaTarefa, setNovaTarefa] = useState("");

    const [tarefas, setTarefas] = useState([]);

    const adicionarTarefa = () => {
        if (novaTarefa.trim() === "") {
            alert("digite uma nova tarefa")
            return;
        }
        console.log(novaTarefa);

        setTarefas([{concluida:false, descricao: novaTarefa}, ...tarefas]);
        setNovaTarefa('')
    };

    const removerTarefa = (index) => {
        if(confirm("Tem certeza que deseja remover esta tarefa?")){
            tarefas.splice(index, 1);
            setTarefas([...tarefas]);
        }
    };

    const marcarComoConcluida = (index) => {
        console.log("Marcar como concluída", indice);
        console.log("tarefas antes", tarefas);
        tarefas[indice].concluida = !tarefas[indice].concluida;
        setTarefas([...tarefas])
    };

    return (
        <Principal>
            <h2>Lista Tarefas</h2>

            <div className="lista-tarefas__campo-adicionar">
                <CampoCustomizado
                    label="Nova Tarefa"
                    //propriedades não mapeadas
                    id="nova-tarefa"
                    type="text"
                    placeholder="Precione Enter para adicionar"
                    value={novaTarefa}
                    onChange={(event) => { setNovaTarefa(event.target.value) }}
                    onKeyPress={(event) => {
                        if (event.code === "Enter") {
                            adicionarTarefa()
                        }
                    }}
                />

                {/* <BotaoCustomizado tipo="secundario" aoClicar={(adicionarTarefa)}>+</BotaoCustomizado> */}
            </div>

            {!tarefas.length && <span className="lista-tarefas__mensagem-sem-tarefas">Não há tarefas para mostrar.</span>}

            {tarefas.map((item, index) => {
                return (
                    <div key={index} className="lista-tarefas__tarefa">
                        <input type="checkbox" checked={item.concluida} onChange={marcarComoConcluida(index)}/>
                        <span>{item.descricao}</span>
                        <FaTrashAlt onClick={() => removerTarefa(index)} />

                    </div>
                );
            })}
        </Principal>
    );
}

export default ListaTarefas;