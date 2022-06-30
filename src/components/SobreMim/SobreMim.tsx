import { Description } from "./Description";
import { Facebook } from "./Icons/Facebook";
import { Figma } from "./Icons/Figma";
import { Foto } from "./Foto";
import { Location } from "./Location";
import { Title } from "./Title";
import { Twitch } from "./Icons/Twitch";
import { Twiter } from "./Icons/Twiter";
import { YouTube } from "./Icons/YouTube";

export default function SobreMim() {
    return (
        <div className="flex">
            <div className="w-1/2 h-screen bg-zinc-800 flex items-center justify-center">
                <Foto />
            </div>
            <div className="w-1/2 h-screen bg-zinc-800 text-white pt-32">
                <Title />
                <Location />
                <Description />
                <div className=" flex gap-4 mt-5">
                    <Twiter />
                    <Twitch />
                    <YouTube />
                    <Figma />
                    <Facebook />
                </div>
                <div className="flex gap-5 mt-16">
                    <div className="border-transparent bg-gradient-to-tr to-purple-700 from-pink-600 rounded-md p-px w-40 text-center">
                        <button className="bg-zinc-800 w-full rounded-md h-10">Currículo</button>
                    </div>
                    <div className="border-transparent bg-gradient-to-bl to-purple-700 from-cyan-400 rounded-md p-px w-40 text-center">
                        <button className="bg-zinc-800 w-full rounded-md h-10">Currículo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}