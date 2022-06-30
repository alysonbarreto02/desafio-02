import { Developer } from "./Developer";
import { IAm } from "./IAm";
import { IuriSilva } from "./IuriSilva";

export default function Init(){
    return(
        <div className="w-1/2 h-screen bg-zinc-900 pl-48 pt-48 leading-10">
            <IAm />
            <IuriSilva />
            <Developer />
            <div className="flex gap-4 mt-10 text-white">
                <div className="border-transparent bg-gradient-to-bl to-purple-700 from-cyan-400 rounded-md p-px w-32 text-center">
                    <button className="bg-zinc-900 w-full rounded-md">Linkedin</button>
                </div>
                <div className="border-transparent bg-gradient-to-tl from-purple-700 to-pink-400 rounded-md p-px w-32 text-center">
                    <button className="bg-zinc-900 w-full rounded-md">GitHub</button>
                </div>
            </div>
        </div>
    )
}
