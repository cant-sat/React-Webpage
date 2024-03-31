import React, { useEffect } from "react"
import { TopBar } from "./Topbar"

interface PageSettings{
  title? : string
  content : React.ReactNode
}

let Err = <>no content</>

function App({title, content = Err} : PageSettings) :JSX.Element {
  useEffect(() => {
    document.title = "CAN'T"
    if (title){
      document.title = "CAN'T - " + title;
    }
  })

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })

  return (
    <body>


      <TopBar/>
      
      <div className="overflow-auto bg-slate-500">
      {[...Array(10000)].map(() =>
    content )}
      </div>

    </body>
  )
}


export default App
