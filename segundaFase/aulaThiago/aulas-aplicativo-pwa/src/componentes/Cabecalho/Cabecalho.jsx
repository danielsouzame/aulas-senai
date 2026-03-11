import Avatar from "../Avatar/Avatar";
import "./Cabecalho.css"; 

function Cabecalho () {
    return <header className="cabecalho__root">
        <img src="/vite.svg" alt="Logo" />
        <Avatar nome="Thiago Anastacio Cordeiro" />
        </header>;
}

export default Cabecalho;