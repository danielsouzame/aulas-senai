import { useState } from 'react';
import './App.css'
import BotaoCustomizado from './componentes/BotaoCustomizado/BotaoCustomizado';
import CampoCustomizado from './componentes/CampoCustomizado/CampoCustomizado'

const marcas = [{ nome: "Sharpeye", modelos: ["Inferno 72", "Zipper", "File Fifty", "Synergy", "#77"] }, { nome: "Mayhaem", modelos: ["Formula-1", "The Ripper", "3.0 Stub Driver", "El Patrón", "Pocket Rocket"] }, { nome: "DHD", modelos: ["MF Lighting", "EE Juliette", "MF DNA", "SG No.8", "Nexus EPS"] }, { nome: "Channel Island", modelos: ["The Solution", "Goldie", "Dumpster Diver 2", "CI 2.PRO", "Big Happy"] }]

function App() {
  const [marcaSelecionada, setMarcaSelecionada] = useState("");
  const [modeloSelecionado, setModeloSelecionado] = useState("");

  return (
    <>
      <CampoCustomizado label={"Marca"}
        opcoes={marcas.map((marca) => ({ label: marca.nome, valor: marca.nome }))}
        value={marcaSelecionada}
        onChange={(e) => {
          setMarcaSelecionada(e.target.value);
          setModeloSelecionado("");
        }}
      />

      <CampoCustomizado label={"Modelo"}
        opcoes={marcas.find((marca) => marca.nome === marcaSelecionada)?.modelos.map((modelo) => ({ label: modelo, valor: modelo })) || []}
        value={modeloSelecionado}
        onChange={(e) => setModeloSelecionado(e.target.value)}
      />

      <CampoCustomizado label={"Tamanho"} />

      <CampoCustomizado label={"Cor"} />



      <BotaoCustomizado />
    </>
  );
}

export default App
