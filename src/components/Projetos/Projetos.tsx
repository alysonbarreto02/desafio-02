import { Project } from "./Project";
import { Title } from "./Title";

const Projects = [
1,2,3,4
]

export default function Projetos() {
    return (
        <div className="w-full h-full bg-zinc-800 px-48 pt-16">
            <Title/>
            <div className="flex gap-2">
                <Project/>
                <Project/>
            </div>
            <div className="flex gap-2">
                <Project/>
                <Project/>
            </div>
        </div>
    )
}
