import { useState } from "react"
import axios from 'axios'

export default function Edit() {

    const [name, setName] = useState("")
    const [games, setGames] = useState([])

    let handleSubmit =async(e) => {
        e.preventDefault();
        console.log(name, games)
        axios.post('/edit', {name, games})
        .then(r => console.log(r.data))
        .catch(e => console.log(e))
    }
    return(
        <div>
        <main>
        <h1>Edit Playlist</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Playlist Name</label>
                <input className="form-control" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                {/* //cute pic here?
                <div>
                <label htmlFor="pic">Playlist Picture</label>
                <input type="url" className="form-control" id="pic" name="pic" />
            </div> */}
            <div className="form-group">
                <label htmlFor="playlistItem">Edit Games</label>
                <input className="form-control" id="games" name="games" value={games} onChange={(e) => setGames(e.target.value)} required/>
            </div>
            <input className="btn btn-primary" type="submit" />
        </form>
    </main>
    </div>
    )
}