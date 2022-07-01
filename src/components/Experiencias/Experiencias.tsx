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
                <div className="w-2/3 mt-4">
                    <p className="text-zinc-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corr
                        upti et perferendis perspiciatis earum eveniet. Ex inc
                        idunt soluta quis veritatis ut, sequi adipisci natus,
                        quo, quidem in quae fugit suscipit autem!
                    </p>
                </div>
            </div>

        </div>
    )
}