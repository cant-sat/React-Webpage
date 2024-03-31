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

  return (
    <body >


      <TopBar/>
      
      {content}

    </body>
  )
}

export default App
