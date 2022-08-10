import { useState } from "react";
import axios from 'axios'
export default function New() {
    const [name, setName] = useState("")
    const [list, setList] = useState("")
    const [games, setGames] = useState([])

    let handleSubmit = async(e) => {
        e.preventDefault();
        console.log(name, list)
        if(list){
            setGames(list.split(','))                               //splits string into array based on ','
            if(games){                                              //checks if games state exists
                console.log("games: ", games)
                axios.post('/new', {name, games})                   //sends data to playlist_controller.js in server to be saved to database
                    .then(r => console.log("REPONSE: ", r.data))    //send back response
                    .catch(e => console.log(e))                     //catches errors
            }
        }
    } 
//     try{
//         /*
//         let res= await fetch("/new", {
//             method: "POST",
//             body: JSON.stringify({
//                 name: name,
//                 list: list
//             })
//         })
//         */
//         let resJson= await res.json();
//         if (res.status === 200) {
//           setName("");
//           setList();
//     } 
// } catch(err) {
//         console.log(err);
//     };
     
    return(
        <div>
            <main>
                <h1>Create a New PLAY-list</h1>
                <form onSubmit={handleSubmit}  >
                    <div className="form-group">
                        <label htmlFor="name">Playlist Name</label>
                        <input className="form-control" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="playgamesItem">Add Games in a Comma Separated List</label>
                        <input 
                            className="form-control" 
                            id="list" 
                            name="list" 
                            value={list} //
                            onChange={(e) => setList(e.target.value)}
                        />
                    </div>
                    <input type="submit" />
                </form>
            </main>
        </div>
    )
}
