import { FaGithub} from "react-icons/fa";
import { PiPlaceholderBold } from "react-icons/pi";

let buttons : {path : string, description : string, element? : React.ReactNode}[]= [{
    path: "About",
    description: "About us!"
},{
    path: "Live",
    description: "Live data!"
},{
    path: "Projects",
    description: "Our projects!"
}];



export function TopBar() {
    return <div className="flex bg-slate-900  h-14 items-center place-content-center text-orange-400  *:transition-all text-xl sticky  top-0 z-10" id="TopBar">
        <a href="#">
            <PiPlaceholderBold className="ml-2 mr-1 iconButton"/>
        </a>
        <div className="flex flex-wrap flex-1 transition-all place-content-center text-slate-900">
            {buttons.map((item) => (
                <a href={"#" + item.path} title={item.description} className=" py-[0.2rem] mx-1 my-[0.15rem] text-center text-base transition-all bg-orange-400 hover:max-w-[16rem] min-w-[4.5rem] rounded-2xl flex-1 max-w-[12rem]  active:max-w-[15rem] ">{buttonText(item)}</a>))}
        </div>
        <a href="https://github.com/cant-sat">
            <FaGithub className="ml-1 mr-2 iconButton"/>
        </a>
    </div>
}


function buttonText(item : {path : string, description : string, element? : React.ReactNode}) : JSX.Element{
    if(item.element){
        return <>{item.element}</>
    }
    return <>{item.path}</>
}