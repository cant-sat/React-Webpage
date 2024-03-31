import React, { useEffect } from "react"
import { TopBar } from "./Topbar"
import { MdKeyboardDoubleArrowDown } from "react-icons/md";


interface PageSettings{
  title? : string
  content : React.ReactNode
  top? : React.ReactNode
}

let Err = <>no content</>

function App({title, content = Err, top} : PageSettings) :JSX.Element {
  useEffect(() => {
    document.title = "CAN'T"
    if (title){
      document.title = "CAN'T - " + title;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  })

  return (
    <body className="no-scrollbar">

      {Top(top)}

      <TopBar/>
      
      <div className="overflow-auto bg-slate-500">
      
    {content}
      </div>

    </body>
  )
}


function Top(content : React.ReactNode) : JSX.Element{
  if(content){
    return <>     {content}
  <MdKeyboardDoubleArrowDown className="absolute bottom-[3vh] text-orange-400 right-[3vw] text-8xl rounded-full iconButton hover:cursor-pointer" onClick={scrollDown} title="Scroll down!"/></>
  }

  return <></>
}

function scrollDown(){
  window.scrollTo({
    top: 1000,
    behavior: "smooth"
  })
}

export default App
