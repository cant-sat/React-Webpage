
function Index() {

    return (
        <>
            {Array.from({length: 100}, (_, i) =>
                <>
                    Index {i + 1} <br />
                </>
            )}
        </>
    );
}


export default Index