function PlaylistItem(props) {

    let temp = props.data

    const simpleView = () => {
        return (
            <div className="card">
                <div classNAme="card-image">
                    <img src="blank"/>
                </div>
                <div className="details">
                    <h2>{temp}</h2>
                </div>
            </div>
        )
    }

    return (       
        <div className="card-wrapper">
            {simpleView()}
        </div>
    )
}

export default PlaylistItem