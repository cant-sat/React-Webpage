let buttons : string[]= ["About", "CanSat", "Live"]


export function TopBar() {
    return <body className="flex bg-slate-900 text-red-700 h-20 items-center place-content-center *:m-2 *:bg-orange-400 *:rounded-2xl *:p-4 *:transition-all">
        {buttons.map((item) => (
            <a href={"/#" + item}>{item}</a>))}
    </body>
}
