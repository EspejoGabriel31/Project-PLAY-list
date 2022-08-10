import { useState } from "react"
import axios from 'axios'

export default function Edit() {

    const [name, setName] = useState("")
    const [list, setList] = useState("")
    const [games, setGames] = useState([])

    let handleSubmit =async(e) => {
        e.preventDefault();
        console.log(name, list)
        if(list){
            setGames(list.split(','))
            if(games){
                console.log("games: ", games)
                axios.post('/edit', {name, games})
        .then(r => console.log("RESPONSE", r.data))
        .catch(e => console.log(e))
            }
        }

    }
    return(
        <div>
        <main>
        <h1>Edit Playlist</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Playgames Name</label>
                <input className="form-control" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
            <div className="form-group">
                <label htmlFor="playgamesItem">Edit Games</label>
                <input className="form-control" id="list" name="list" value={list} onChange={(e) => setList(e.target.value)} required/>
            </div>
            <input className="btn btn-primary" type="submit" />
        </form>
    </main>
    </div>
    )
}