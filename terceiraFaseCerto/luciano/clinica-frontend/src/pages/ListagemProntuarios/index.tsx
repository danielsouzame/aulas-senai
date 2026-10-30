import MedicalRecord from "../../components/MedicalRecord"

const ListagemProntuarios = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-cyan-800 mb-6">
                Listagem de Prontuarios
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <MedicalRecord/>
            </div>

        </div>
    )
}

export default ListagemProntuarios