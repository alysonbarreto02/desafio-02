import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export default function Head() {
    return (
        <div className="w-full h-20 bg-zinc-900 px-48 flex">
            <Logo />
            <Navigation />
        </div>
    )
}



