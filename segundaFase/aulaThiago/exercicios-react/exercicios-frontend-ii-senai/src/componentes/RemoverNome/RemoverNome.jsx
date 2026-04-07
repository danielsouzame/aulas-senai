import { useState } from "react"
import "./RemoverNome.css"

function RemoverNome(){
  const [lista, setLista] = useState(["Daniel", "Riccardo", "Matheus", "Giselle", "Cecilia"])
  // const nomes = ["Daniel", "Riccardo", "Matheus", "Giselle", "Cecilia",]

  const remover = (index) => {
    lista.splice(index, 1)
    setLista([...lista])
  }

  return (
    <div className="remover-nome__root">
      <ul>
        {lista.map((nome, index) => (
          <li key={index}>{nome} <button key={index} onClick={() => remover(index)}>Remover</button></li>
        ))}
      </ul>
    </div>
  );

}

export default RemoverNome;