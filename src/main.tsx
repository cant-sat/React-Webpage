import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider } from 'react-router-dom'
import initializeRouter from './router'
import  ErrorPage  from './pages/404.tsx'
import index from './pages/index.tsx'
import about from './pages/about.tsx'
import projects from './pages/projects.tsx'
import live from './pages/live.tsx'

const pages: { path: string, element: React.ReactNode, title?: string, top? : React.ReactNode }[] = [
  { path: "/", element: index(), top:  <div className="min-h-screen text-orange-400 flex place-content-center text-[30vw] items-center border-slate-400 border-b-2">
  CAN'T
  
</div> },
  { path: "About", element: about()},
  { path: "Projects", element: projects()},
  { path: "Live", element: live()},
];
const errorPage: React.ReactNode = ErrorPage()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <RouterProvider router={initializeRouter(pages, errorPage)}/>
  </React.StrictMode>,
) 
