import { Dispatch, SetStateAction, useState } from "react";

type EmpresasProps = {
    empresa: {
        name: string,
        id: number
    }
    changeClicked: Dispatch<SetStateAction<number>>,
    clicked: number
}

export function Empresa({ empresa, changeClicked, clicked }: EmpresasProps) {
    return <div className={`pl-3 w-32 h-12 text-zinc-500 whitespace-nowrap flex items-center
    ${clicked === empresa.id ? "text-white border-l-4 border-cyan-400" : "text-zinc-500 border-0"}`}>
        <button onClick={() => changeClicked(empresa.id)}>{empresa.name}</button>
        {/* <button>{empresa.name}</button> */}
    </div>;
}
