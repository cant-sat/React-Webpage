import { LuPlane, LuRocket } from "react-icons/lu";
import { MdOutlineSatelliteAlt } from "react-icons/md";

function Projects(){
    return (
    <div className="h-[calc(100vh-3.5rem)] w-screen text-center ">
        <div>Cant fly <LuPlane className="inline"/></div>
        <div>AGAC <LuRocket className="inline"/> </div>
        <div>CanSat <MdOutlineSatelliteAlt className="inline"/> </div>
    </div>
    )
}


export default Projects