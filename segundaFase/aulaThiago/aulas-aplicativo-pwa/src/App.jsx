// IMport de bibliotecas externas, instaladas via npm
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Imports de arquivos de estilos (CSS)
import "./App.css";
// Imports de componentes/paginas internas do projeto react (arquivos.jsx)
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";


const roteador = createBrowserRouter([
 {
   path: '',
   element: <PaginaInicial />,
 },
 {
  path: '*',
  element: <h1>Página não encontrada!</h1>
 },
]);

function App() {
   return (
   <>
     <Cabecalho />
     <RouterProvider router={roteador} />
     <Rodape />
   </>
 );

}

export default App;
