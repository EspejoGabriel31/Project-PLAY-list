import PlaylistItem from './PlaylistItem'

function Playlist(props) {

    const display = props.data.map((item, index) => {
        return (
            <PlaylistItem item={item} key={index} />
        )
    })
    return(
        <div style={'overflow'}>
            {display}
        </div>
    )
}

export default Playlist