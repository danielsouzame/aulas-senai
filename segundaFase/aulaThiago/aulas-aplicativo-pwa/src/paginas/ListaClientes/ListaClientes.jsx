import Principal from "../../componentes/Principal/Principal";
import { MdAddCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";


function ListaClientes() {
    const navigate = useNavigate();

    const clienteDoLocalStorage = JSON.parse(localStorage.getItem("clientes")) || [];

    return <Principal titulo="Lista de Clientes" voltarPara="/">
        
        {clienteDoLocalStorage.map((cliente) => {
            return <div key={cliente.id}>{cliente.nome}</div>
        })}
        <MdAddCircle size={48} color="green" onClick={()=>{navigate("/cadastro-cliente")}}/>
    </Principal>
}

export default ListaClientes;