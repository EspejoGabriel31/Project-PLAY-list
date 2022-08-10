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
        setGames(list.split(','))
        if(games){
            console.log("games: ", games)
            axios.post('/new', {name, games})
                .then(r => console.log(r.data))
                .catch(e => console.log(e))
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
                <h1>Create a New PLAYgames</h1>
                <form onSubmit={handleSubmit}  >
                    <div className="form-group">
                        <label htmlFor="name">Playgames Name</label>
                        <input className="form-control" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="playgamesItem">Add Game</label>
                        <input className="form-control" id="list" name="list" value={list} onChange={(e) => setList(e.target.value)}/>
                    </div>
                    <input type="submit" />
                </form>
            </main>
        </div>
    )
}
