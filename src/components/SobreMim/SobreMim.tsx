import { Description } from "./Description";
import { Facebook } from "./Icons/Facebook";
import { Figma } from "./Icons/Figma";
import { Foto } from "./Foto";
import { Location } from "./Location";
import { Title } from "./Title";
import { Twitch } from "./Icons/Twitch";
import { Twiter } from "./Icons/Twiter";
import { YouTube } from "./Icons/YouTube";
import { CurrículoButton } from "./Buttons/CurrículoButton";
import { EMail } from "./Buttons/EMailButton";

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
                    <CurrículoButton />
                    <EMail />
                </div>
            </div>
        </div>
    )
}



