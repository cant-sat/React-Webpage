export let ws : WebSocket

function connect(url : string){
    ws = new WebSocket(url)

    ws.onmessage = message

    ws.onopen = open

    

    
}

function message(ev : MessageEvent<any>){
    let data: {entries : {table : string, values : unknown[]}[]} = JSON.parse(ev.data);
}

function open(ev : Event) {

}

export default connect