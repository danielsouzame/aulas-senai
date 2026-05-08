import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
  {
    path: "lista-pranchas",
    element: <ListaPranchas />,
  },
  {
    path: "lista-clientes",
    element: <ListaClientes />,
  },
  {
    path: "cadastro-prancha", // o "?" torna o parâmetro opcional, ou seja, pode ser acessado tanto para criar um novo cliente (sem id) quanto para editar um cliente existente (com id)
    element: <CadastroPrancha />,
  },
  {
    path: "*", //
    element: <h3>Página não encontrada!!</h3>,
  },
]);

function App() {
  return (
    <>
    </>
  );
}

export default App;
