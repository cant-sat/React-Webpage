function index(){
    let content = <>Index <br/></>
    return <>      {[...Array(100)].map(() =>
        content )}</>
}


export default index