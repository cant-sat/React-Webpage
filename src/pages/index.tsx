
function index() {
    let content = <> <br/>Index </>;
    return (
        <>
            {Array.from({length: 100}, (_, i) =>
                <>
                    {content} {i + 1}
                </>
            )}
        </>
    );
}


export default index