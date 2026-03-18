import "./BotaoCustomizado.css"

function BotaoCustomizado ({ tipo, children }) {
    let classes = "botao-customizado__root"

    switch (tipo) {
        case "primario":
            classes += " botao-customizado-primario"
            break;
        case "secundario":
            classes += " botao-customizado-secundario"
            break;
    }

    return (<button className={classes}>
        {children}
        </button>
    );
}

export default BotaoCustomizado;