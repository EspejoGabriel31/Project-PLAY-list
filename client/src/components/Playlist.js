import PlaylistItem from "./PlaylistItem";

export default function Playlist(props) {

    // console.log("FROM PLAYLIST: ", props.games)
    
    let temp = props.games

    const display = temp.map((game, i) => {
        return(
            <PlaylistItem data={game} key={i}/>
        )
    })

    return (
        <div>
            <h1>{props.name}</h1>
            {display}
        </div>
    )
}