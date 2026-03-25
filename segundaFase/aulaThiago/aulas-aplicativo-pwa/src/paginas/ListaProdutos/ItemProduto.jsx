import "./ItemProduto.css";

function ItemProduto ({produto}){
    return (
        <div className="item-produto__root">
            <span>{produto.nome}</span>
            <span>R$ {produto.preco}</span>

            <div className="item-produto__cores">{produto.cores.map((cor, index) =>{
                return (<div key={index} className = "item-produto__cor" style = {{background: cor}}/>)
            })}
            </div>
        </div>
    );
}

export default ItemProduto;