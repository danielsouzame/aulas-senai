import axios from "axios";
import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router";

interface Prontuario {
    id: string;
    fullName: string;
    healthInsurance?: string
}

const MedicalRecord = () => {
    const [medicalRecords, setMedicalRecords] = useState<Prontuario[]>([])
    const [searchTerm, setSearchTerm] = useState<string>("")

    useEffect(() => {
        const fetchMedicalRecord = async (): Promise<void> => {
            try {
                const response = await axios.get<Prontuario[]>("http://localhost:3000/patients")
                setMedicalRecords(response.data)
            } catch (error) {
                console.error("Erro ao obter dados", error)
            }
        }
        fetchMedicalRecord()
    }, [])

    //pega o evento de change (alteração) dentro do campo de formulário

    const handleSearchChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setSearchTerm(event.target.value)
    }

    //filtro de pacientes

    const filteredMedicalRecords = medicalRecords.filter((record) =>
        [
            record.id,
            record.fullName,
            record.healthInsurance
        ]
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    )

    return (
        <div className="bg-white shadow rounded-2xl p-6 mt-8">
            <h2 className="text-xl font-semibold text-cyan-800 mb-4">
                Listagem de prontuarios
            </h2>

            {/* campo de busca (filtro) */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                <label
                    htmlFor="search"
                    className="text-gray-700 font-medium"
                >
                    Buscar Prontuario:
                </label>

                <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Digite seu nome"
                    className="border rounded-lg px-3 py-2 w-full sm:w-80 focus:ring-2 focus:ring-cyan-600 outline-none"
                />
            </div>


            {/* Lista de pacientes */}

            {filteredMedicalRecords.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                    {filteredMedicalRecords.map((record) => {
                        return (
                            <li
                                key={record.id}
                                className="flex flex-col sm:flex-row sm:items-center justify-between py-4"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-cyan-100 text-cyan-700 p-3 rounded-full">
                                        <FaUserAlt size={20} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">
                                            {record.id}
                                        </p>

                                        <p className="font-semibold text-gray-800">
                                            {record.fullName}
                                        </p>

                                        <p className="font-semibold text-gray-800">
                                            {record.healthInsurance}
                                        </p>
                                    </div>

                                </div>

                                <div className="text-sm text-gray-600 mt-2 sm:mt-0 text-right">
    
                                    <Link
                                        to={`/medical-record/${record.id}`}
                                        className="text-cyan-700 font-semibold hover:underline"
                                    >
                                        Ver detalhes
                                    </Link>

                                </div>

                            </li>
                        )
                    })}
                </ul>
            ) : (
                <p className="text-gray-500 text-center py-6">
                    Nenhum prontuario encontrado.
                </p>
            )}


        </div>
    )
}

export default MedicalRecord;