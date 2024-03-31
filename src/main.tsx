import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'


const router = createHashRouter([{
  path: "/",
  element: <App content={<>Index </>}/>,
  errorElement: <App content={<>404 </>}/>
}, {
  path: "Projects",
  element: <App content={<>Projects </>} title='Projects'/>,
}, {
  path: "About",
  element: <App content={<>About </>} title='About'/>
}, {
  path: "Live",
  element: <App content={<>Live </>} title='Live'/>
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    

    <RouterProvider router={router}/>
  </React.StrictMode>,
) 
