import BotaoContador from "./componentes/BotaoContador/BotaoContador";
import Contador from "./componentes/Contador/Contador";
import InputsEBotoes from "./componentes/InputsEBotoes/InputsEBotoes";
import Somar from "./componentes/Somar/Somar";

function App() {
  return (<>
      <span>
        1. Crie um componente chamado BotaoContador que contém um botão com a
        descrição "Contador é: xx", ao clicar no botão o número deve ser incrementado
        em 1, conforme exemplo:
      </span>

      <BotaoContador />
      <hr />
      <span>
        2. Crie um componente chamado Contador que contém dois botões, um para
        somar 1 ao ser clicado e outro para diminuir 1 ao ser clicado, e mostre o valor
        atual no meio entre os dois botões, conforme exemplo:
      </span>

      <Contador/>
      <hr />
      <span>
        3. Crie um componente chamado Somar que contém dois campos tipo numérico, e
        um botão "Somar" que ao ser clicado deve somar os dois valores e mostrar o
        resultado, conforme exemplo:
      </span>

      <Somar/>
      <hr />
      <span>
        teste
      </span>

      <InputsEBotoes/>
      <hr />
  </>);
}

export default App;
