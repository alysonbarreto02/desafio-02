import { useState } from "react";

type EmpresasProps ={
name:string
}

export function Empresas({name}: EmpresasProps) {

    const [clicked, setClicked] = useState(false)

    function ChangeClicked(){
        if(clicked === false){
            setClicked(true)
        }
        else{
            setClicked(false)
        }
    }

    return <div className={`ml-3 w-32 h-12 text-zinc-500 ${clicked === true ? "text-white" : "text-zinc-500"}`}>
        <button onClick={ChangeClicked}>{name}</button>
    </div>;
}
