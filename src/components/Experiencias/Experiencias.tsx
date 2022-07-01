import { Empresas } from "./Empresas"

const empresas=[
{nome : "Digital House"},
{nome: "Código Fonte TV"},
{nome: "Zuplae"},
{nome: "ContWeb"},
{nome: "iuricode"},
{nome: "Freelancer"}
]

export default function Experiencias(){
    return(
        <div className="w-full bg-zinc-800">
            <div className="px-48">
                <h1 className="text-white text-2xl">EXPERIÊNCIA</h1>
                <div className="mt-10 border-l border-zinc-600">
                    {empresas.map((empresas, index) => <Empresas name={empresas.nome} key={index}/>)}
                </div>
            </div>
        </div>
    )
}


