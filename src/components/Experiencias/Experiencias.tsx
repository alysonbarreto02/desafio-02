import { useState } from "react"
import { Date } from "./Date"
import { EmpresaCitada } from "./EmpresaCitada"
import { Empresa } from "./Empresa"
import { Profissao } from "./Profissao"
import { Titulo } from "./Titulo"

const empresas = [
    {
        name: "Digital House",
        id: 1,
    },
    {
        name: "Código Fonte TV",
        id: 2,
    },
    {
        name: "Zuplae",
        id: 3,
    },
    {
        name: "ContWeb",
        id: 4,
    },
    {
        name: "iuricode",
        id: 5,
    },
    {
        name: "Freelancer",
        id: 6,
    }
]


export default function Experiencias() {

    const [clicked, setClicked] = useState(2)

    return (
        <div className="w-full bg-zinc-800 flex">
            <div className="px-48">
                <Titulo />
                <div className="mt-10 border-l border-zinc-600">
                    {
                        empresas.map((empresa, index) =>
                            <Empresa
                                clicked={clicked}
                                changeClicked={setClicked}
                                empresa={empresa}
                                key={index} />
                        )}
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