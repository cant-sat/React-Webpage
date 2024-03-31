let buttons : string[]= ["About", "Projects", "Live"]
import { FaGithub} from "react-icons/fa";
import { PiPlaceholderBold } from "react-icons/pi";


export function TopBar() {
    return <body className="flex bg-slate-900  h-20 items-center place-content-center *:m-1 text-orange-400 *:rounded-2xl *:p-1 *:transition-all text-xl sticky  top-0">
        <a href="/#">
            <PiPlaceholderBold className="size-16 iconButton"/>
        </a>
        <div className="flex flex-1 transition-all place-content-center text-slate-900 ">
            {buttons.map((item) => (
                <a href={"/#" + item} className=" py-[0.3rem] mx-1 text-center transition-all bg-orange-400 hover:max-w-[25rem] rounded-2xl flex-1 max-w-[17rem]">{item}</a>))}
        </div>
        <a href="https://github.com/cant-sat">
            <FaGithub className="size-16 iconButton"/>
        </a>
    </body>
}
