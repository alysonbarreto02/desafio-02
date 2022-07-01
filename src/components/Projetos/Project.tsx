import { ButtonView } from "./ButtonView";
import { DescriptionProject } from "./DescriptionProject";
import { NomeDoProjeto } from "./NomeDoProjeto";
import { PictureProject } from "./PictureProject";
import { Techs } from "./Techs";

export function Project() {
    return <div className="mt-10 gap-2 w-1/2 col-span-1 row-span-1">
        <PictureProject />
        <NomeDoProjeto />
        <DescriptionProject />
        <Techs />
        <ButtonView />
    </div>;
}
