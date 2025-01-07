import TeamCards from "./TeamCards"
import { memo } from "react";
const Design = () => {
    return(
        <div className="flex justify-center items-center">
            <TeamCards name={"Suvanesh"} img={"/assets/Suvansh.png"} about={"Overloaded with work but never out of ideas—pure creativity drives my hustle."}/>
        </div>
    )
}
export default memo(Design);