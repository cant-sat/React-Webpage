import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider } from 'react-router-dom'
import initializeRouter from './router'
import  ErrorPage  from './pages/404.tsx'
import Index from './pages/index.tsx'
import About from './pages/about.tsx'
import Live from './pages/live.tsx'
import Projects from './pages/projects.tsx'

const pages: { path: string, element: React.ReactNode, title?: string, top? : React.ReactNode }[] = [
  { path: "/", element: Index(), top:  <div className="select-none min-h-[101vh] text-orange-400 flex place-content-center text-[30vw] items-center border-slate-400 border-b-2">
  CAN'T
</div> },
  { path: "About", element: About()},
  { path: "Projects", element: Projects()},
  { path: "Live", element: Live()},
];
const errorPage: React.ReactNode = ErrorPage()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={initializeRouter(pages, errorPage)}/>
  </React.StrictMode>,
) 
