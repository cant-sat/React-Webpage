let buttons : string[]= ["About",  "Live","Projects"]
import { FaGithub} from "react-icons/fa";
import { PiPlaceholderBold } from "react-icons/pi";


export function TopBar() {
    return <div className="flex bg-slate-900  h-24 items-center place-content-center text-orange-400  *:transition-all text-xl sticky  top-0" id="TopBar">
        <a href="#">
            <PiPlaceholderBold className="iconButton"/>
        </a>
        <div className="flex flex-wrap flex-1 transition-all place-content-center text-slate-900">
            {buttons.map((item) => (
                <a href={"#" + item} className=" py-[0.3rem] mx-1 my-[0.125rem] text-center transition-all bg-orange-400 hover:max-w-[25rem] rounded-2xl flex-1 max-w-[17rem]">{item}</a>))}
        </div>
        <a href="https://github.com/cant-sat">
            <FaGithub className=" iconButton"/>
        </a>
    </div>
}
