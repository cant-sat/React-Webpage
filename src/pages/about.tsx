import { ReactNode } from "react"

function about(){
    return (<div className="min-h-screen">
        <div className="underline text-5xl text-center m-8">Members</div>
        <div className="flex flex-wrap place-content-center">
            <MemberCard>
                Miguel
            </MemberCard>
        </div>
    </div>)
}

interface CardProps {
    children : ReactNode
}

export function MemberCard({ children } : CardProps) : ReactNode {
    return (
        <div className="backdrop-blur-sm bg-neutral-700/40 rounded-3xl border-2 border-neutral-700 p-10 overflow-hidden">{children}</div>
    )
}


export default about