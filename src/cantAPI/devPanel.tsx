import connect from "./websocket";
import { useState } from "react";

function DeveloperPanel() {
    return (
        <div>
            <hr />
            <div className="text-center text-4xl m-2 mt-4">Developer panel</div>
            <ConnectForm />
        </div>
    )
}


function ConnectForm() {
    const [url, setUrl] = useState("ws://localhost:443")

    const handleConnect = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        connect(url)
    }


    return (
        <form
            onSubmit={handleConnect}
            id="connect"
        >
            <input type="text" className="textInput" placeholder="URL" id="url" value={url} onChange={(event) => { setUrl(event.target.value) }} />
            <button type="submit" className="basicButton">
                connect
            </button>
        </form>
    )
}

export default DeveloperPanel