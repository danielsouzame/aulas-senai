// imports de bibliotecas externas, instaladas via npm
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// imports de arquivos de estilos (CSS)
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
// imports de componentes/paginas internas do projeto React (arquivos .jsx)
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import ListaProdutos from "./paginas/ListaProdutos/ListaProdutos";
import ListaTarefas from "./paginas/ListaTarefas/ListaTarefas";
import CadastroCliente from "./paginas/CadastroCliente/CadastroCliente";
import ListaClientes from './paginas/ListaClientes/ListaClientes';

const roteador = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
  {
    path: "lista-produtos",
    element: <ListaProdutos />,
  },
  {
    path: "lista-tarefas",
    element: <ListaTarefas />,
  },
  {
    path: "*",
    element: <h3>Página não encontrada!!</h3>,
  },
  {
    path: "lista-clientes",
    element: <ListaClientes/>
  },
  {
    path: "cadastro-cliente",
    element: <CadastroCliente/>
  }
]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={roteador} />
      <Rodape />
      <ToastContainer />
    </>
  );
}

export default App;
