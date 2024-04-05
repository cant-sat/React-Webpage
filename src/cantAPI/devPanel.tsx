import connect from "./websocket";
import { useState } from "react";



function DeveloperPanel() {
    return (
        <div>
            <hr />
            <div className="m-2 mt-4 text-4xl text-center">Developer panel</div>
            <ConnectForm />
        </div>
    )
}


function ConnectForm() {
    const [url, setUrl] = useState("ws://localhost:443")
    const [connectDisabled, connectDisabledSet] = useState(false)

    const handleConnect = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        connectDisabledSet(true)
        connect(url)
    }


    return (
        <form
            onSubmit={handleConnect}
            id="connect"
            
        >
            <input type="text" className="textInput" placeholder="URL" id="url" value={url} onChange={(event) => { setUrl(event.target.value) }} disabled={connectDisabled}/>
            <button type="submit" className="basicButton" disabled={connectDisabled}>
                connect
            </button>
        </form>
    )
}

export default DeveloperPanel