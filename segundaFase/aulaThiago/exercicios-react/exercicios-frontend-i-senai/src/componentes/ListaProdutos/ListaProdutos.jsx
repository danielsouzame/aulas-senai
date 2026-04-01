import "./ListaProdutos.css";

function ListaProdutos({produtos}){
    return <ul className="lista-produtos__root">
        {produtos.map((produto, index) => (
            <li key={index}>{produto}</li>
        ))}
    </ul>;
}

export default ListaProdutos;