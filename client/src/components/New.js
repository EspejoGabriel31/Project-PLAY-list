import { useState } from "react";

export default function New() {
const [name, setName] = useState("")
const [games, setGames] = useState([])

let handleSubmit = async(e) => {
    e.preventDefault();
    try{
        let res= await fetch("/new", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                games: games
            })
    })
        let resJson= await res.json();
        if (res.status === 200) {
          setName("");
          setGames();
    } 
} catch(err) {
        console.log(err);
    };
}
    return(
        <div>
            <main>
                <h1>Create a New PLAYlist</h1>
                <form onSubmit={handleSubmit}  >
                    <div className="form-group">
                        <label htmlFor="name">Playlist Name</label>
                        <input className="form-control" id="name" name="name"  onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="playlistItem">Add Game</label>
                        <input className="form-control" id="games" name="games" onChange={(e) => setGames(e.target.value)}/>
                    </div>
                    <input type="submit" />
                </form>
            </main>
        </div>
    )
}
