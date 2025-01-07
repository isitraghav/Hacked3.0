import TeamCards from "./TeamCards"
import { memo } from "react";
const Operations = () => {
    return(
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center">
            <TeamCards name={"Tamnay"} img={"/assets/Tanmay.png"} about={"After 10, I’m all in: coordinating chaos, perfecting operations, and delivering roasts sharper than my timelines."}/>
            <TeamCards name={"Ayush"} img={"/assets/Ayush.png"} about={"Building the backbone, I make sure that everything gets the momentum it needs."}/>
        </div>
    )
}
export default memo(Operations);