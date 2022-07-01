import { Date } from "./Date"
import { EmpresaCitada } from "./EmpresaCitada"
import { Empresas } from "./Empresas"
import { Profissao } from "./Profissao"
import { Titulo } from "./Titulo"

const empresas = [
    { nome: "Digital House" },
    { nome: "Código Fonte TV" },
    { nome: "Zuplae" },
    { nome: "ContWeb" },
    { nome: "iuricode" },
    { nome: "Freelancer" }
]

export default function Experiencias() {
    return (
        <div className="w-full bg-zinc-800 flex">
            <div className="px-48">
                <Titulo />
                <div className="mt-10 border-l border-zinc-600">
                    {empresas.map((empresas, index) => <Empresas name={empresas.nome} key={index} />)}
                </div>
            </div>
            <div className="mt-16 ">
                <div className="flex gap-40" >
                    <Profissao />
                    <Date />
                </div>
                <EmpresaCitada />
            </div>

        </div>
    )
}