import { useState } from "react";
import "./AdicionarNome.css";

function AdicionarNome(){
  const [nome, setNome] = useState('');
  const [lista, setLista] = useState([]);

  const adicionar = () => {
    if(!nome.trim()) {
      return;
    }

    setLista([...lista, nome]);
    setNome('')
  }
  
  return (
    <div className="adicionar-nome__root">
      <input 
      type="text"
      value={nome}
      placeholder="Digite um nome"
      onChange={(e) => setNome(e.target.value)}
      />
      <button onClick={adicionar} >Adicionar</button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
};

export default AdicionarNome;