import { Developer } from "./Developer";
import { GitHub } from "./GitHub";
import { IAm } from "./IAm";
import { IuriSilva } from "./IuriSilva";
import { Linkedin } from "./Linkedin";
import { Polygon } from "./Polygon";

export default function Init() {
    return (
        <div className="flex">
            <div className="w-1/2 h-screen bg-zinc-800 pl-52 pt-48 leading-10">
                <IAm />
                <IuriSilva />
                <Developer />
                <div className="flex gap-4 mt-10 text-white">
                    <Linkedin />
                    <GitHub />
                </div>
            </div>
            <div className="w-1/2 h-screen bg-zinc-800">
                <Polygon />
            </div>
        </div>
    )
}



