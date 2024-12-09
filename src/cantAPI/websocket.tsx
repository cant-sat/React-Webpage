export let ws : WebSocket

export let entries : { [id : string] : unknown[]} = {}


function connect(url : string){
    ws = new WebSocket(url)

    ws.onopen = open

    ws.onmessage = message

    
}

function message(ev : MessageEvent<any>){
    let data: {entries : {table : string, values : unknown[]}[]} = JSON.parse(ev.data);

    data.entries.forEach((entrie) => {
        if(!entries[entrie.table]){
            entries[entrie.table] = []
        }
        entries[entrie.table] =  entries[entrie.table].concat(entrie.values)
    })

    console.log(entries)
}

function open(ev : Event) {
    console.log(ev)
}

export default connect