import { Developer } from "./Developer";
import { IAm } from "./IAm";
import { IuriSilva } from "./IuriSilva";

export default function Init(){
    return(
        <div className="w-1/2 h-screen bg-zinc-900 pl-48 pt-48 leading-10">
            <IAm />
            <IuriSilva />
            <Developer />
        </div>
    )
}
