
import { createHashRouter, RouteObject,} from 'react-router-dom'
import App from './App'


function initializeRouter(pages : { path: string, element: React.ReactNode, title?: string, top? : React.ReactNode }[], errorPage : React.ReactNode) {
    let routes: RouteObject[] = []

    let i: number = 0



    pages.forEach((route) => {

        let t : RouteObject = {};
        t.path = route.path
        
        t.element = <App content={route.element} title={route.title} top={route.top}/>

        routes.push(t)

        i++
    })

    routes[0].errorElement = errorPage


    return createHashRouter(routes)
}

export default initializeRouter